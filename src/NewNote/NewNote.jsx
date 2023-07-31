
import './NewNote.css';

const NewNote = () => {
    return (
        <div className="NewNote">
            <div className="NewNoteContainer">
                <textarea className="NewNotePaper" />



            </div>
            <div className="NewNoteMenu">
                <div className="NewNoteMenuContainer">
                    <p>Color</p>
                    <div className="NewNoteMenuColorChange">

                        <button className='NewNoteMenuColorChangeWhiteBtn'></button>
                        <button className='NewNoteMenuColorChangeBlackBtn'></button>
                    </div>
                    <p> Text Color</p>
                    <div className="NewNoteMenuTextChange">

                        <button className='NewNoteMenuColorChangeWhiteBtn WhiteBtn'></button>
                        <button className='NewNoteMenuColorChangeBlackBtn BlackBtn'></button>
                        <button className='NewNoteMenuColorChangeRedBtn'></button>

                        <button className='NewNoteMenuColorChangeBlueBtn'></button>

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