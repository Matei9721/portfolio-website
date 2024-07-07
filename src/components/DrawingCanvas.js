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

        // Add a mousemove event listener to the canvas
        canvas.addEventListener("mousemove", (e) => {
            const { pageX, pageY } = e;

            if (lastPositionRef.current) {
                const { x, y } = lastPositionRef.current;
                // Move the pen to the last position and draw a line to the current position
                ctx.moveTo(x - canvas.offsetLeft + 5, y - canvas.offsetTop -50);
                ctx.lineTo(pageX - canvas.offsetLeft + 5, pageY - canvas.offsetTop -50);
                ctx.stroke();
            }
            // Clear the canvas after a 2-second timeout when there is no activity (mouse no longer moves)
            clearTimeout(clearCanvasTimeout.current); // Clear any existing timeout
            clearCanvasTimeout.current = setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
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
