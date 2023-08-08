
import './Menu.css';

const Menu = ({ ProjectsOpen, HistoryOpen, NoticeOpen, HomeOpen, TrashOpen }) => {

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

                    <div className="MenuBarCard" onClick={ProjectsOpen} >
                        <img src="https://d1k5j68ob7clqb.cloudfront.net/processed/thumb/42mCH48I6l1R0bpSgl.png" alt="" className='MenuBarCardImage ' />
                        <p className='MenuBarCardText'>Projects</p></div>
                    <div className="MenuBarCard" onClick={HistoryOpen}>
                        <img src="https://icon-library.com/images/history-icon/history-icon-0.jpg" alt="" className='MenuBarCardImage' />
                        <p className='MenuBarCardText'>History</p></div>
                    <div className="MenuBarCard" onClick={NoticeOpen} >
                        <img src="https://cdn-icons-png.flaticon.com/512/2798/2798102.png" alt="" className='MenuBarCardImage' />
                        <p className='MenuBarCardText'>Notice</p></div>



                </div>

            </div>
            <div className="MenuDown">
                <div className="MenuDownLine">

                </div>
                <div className='MenuDownContainer' onClick={TrashOpen}>
                    <img className='MenuDownImg' src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="" />
                    <p className='MenuDownText'>Trash</p>

                </div>


            </div>


        </div >
    )
}
export default Menu;