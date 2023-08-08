import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Header.css';

const Header = ({ NewNoteOpen, SettingsOpen, NotificationOpen }) => {
    const image = localStorage.getItem('image')
    return (
        <div className="Header">
            <div className="HeaderFirstPart">
                <div className='HeaderMenu'>
                    <div className="headerline"></div>
                    <div className="headerline"></div>
                    <div className="headerline"></div>
                </div>
                <Logo />

            </div>
            <Search />
            <div className="HeaderSecondPart">
                <img className='HeaderImage' onClick={SettingsOpen} src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="" />
                <img className='HeaderImage' onClick={NotificationOpen} src="https://cdn-icons-png.flaticon.com/512/2985/2985052.png" alt="" />
                <button className='HeaderBtn' onClick={NewNoteOpen}> Create  new note</button>
                <div className="HeaderImageContainer">
                    <img src={image} alt="" className='HeaderAccountImage' />

                </div>



            </div>





        </div>
    )
}
export default Header;