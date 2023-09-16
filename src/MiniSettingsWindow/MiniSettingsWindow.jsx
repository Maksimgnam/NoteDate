
import './MiniSettingsWindow.css';
const MiniSettingsWindow = ({ SettingsOpen }) => {

    const name = localStorage.getItem('name');
    const aim = localStorage.getItem('aim');
    const email = localStorage.getItem('email')

    return (
        <div className="MiniSettingsWindow">
            <div className="MiniSettingsWindowTextContainer">
                <div className='MiniSettingsWindowName'>{name}</div>
                <div className='MiniSettingsWindowText'>{aim}</div>
                <div className='MiniSettingsWindowText'>{email}</div>

            </div>

            <button onClick={SettingsOpen}>Settings</button>
        </div>
    )
}

export default MiniSettingsWindow;