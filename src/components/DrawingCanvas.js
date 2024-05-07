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
        // let points = [];
        // let s = 0;
        // animate();
        //
        // function drawLatestLines() {
        //     s += 0.5;
        //     let ss = parseInt(s);
        //     if (s > points.length - 2) {
        //         return;
        //     }
        //
        //
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.beginPath();
        //     ctx.moveTo(points[ss].x, points[ss].y);
        //     for (let i = ss; i < points.length; i++) {
        //         ctx.lineTo(points[i].x, points[i].y);
        //
        //     }
        //     ctx.stroke();
        // }
        //
        // function animate() {
        //     requestAnimationFrame(animate);
        //     drawLatestLines();
        // }
        //
        // function clearMemory() {
        //     console.log("Clearing memory")
        //     points = [];
        //     s = 0;
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.beginPath();
        //     setTimeout(clearMemory,25000);
        // }
        //
        // clearMemory();

        // clearTimeout(clearCanvasTimeout); // Clear any existing timeout
        // clearCanvasTimeout = setTimeout(() => {
        //     //ctx.reset()
        //     console.log("Clearing memory")
        //     points = [];
        //     s = 0;
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.beginPath();
        // }, 1000);
        // Set the drawing settings
        //ctx.lineWidth = 0.1;
        // ctx.lineCap = "round";
        // ctx.strokeStyle = "#ffffff";
        //ctx.globalAlpha = 0.1;

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
                // points.push({
                //     x: x - canvas.offsetLeft + 5,
                //     y: y - canvas.offsetTop -50
                // });
                // Move the pen to the last position and draw a line to the current position
                ctx.moveTo(x - canvas.offsetLeft + 5, y - canvas.offsetTop -50);
                ctx.lineTo(pageX - canvas.offsetLeft + 5, pageY - canvas.offsetTop -50);
                ctx.stroke();
            }
            // Clear the canvas after a 2-second timeout
            clearTimeout(clearCanvasTimeout); // Clear any existing timeout
            clearCanvasTimeout = setTimeout(() => {
                //ctx.reset()
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
