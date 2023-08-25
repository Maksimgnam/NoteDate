import { useState } from 'react';
import { useRef } from 'react';


import './NewDraw.css'
const NewDraw = ({ NewDrawClose }) => {
    const aim = localStorage.getItem('aim')
    const image = localStorage.getItem('image');
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [selectType, setSelectType] = useState('round');
    const [size, setSize] = useState(2);
    const [background, setBackground] = useState('white');
    const [color, setColor] = useState('black');



    const startDrawing = (event) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { offsetX, offsetY } = event.nativeEvent;

        ctx.lineWidth = size;
        ctx.lineCap = selectType;
        ctx.strokeStyle = color;
        ctx.stroke();



        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        setIsDrawing(true);

        setContext(ctx);

    };

    const draw = (event) => {
        if (!isDrawing) return;



        const { offsetX, offsetY } = event.nativeEvent;
        context.lineTo(offsetX, offsetY);
        context.stroke();


    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const TypeChange = (e) => {
        setSelectType(e.target.value)
    }
    const SizeChange = (e) => {
        setSize(e.target.value)
    }
    const ColorChange = (e) => {
        setColor(e.target.value)
    }
    const SwitchWhite = () => {
        setBackground('white');

    }
    const SwitchBlack = () => {
        setBackground('black');

    }

    const Style = {
        backgroundColor: background,
    }

    const ColorText = [
        { colorLine: 'black' },
        { colorLine: 'white' },
        { colorLine: 'red' },
        { colorLine: 'green' },
        { colorLine: 'blue' }

    ]



    return (
        <div className='NewDraw'>
            <div className="NewDrawMenu">
                <div className='DrawMenuBackBtn' onClick={NewDrawClose}>
                    <img className='DrawMenuBackBtnImg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
                    <img className='DrawMenuBackBtnImg SecondDrawImg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
                    <p>Back</p>

                </div>
                <div className="NewDrawMenuContainer">




                    <div className="NewDrawClearBtn" >
                        <img src="https://static.thenounproject.com/png/5507757-200.png" alt="" />
                    </div>
                    <div className="NewDrawAgainBtn">
                        <img src="https://cdn2.iconfinder.com/data/icons/video-player-interface/100/video_player-15-512.png" alt="" />

                    </div>
                    <div className="NewDrawSizeContainer">


                        <input type="range" value={size} min={1} max={20} onChange={SizeChange} />
                        <p className='NewDrawSizeText'>{size}</p>
                    </div>

                    <select className='DrawMenuType' value={selectType} onChange={TypeChange}>
                        <option value="round">Round</option>
                        <option value="butt">Butt</option>
                        <option value="square">Square</option>
                    </select>

                    <div className="NewDrawBackgroundContainer">
                        <div className="NewDrawBackgroundBtn BackgroundBtnBlack" onClick={SwitchBlack}></div>
                        <div className="NewDrawBackgroundBtn" onClick={SwitchWhite}></div>

                    </div>
                    <div className="NewDrawColorContainer">

                        <input className='NewDrawColorInput' type="color" value={color} onChange={ColorChange} />
                        {
                            ColorText.map((item, index) => (


                                <div className="NewDrawColorBtn" key={index} style={{ backgroundColor: item.colorLine }} ></div>
                            )
                            )
                        }

                    </div>
                </div>
                <div className="NewDrawMenuAccountContainer">
                    <div className="NewDrawMenuAccountAim">
                        <p>{aim}</p>
                        <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" alt="" />
                    </div>

                    <img src={image} className="NewDrawMenuAccountImage" />



                </div>



            </div>
            <div className='NewDrawPaperContainer'>
                <canvas className='NewDrawPaper'
                    ref={canvasRef}
                    width={1200}
                    height={640}
                    style={Style}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}

                />


            </div>



        </div >
    )
}

export default NewDraw;