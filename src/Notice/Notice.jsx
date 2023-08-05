

import { useState } from 'react';
import { useEffect } from 'react';
import './Notice.css';

const Notice = () => {
    const [openNotesForm, setOpenNotesForm] = useState(false);
    const [openNotesCard, setOpenNotesCard] = useState(true);
    const [cards, setCards] = useState([]);
    const [text, setText] = useState('');
    const [creationDateMonth, setCreationDateMonth] = useState(localStorage.getItem('creationDateMonth') || null);
    const [creationDateDate, setCreationDateDate] = useState(localStorage.getItem('creationDateDate') || null);
    const [creationDateYear, setCreationDateYear] = useState(localStorage.getItem('creationDateYear') || null);
    useEffect(() => {
        const storedCards = localStorage.getItem('Tasks');
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, []);
    const StorageChange = (updatedCards) => {
        localStorage.setItem('Tasks', JSON.stringify(updatedCards));
    };

    const NotesFormOpen = () => {
        setOpenNotesForm(true);
        setOpenNotesCard(false)
    }
    const NotesFormClose = () => {
        setOpenNotesForm(false);
        setOpenNotesCard(true)
    }
    const TextChange = (e) => {
        setText(e.target.value)

    }
    const CreateTask = () => {
        if (text !== '') {
            const newCards = [...cards, text];
            setCards(newCards);
            setText('');

            StorageChange(newCards)
        }
        NotesFormClose()
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        const year = now.getFullYear();
        localStorage.setItem('creationDateMonth', month);
        localStorage.setItem('creationDateDate', date);
        localStorage.setItem('creationDateYear', year)
        setCreationDateMonth(month);
        setCreationDateDate(date);
        setCreationDateYear(year)

    }

    const DeleteTask = (index) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setCards(newCards);
        StorageChange(newCards)


    };


    return (
        <div className="Container">
            <div className="NoticeHeader">
                <button className="NoticeHeaderBtn" onClick={NotesFormOpen}>
                    +
                </button>

            </div>
            <div className="NoticeContainer">
                {
                    openNotesForm && (
                        <div className="NoticeForm">
                            <p>Note</p>
                            <input type="text" placeholder='Type note' value={text} onChange={TextChange} />
                            <button onClick={CreateTask}>Save</button>

                        </div>

                    )
                }
                {
                    openNotesCard && (
                        <div className="NoticeCardContainer">
                            <div className="NoticeCardCont">
                                {cards.map((card, index) => (
                                    <div className="NoticeCard" key={index}>
                                        <div className="NoticeCardHeader">
                                            <div className='NoticeCardHeaderText'>0{creationDateDate}.0{creationDateMonth}.{creationDateYear}</div>
                                        </div>

                                        <div className="NoticeCardTextContainer">
                                            <p className='NoticeCardText'>{card}</p>

                                        </div>
                                        <div className="NoticeCardBtnContainer">
                                            <button className='NoticeCardBtn ' onClick={DeleteTask}>
                                                <img src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg" alt="" />
                                            </button>



                                        </div>

                                    </div>

                                ))}

                            </div>



                        </div>

                    )

                }


            </div>


        </div>
    )
}
export default Notice;