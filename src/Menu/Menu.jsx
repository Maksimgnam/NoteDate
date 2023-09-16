
import './Menu.css';

const Menu = ({ HomeOpen, SettingsOpen }) => {

    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const aim = localStorage.getItem('aim');
    const email = localStorage.getItem('email')

    return (
        <div className="Menu">


            <div className="MenuBarContainer">
                <div className="MenuBarImageContainer">
                    <img src={image} alt="" className='MenuBarImage' />
                    <div className="MenuBarTextContainer">
                        <div className='MenuBarName'>{name}</div>

                        <div className='MenuBarText'>{email}</div>

                    </div>



                </div>
                <div className="MenuBarAimContainer">
                    <p>      {aim}</p>

                    <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" alt="" />

                </div>

                <div className="MenuBarCardContainer">

                    <div className="MenuBarCard" onClick={HomeOpen} >
                        <img src="https://icon-library.com/images/home-icon-png-transparent/home-icon-png-transparent-15.jpg" alt="" className='MenuBarCardImage HomeImage' />
                        <p className='MenuBarCardText HomeText'>Home</p></div>

                    <div className="MenuBarCard" onClick={SettingsOpen} >
                        <img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="" className='MenuBarCardImage ' />
                        <p className='MenuBarCardText'>Settings</p></div>




                </div>

            </div>
            {/* <div className="MenuDown">
                <div className="MenuDownLine">

                </div>
                <div className='MenuDownContainer' onClick={TrashOpen}>
                    <img className='MenuDownImg' src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="" />
                    <p className='MenuDownText'>Trash</p>

                </div>


            </div> */}


        </div >
    )
}
export default Menu;