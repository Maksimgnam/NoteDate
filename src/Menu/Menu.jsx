import Logo from '../Logo/Logo';
import './Menu.css';

const Menu = ({ NewNoteOpen, NotesOpen, HistoryOpen, NoticeOpen, SettingsOpen }) => {
    const date = new Date();
    const dateYear = date.getFullYear();
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const aim = localStorage.getItem('aim');
    const email = localStorage.getItem('email')

    return (
        <div className="Menu">
            <Logo />
            <div className="MenuAccountContainer">
                <div className="MenuAccountImageContainer">
                    <img src={image} className="MenuAccountImage" />


                    <p className='MenuAccountText'>{name}</p>

                </div>
                <p className='MenuAccountStudent'>{aim}</p>
                <p className='MenuAccountEmail'>{email}</p>



            </div>

            <div className="MenuBarContainer">
                <p className='MenuBarText'>Menu</p>
                <button className='MenuBarBtn' onClick={NewNoteOpen}>New note</button>
                <div className="MenuBarCardContainer">

                    <div className="MenuBarCard" onClick={NotesOpen} >
                        <img src="https://icon-library.com/images/video-icon-white/video-icon-white-18.jpg" alt="" className='MenuBarCardImage' />
                        <p>Notes</p></div>
                    <div className="MenuBarCard" onClick={HistoryOpen}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" alt="" className='MenuBarCardImage' />
                        <p>History</p></div>
                    <div className="MenuBarCard" onClick={NoticeOpen} >
                        <img src="https://cdn-icons-png.flaticon.com/512/2985/2985052.png" alt="" className='MenuBarCardImage' />
                        <p>Notice</p></div>
                    <div className="MenuBarCard" onClick={SettingsOpen} >
                        <img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="" className='MenuBarCardImage' />
                        <p>Settings</p></div>


                </div>

            </div>
            <div className='MenuDownContainer'>
                <p>Copyright {dateYear}</p>
            </div>

        </div >
    )
}
export default Menu;