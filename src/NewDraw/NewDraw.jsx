import { useState } from 'react';
import './NewDraw.css'
const NewDraw = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

    const startDrawing = (e) => {
        setIsDrawing(true);
        setPrevPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const draw = (e) => {
        if (!isDrawing) return;

        const canvas = document.querySelector('.drawing-canvas');
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(prevPosition.x, prevPosition.y);
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();

        setPrevPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };
    return (
        <div className="NewDraw">
            <div className='drawing-area'>
                <canvas className='drawing-canvas' onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} />
            </div>

        </div>
    )
}

export default NewDraw;