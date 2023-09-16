import Menu from '../Menu/Menu';
import Settings from '../Settings/Settings';
import './Main.css';
import { useState } from 'react';
import NewNote from '../NewNote/NewNote';
import Registration from '../Registration/Registration';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NewDraw from '../NewDraw/NewDraw';




const Main = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMainContainer, setOpenMainContainer] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(true)
    const [openHeader, setOpenHeader] = useState(false);
    const [newNotes, setNewNotes] = useState(false);
    const [newDraw, setNewDraw] = useState(false)
    const [home, setHome] = useState(true);
    const [settings, setSettings] = useState(false);












    const NewNoteOpen = () => {
        setNewNotes(true);
        setNewDraw(false)
        setOpenHeader(false)
        setMenuOpen(false);
        setOpenMainContainer(false);





    }
    const NewDrawOpen = () => {
        setNewDraw(true)
        setNewNotes(false);
        setOpenHeader(false)
        setMenuOpen(false);
        setOpenMainContainer(false);

    }
    const NewDrawClose = () => {
        setNewDraw(false)
        setOpenHeader(true)
        setMenuOpen(true);
        setOpenMainContainer(true);

    }
    const NewNoteClose = () => {
        setNewNotes(false);
        setOpenHeader(true)
        setMenuOpen(true);
        setOpenMainContainer(true);



    }
    const HomeOpen = () => {
        setHome(true);
        setSettings(false)


    }




    const SettingsOpen = () => {
        setSettings(true);
        setHome(false);


        setOpenMainContainer(true)
        setNewNotes(false)
        setNewDraw(false);
        setOpenHeader(true)
        setMenuOpen(true)





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
                    <Header NewNoteOpen={NewNoteOpen} NewDrawOpen={NewDrawOpen} SettingsOpen={SettingsOpen} />

                )
            }

            <div className="MainComponetContainer">




                {
                    menuOpen && (
                        <Menu HomeOpen={HomeOpen} SettingsOpen={SettingsOpen} />

                    )
                }

                {
                    openMainContainer && (

                        <div className="MainContainer">
                            {
                                home && (
                                    <Home NewNoteOpen={NewNoteOpen} />
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
                        <NewNote NewNoteClose={NewNoteClose} SettingsOpen={SettingsOpen} />

                    )
                }
                {
                    newDraw && (
                        <NewDraw NewDrawClose={NewDrawClose} />


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