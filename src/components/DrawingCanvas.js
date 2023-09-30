import { useRef, useEffect } from "react";

/**
 * Represents a drawing canvas that creates trails as the user moves the mouse.
 *
 * @component
 */

const Draw = () => {
    // Create a reference to the canvas element
    const canvasRef = useRef(null);
    // Store the last position of the mouse
    const lastPositionRef = useRef(null);
    // Store a timeout ID
    let clearCanvasTimeout;

    useEffect(() => {
        // Get the canvas and its context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Add a mousemove event listener to the canvas
        canvas.addEventListener("mousemove", (e) => {
            // Set the drawing settings
            ctx.lineWidth = 0.1;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#ffffff";
            ctx.globalAlpha = 0.1;

            const { pageX, pageY } = e;

            if (lastPositionRef.current) {
                const { x, y } = lastPositionRef.current;
                // Move the pen to the last position and draw a line to the current position
                ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
                ctx.lineTo(pageX - canvas.offsetLeft, pageY - canvas.offsetTop);
                ctx.stroke();
            }
            // Clear the canvas after a 2-second timeout
            clearTimeout(clearCanvasTimeout); // Clear any existing timeout
            clearCanvasTimeout = setTimeout(() => {
                ctx.reset()
            }, 200);


            // Update the last position
            lastPositionRef.current = { x: pageX, y: pageY };
        });
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", width: "100%", height: "100%" }}
            width={window.innerWidth}
            height={window.innerHeight - 100}
        />
    );
};

export default Draw;
