
import { useState } from 'react';
import './NewNote.css';
import color from './NewNoteImages/color.png';

const NewNote = ({ NewNoteClose }) => {

    const [colorMenuOpen, setColorMenuOpen] = useState(false);
    const aim = localStorage.getItem('aim');
    const image = localStorage.getItem('image');
    const [size, setSize] = useState(16);
    const [background, setBackground] = useState('white');
    const [context, setContext] = useState('');


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
    const SwitchWhite = () => {
        setBackground('white');

    }
    const SwitchBlack = () => {
        setBackground('black');

    }
    const blockStyle = {
        backgroundColor: background,
        color: background === 'white' ? 'black' : 'white',
        fontSize: `${size}px`
    };

    const OpenColorMenu = () => {
        setColorMenuOpen(!colorMenuOpen)
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
                    <button className="NewNoteMenuAddImage">
                        <img src="data:image/png;base64,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" alt="" />
                        <p>+</p>
                    </button>
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
                        <select name="" id="">
                            <option value="">Monserat</option>
                            <option value="">Arial</option>
                            <option value="">Verdena</option>
                            <option value="">Roboto</option>
                            <option value="">Cursive</option>

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

                            <div className="NewNoteMenuColorBtn"></div>
                            <div className="NewNoteMenuColorBtn BlackBtn"></div>
                            <div className="NewNoteMenuColorBtn RedBtn"></div>
                            <div className="NewNoteMenuColorBtn GreenBtn"></div>




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
                {/* 
                <textarea className="NewNotePaper" style={blockStyle} /> */}
                <div style={blockStyle} className='NewNotePaper' contentEditable={true}>
                    {
                        context
                    }
                </div>



            </div>
            {
                colorMenuOpen && (

                    <div className="NewNoteMenuTextColorMenu">
                        <div className="NewNoteMenuTextColorMenuHeader">
                            <img src={color} className='NewNoteMenuTextColorMenuHeaderImageOne' alt="" />
                            {/* <img src={color2} className='NewNoteMenuTextColorMenuHeaderImageTwo' alt="" />
                <img src={color3} className='NewNoteMenuTextColorMenuHeaderImageOne ThirdImage' alt="" /> */}
                            <p className='NewNoteMenuTextColorMenuHeaderText'>Text Color</p>
                        </div>
                        <div className="NewNoteMenuTextColorMenuInputCont">
                            <input type="color" />

                        </div>
                        <div className="NewNoteMenuTextColorMenuColorLine">

                        </div>
                        <div className="NewNoteMenuTextColorMenuColorBtnContainer">

                            <div className="NewNoteMenuTextColorMenuColorBtn BlackBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GreyBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn LightgreyBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn ">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn RedBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn OrangeRedBtn ">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn BordeuxBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn PomeraniaBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn DarkBlue">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn BlueBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn AquaBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn LightBlue">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GreenBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn OliveBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GrassGreenBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn LightGreen">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GreenYellowBtn ">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn BlueViloetBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn VioletBtn ">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn PurpleBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn RoseBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn PinkBtn">

                            </div>


                            <div className="NewNoteMenuTextColorMenuColorBtn YellowBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GoldBtn ">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn GoldenronBtn ">

                            </div>





                            <div className="NewNoteMenuTextColorMenuColorBtn DarkOrangeBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn OrangeBtn">

                            </div>
                            <div className="NewNoteMenuTextColorMenuColorBtn PeanchBtn">

                            </div>



                        </div>

                    </div>


                )
            }

            {/* <div className="NewNoteMenu">
                <div className="NewNoteMenuContainer">
                    <p>Add image</p>
                    <button className='NewNoteMenuAddImageBtn'>+</button>

                    <p> Font Color</p>
                    <div className="NewNoteMenuColorChange">

                        <button className='NewNoteMenuColorChangeWhiteBtn'></button>
                        <button className='NewNoteMenuColorChangeBlackBtn'></button>
                    </div>
                    <p> Text Color</p>
                    <div className="NewNoteMenuTextChange">
                        <button className='NewNoteMenuTextColorChangeBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn BlackBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn RedBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn YellowBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn GoldBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn LightYellowBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn BlueBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn LightBlueBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn PurpleBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn PinkBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn GreenBtn'></button>
                        <button className='NewNoteMenuTextColorChangeBtn LightGreenBtn'></button>

                    </div>
                    <p>Text size</p>
                    <div className="NewNoteMenuTextSizeChange">
                        <div className="NewNoteMenuTexSizeChangeBtn">8px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">16px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">18px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">20px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">24px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">30px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">32px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">40px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">50px</div>
                        <div className="NewNoteMenuTexSizeChangeBtn">70px</div>




                    </div>
                    <p>Text Font</p>
                    <div className="NewNoteMenuTextTypeChange">
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Monserat
                        </div>
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Veranda
                        </div>

                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Cursive
                        </div>
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            ABeeZee

                        </div>
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Lobster

                        </div>


                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Roboto
                        </div>
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Borel
                        </div>
                        <div className="NewNoteMenuTextTypeChangeBtn">
                            Arial
                        </div>



                    </div>



                </div>
                <div className="NewNoteLIne">

                </div>



                <div className="NewNoteMenuSaveContainer">
                    <button className='NewNoteMenuSaveBtn'>Save</button>
                </div>




            </div> */}



        </div>
    )
}
export default NewNote;