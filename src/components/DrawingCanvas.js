import { useRef, useEffect } from "react";

/**
 * Represents a drawing canvas that creates trails as the user moves the mouse.
 *
 * @component
 */

const Draw = () => {
    // Create a reference to the canvas element
    const canvasRef = useRef(null);
    // Create a reference to the timeout ID element
    let clearCanvasTimeout = useRef(null);
    // Store the last position of the mouse
    const lastPositionRef = useRef(null);

    useEffect(() => {
        // Get the canvas and its context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // Set the drawing settings
        ctx.lineWidth = 0.1;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 0.1;

        const handleMouseMove = (event) => {
            const bounds = canvas.getBoundingClientRect();
            const isInsideCanvas = event.clientX >= bounds.left
                && event.clientX <= bounds.right
                && event.clientY >= bounds.top
                && event.clientY <= bounds.bottom;

            if (!isInsideCanvas) {
                lastPositionRef.current = null;
                return;
            }

            const currentPosition = {
                x: event.clientX - bounds.left,
                y: event.clientY - bounds.top,
            };

            if (lastPositionRef.current) {
                const { x, y } = lastPositionRef.current;
                // Move the pen to the last position and draw a line to the current position
                ctx.moveTo(x, y);
                ctx.lineTo(currentPosition.x, currentPosition.y);
                ctx.stroke();
            }
            // Clear the canvas after a 2-second timeout when there is no activity (mouse no longer moves)
            clearTimeout(clearCanvasTimeout.current); // Clear any existing timeout
            clearCanvasTimeout.current = setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
            }, 200);

            // Update the last position
            lastPositionRef.current = currentPosition;
        };

        // Listen on the window so the visual canvas never blocks links or hero interactions.
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(clearCanvasTimeout.current);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}
            width={window.innerWidth}
            height={window.innerHeight - 100}
        />

    );
};

export default Draw;
