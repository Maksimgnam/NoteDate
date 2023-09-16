import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Header.css';

const Header = ({ NewNoteOpen, SettingsOpen, NewDrawOpen }) => {
    const image = localStorage.getItem('image')
    return (
        <div className="Header">
            <div className="HeaderFirstPart">
                <Logo />

            </div>
            {/* <Search /> */}
            <div className="HeaderSecondPart">


                <button className='HeaderBtn' onClick={NewNoteOpen}> Create  new note</button>
                <button className='HeaderBtn SecondHeaderBtn' onClick={NewDrawOpen}> Create  new draw</button>
                <div className="HeaderImageContainer">
                    <img src={image} alt="" className='HeaderAccountImage' />

                </div>



            </div>





        </div>
    )
}
export default Header;