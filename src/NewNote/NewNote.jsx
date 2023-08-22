
import { useState } from 'react';
import './NewNote.css';
import color from './NewNoteImages/color.png';
import { useEffect } from 'react';

const NewNote = ({ NewNoteClose }) => {

    const [colorMenuOpen, setColorMenuOpen] = useState(false);
    const aim = localStorage.getItem('aim');
    const image = localStorage.getItem('image');
    const [size, setSize] = useState(16);
    const [bold, setBold] = useState(100)
    const [background, setBackground] = useState('white');
    const [context, setContext] = useState('');

    const [selectColor, setSelectColor] = useState('black');
    const [selectFont, setSelectFont] = useState('Arial')

    const fontOptions = [
        'Arial',
        'Helvetica',
        'Times New Roman',
        'Courier New',
        'Verdana',
        'Georgia',
        'Palatino',
        'Garamond',
        'Comic Sans MS',
        'Impact',
        'Lucida Console',
        'Tahoma',
        'Trebuchet MS',
        'Century Gothic',
        'Calibri',
        'Arial Narrow',
        'Franklin Gothic Medium',
        'Baskerville',
        'Copperplate',
        'Futura',
        'Cursive',
        'Helvetica Neue',
        'Roboto',
        'Open Sans',
        'Lato',
        'Montserrat',
        'Raleway',
        'Oswald',
        'Source Sans Pro',
        'Playfair Display',
        'Noto Sans',
        'Merriweather',
        'Droid Sans',
        'PT Sans',
        'Ubuntu',
        'Bebas Neue',
        'Exo',
        'Pacifico',
        'Cabin',
        'Crimson Text',
        'Quicksand',
    ];
















    // const [selectImage, setSelectImage] = useState(null);
    // const [imagePosition, setImagePosition] = useState({ x: 430, y: 130 });
    // const [dragg, setDragg] = useState(false);

    // const ChangeImage = (e) => {
    //     const selectedFile = e.target.files[0];
    //     if (selectedFile) {
    //         const imageUrl = URL.createObjectURL(selectedFile);
    //         setSelectImage(imageUrl);
    //     }

    // }

    // const DragStart = () => {
    //     setDragg(true)
    // }
    // const DragImages = (event) => {
    //     if (dragg) {
    //         const newX = imagePosition.x + event.movementX;
    //         const newY = imagePosition.y + event.movementY;
    //         setImagePosition({ x: newX, y: newY });
    //     }
    // };
    // const DragEnd = () => {
    //     setDragg(false);
    // }



    const color = [
        { textColor: "white" },
        { textColor: "black" },
        { textColor: "red" },
        { textColor: "green" },

    ]

    const MenuColor = [

        { textColor: "black" },
        { textColor: "grey" },
        { textColor: "lightgrey" },
        { textColor: "white" },
        { textColor: "red" },
        { textColor: "orangered" },
        { textColor: "#B53838" },

        { textColor: "#CA634C" },
        { textColor: "darkblue" },
        { textColor: "blue" },
        { textColor: "lightblue" },
        { textColor: "aqua" },
        { textColor: "green" },
        { textColor: "olive" },
        { textColor: "#7ed957" },
        { textColor: "lightgreen" },
        { textColor: "blueviolet" },
        { textColor: "violet" },
        { textColor: "purple" },
        { textColor: "rosybrown" },
        { textColor: "pink" },
        { textColor: "greenyellow" },
        { textColor: "yellow" },
        { textColor: "gold" },
        { textColor: "goldenrod" },
        { textColor: "darkorange" },
        { textColor: "orange" },
        { textColor: "peachpuff" },



    ]


    const addSize = () => {
        if (size < 70) {
            setSize(Math.min(size + 2, 70));
        }
    }
    const minusSize = () => {
        if (size > 16) {
            setSize(Math.max(size - 2, 16))
        }
    }

    const addBold = () => {
        if (bold < 900) {
            setBold(Math.min(bold + 100, 900))
        }
    }
    const minusBold = () => {
        if (bold > 100) {
            setBold(Math.min(bold - 100, 100))
        }
    }
    const SwitchWhite = () => {
        setBackground('white');

    }
    const SwitchBlack = () => {
        setBackground('black');

    }
    const blockStyle = {
        backgroundColor: background,
        color: selectColor,
        fontSize: `${size}px`,
        fontFamily: selectFont,
        fontWeight: bold
    };


    const TextColorChange = (newColor) => {
        setSelectColor(newColor)
    }



    const OpenColorMenu = () => {
        setColorMenuOpen(!colorMenuOpen)
    }


    const FontChange = (e) => {
        setSelectFont(e.target.value)
    }

    return (
        <div className="NewNote">
            <div className="NewNoteMenu">

                <button className="NewNoteMenuBackBtn" onClick={NewNoteClose}>
                    <img className='NewNoteMenuBackBtnBtnImg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
                    <img className='NewNoteMenuBackBtnBtnImg SecondBtnImage' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
                    <p>Back</p>

                </button>

                <div className="NewNoteMenuContainer">
                    <div className="NewNoteMenuBold">
                        <img src="https://cdn-icons-png.flaticon.com/512/84/84266.png" alt="" />
                        <div className="NewNoteMenuBoldCounter">
                            <button className="NewNoteMenuBoldCounterBtn" onClick={minusBold}>-</button>
                            <p>{bold}</p>
                            <button className="NewNoteMenuBoldCounterBtn" onClick={addBold}>+</button>

                        </div>


                    </div>
                    <div className="NewNoteMenuTextSizeContainer">
                        <img src="https://static.thenounproject.com/png/3552109-200.png" alt="" />
                        <div className="NewNoteMenuTextSizeCounter">
                            <button className='NewNoteMenuTextSizeCounterBtn ' onClick={minusSize}>-</button>
                            <p className='NewNoteMenuTextSizeCounterText'>{size}</p>
                            <button className='NewNoteMenuTextSizeCounterBtn' onClick={addSize}>+</button>

                        </div>
                    </div>
                    <div className="NewNoteMenuTextfontContainer">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-text-font-2653386-2202576.png" alt="" />
                        <select onChange={FontChange} value={selectFont}>
                            {
                                fontOptions.map((font) => (
                                    <option key={font} value={font}>{font}</option>
                                ))
                            }


                        </select>
                    </div>
                    <div className="NewNoteMenuBackgroundColorContainer">
                        <img className='NewNoteMenuBackgroundColorImage' src="https://static.thenounproject.com/png/61592-200.png" alt="" />
                        <div className="NewNoteMenuColorBtn" onClick={SwitchWhite}></div>
                        <div className="NewNoteMenuColorBtn BlackBtn" onClick={SwitchBlack}></div>
                    </div>
                    <div className="NewNoteMenuTextColorContainer">
                        <img className='NewNoteMenuBackgroundColorImage' src="https://static.thenounproject.com/png/5498149-200.png" alt="" />
                        <div className="NewNoteMenuTextColorInput">
                            <input type="color" />
                        </div>
                        <div className="NewNoteMenuTextColorBtnContainer">
                            {
                                color.map((item, index) => (
                                    <button className='NewNoteMenuColorBtn' key={index} style={{ backgroundColor: item.textColor, }} onClick={() => TextColorChange(item.textColor)}></button>
                                ))
                            }
                            {/* <div className="NewNoteMenuColorBtn"></div>
                            <div className="NewNoteMenuColorBtn BlackBtn"></div>
                            <div className="NewNoteMenuColorBtn RedBtn"></div>
                            <div className="NewNoteMenuColorBtn GreenBtn"></div> */}
                        </div>
                        <div className="NewNoteMenuMoreColor" onClick={OpenColorMenu}>
                            <img src="https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="NewNoteMenuAccount">
                    <div className="NewNoteMenuAccountAim">
                        <p className='NewNoteMenuAccountAimText'>  {aim}</p>
                        <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" alt="" />


                    </div>

                    <img className='NewNoteMenuAccountAimImage' src={image} alt="" />


                </div>

            </div>
            <div className="NewNoteContainer">

                <div
                    style={blockStyle}
                    className='NewNotePaper'
                    contentEditable={true}
                // onMouseDown={DragStart}
                // onMouseMove={DragImages}
                // onMouseUp={DragEnd}

                >
                    {/* 
                    {selectImage && (
                        <img
                            className='NewNotePaperImage'
                            src={selectImage}

                            style={{
                                ...blockStyle,  // Inherit parent styles
                                position: 'absolute',
                                left: imagePosition.x,
                                top: imagePosition.y,
                                cursor: 'move',
                            }}
                            draggable={false}
                        />
                    )} */}
                    {context}
                </div>
            </div>





            {
                colorMenuOpen && (

                    <div className="NewNoteMenuTextColorMenu">
                        <div className="NewNoteMenuTextColorMenuHeader">
                            <img src={color} className='NewNoteMenuTextColorMenuHeaderImageOne' alt="" />
                            <p className='NewNoteMenuTextColorMenuHeaderText'>Text Color</p>
                        </div>
                        <div className="NewNoteMenuTextColorMenuInputCont">
                            <input type="color" />

                        </div>
                        <div className="NewNoteMenuTextColorMenuColorLine">

                        </div>
                        <div className="NewNoteMenuTextColorMenuColorBtnContainer">

                            {
                                MenuColor.map((item, index) => (
                                    <div className="NewNoteMenuTextColorMenuColorBtn" key={index} style={{ backgroundColor: item.textColor, }} onClick={() => TextColorChange(item.textColor)} >

                                    </div>

                                ))
                            }






                        </div>

                    </div>


                )
            }
        </div >
    )
}
export default NewNote;