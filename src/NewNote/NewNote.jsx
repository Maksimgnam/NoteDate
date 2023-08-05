
import './NewNote.css';

const NewNote = () => {
    return (
        <div className="NewNote">
            <div className="NewNoteContainer">
                <textarea className="NewNotePaper" />



            </div>
            <div className="NewNoteMenu">
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




            </div>



        </div>
    )
}
export default NewNote;