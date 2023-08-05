import Menu from '../Menu/Menu';
import Notes from '../Notes/Notes';
import Notice from '../Notice/Notice';
import History from '../History/History';
import Settings from '../Settings/Settings';
import './Main.css';
import { useState } from 'react';
import NewNote from '../NewNote/NewNote';
import Registration from '../Registration/Registration';


const Main = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMainContainer, setOpenMainContainer] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(true)
    const [newNotes, setNewNotes] = useState(false);
    const [notes, setNotes] = useState(false);
    const [history, setHistory] = useState(false);
    const [notice, setNotice] = useState(false);
    const [settings, setSettings] = useState(false);




    const NewNoteOpen = () => {
        setNewNotes(true);
        setMenuOpen(false);
        setOpenMainContainer(false);

    }
    const NotesOpen = () => {
        setNotes(true);
        setHistory(false);
        setNotice(false);
        setSettings(false)
    }
    const HistoryOpen = () => {
        setHistory(true);
        setNotes(false);

        setNotice(false);
        setSettings(false)

    }
    const NoticeOpen = () => {
        setNotice(true);
        setHistory(false);
        setNotes(false);
        setSettings(false)

    }

    const SettingsOpen = () => {
        setSettings(true)
        setNotice(false);
        setHistory(false);
        setNotes(false);


    }

    const RegistrationClose = () => {
        setOpenRegistration(false);
        setMenuOpen(true);
        setOpenMainContainer(true);
    }





    return (
        <div className="Main">

            {
                menuOpen && (
                    <Menu NewNoteOpen={NewNoteOpen} NotesOpen={NotesOpen} HistoryOpen={HistoryOpen} NoticeOpen={NoticeOpen} SettingsOpen={SettingsOpen} />

                )
            }

            {
                openMainContainer && (

                    <div className="MainContainer">
                        {
                            notes && (
                                <Notes />

                            )
                        }
                        {
                            history && (
                                <History />

                            )
                        }
                        {
                            notice && (
                                <Notice />

                            )
                        }
                        {
                            settings && (
                                <Settings />

                            )
                        }




                    </div>

                )
            }



            {
                newNotes && (
                    <NewNote />

                )
            }
            {
                openRegistration && (

                    <Registration RegistrationClose={RegistrationClose} />

                )
            }





        </div>
    )
}
export default Main;