import Menu from '../Menu/Menu';
import Notes from '../Notes/Notes';
import Notice from '../Notice/Notice';
import History from '../History/History';
import Settings from '../Settings/Settings';
import './Main.css';
import { useState } from 'react';
import NewNote from '../NewNote/NewNote';
const Main = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [openMainContainer, setOpenMainContainer] = useState(true)
    const [newNotes, setNewNotes] = useState(false);
    const [notes, setNotes] = useState(true);
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




        </div>
    )
}
export default Main;