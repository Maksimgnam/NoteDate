import Menu from '../Menu/Menu';
import Notice from '../Notice/Notice';
import History from '../History/History';
import Settings from '../Settings/Settings';
import './Main.css';
import { useState } from 'react';
import NewNote from '../NewNote/NewNote';
import Registration from '../Registration/Registration';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import Trash from '../Trash/Trash';
import Notification from '../Notification/Notification';



const Main = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMainContainer, setOpenMainContainer] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(true)
    const [openHeader, setOpenHeader] = useState(false);
    const [newNotes, setNewNotes] = useState(false);
    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [history, setHistory] = useState(false);
    const [notice, setNotice] = useState(false);
    const [settings, setSettings] = useState(false);
    const [trash, setTrash] = useState(false);
    const [notification, setNotification] = useState(false)






    const NewNoteOpen = () => {
        setNewNotes(true);
        setOpenHeader(false)
        setMenuOpen(false);
        setOpenMainContainer(false);



    }
    const HomeOpen = () => {
        setHome(true);
        setProjects(false);
        setHome(false)
        setHistory(false);
        setTrash(false)
        setNotice(false);

    }
    const ProjectsOpen = () => {
        setProjects(true);
        setHome(false)
        setHistory(false);
        setNotice(false);
        setSettings(false)
        setTrash(false)

    }
    const HistoryOpen = () => {
        setHistory(true);
        setHome(false)
        setProjects(false);

        setNotice(false);
        setSettings(false)
        setTrash(false)

    }
    const NoticeOpen = () => {
        setNotice(true);
        setHome(false)
        setHistory(false);
        setProjects(false);
        setSettings(false)
        setTrash(false)

    }

    const SettingsOpen = () => {
        setSettings(true);
        setHome(false);
        setNotice(false);
        setHistory(false);
        setProjects(false);
        setTrash(false)


    }
    const TrashOpen = () => {
        setTrash(true);
        setSettings(false);
        setHome(false);
        setNotice(false);
        setHistory(false);
        setProjects(false);
    }

    const NotificationOpen = () => {
        setNotification(true);
        setTrash(false);
        setSettings(false);
        setHome(false);
        setNotice(false);
        setHistory(false);
        setProjects(false);

    }

    const RegistrationClose = () => {
        setOpenRegistration(false);
        setOpenHeader(true)
        setMenuOpen(true);
        setOpenMainContainer(true);
    }





    return (
        <div className="Main">
            {
                openHeader && (
                    <Header NewNoteOpen={NewNoteOpen} SettingsOpen={SettingsOpen} NotificationOpen={NotificationOpen} />

                )
            }

            <div className="MainComponetContainer">




                {
                    menuOpen && (
                        <Menu HomeOpen={HomeOpen} ProjectsOpen={ProjectsOpen} HistoryOpen={HistoryOpen} NoticeOpen={NoticeOpen} TrashOpen={TrashOpen} />

                    )
                }

                {
                    openMainContainer && (

                        <div className="MainContainer">
                            {
                                home && (
                                    <Home />
                                )
                            }
                            {
                                projects && (
                                    <Projects />

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
                            {
                                trash && (
                                    <Trash />
                                )
                            }
                            {
                                notification && (

                                    <Notification />
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





        </div>
    )
}
export default Main;