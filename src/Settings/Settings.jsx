

import './Settings.css';
import Information from '../Information/Information';
import { useState } from 'react';
import Problems from '../Problems/Problems';



const Settings = () => {
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const aim = localStorage.getItem('aim');
    const [AccountContainerOpen, setAccountContainerOpen] = useState(true);
    const [InformationOpen, setInformationOpen] = useState(false);
    const [ProblemsOpen, setProblemsOpen] = useState(false);

    const OpenAccountContainer = () => {
        setAccountContainerOpen(true);
        setInformationOpen(false);
        setProblemsOpen(false);


    }
    const OpenInformation = () => {
        setInformationOpen(true);
        setAccountContainerOpen(false);
        setProblemsOpen(false);
    }
    const OpenProblems = () => {
        setProblemsOpen(true);
        setAccountContainerOpen(false);
        setInformationOpen(false)
    }

    return (
        <div className="SettingsMainContainer">
            <div className="SettingsContainer">
                <span className='SettingsMainName'>{name}</span>
                <br />
                <span className='SettingsMainText'> Personal Settings</span>
                <br />
                <div className="SettingsLinksContainer">
                    <div className="SettingsLinks" onClick={OpenAccountContainer}>
                        My account
                        <div className="line"></div>

                    </div>
                    <div className="SettingsLinks" onClick={OpenInformation}>
                        Information
                        <div className="line"></div>
                    </div>
                    <div className="SettingsLinks" onClick={OpenProblems}>
                        Problems

                        <div className="line"></div>
                    </div>




                </div>
                {
                    AccountContainerOpen && (
                        <div className="SettingsAccountContainer">
                            <span className='SettingsAccountText'>Name and  photo</span>
                            <br />
                            <span className='SettingsAccountSpan'>You can change your name and photos and your data will be update on your profile.</span>
                            <br />
                            <span className='SettingsAccountText ImageText'>Photo</span>

                            <div className="SettingsImageContainer">


                                <img src={image} alt="" className='SettingsImage' />
                                <button className='SettingsImageBtn'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/764/764599.png" alt="" />
                                </button>

                            </div>
                            <div className="SettingsNameContainer">
                                <span className='SettingsNameText'>Name</span>
                                <div className="SettingsNameChangeContainer">
                                    <input type="text" value={name} className='SettingsNameChangeInput' />

                                </div>






                            </div>
                            <div className="SettingsLine">

                            </div>
                            <div className="SettingsEmailContainer">
                                <span className='SettingsNameText'>Email</span>
                                <div className="SettingsEmailInputContainer">
                                    <p>We use your email  for better comunication with you </p>
                                    <input type="text" value={email} className='SettingsEmailInput' />




                                </div>


                            </div>
                            <div className="SettingsLine Line">

                            </div>
                            <div className="SettingsAimContainer">
                                <span className='SettingsNameText'>Aim</span>
                                <div className="SettingsAimInputContainer">
                                    <p>Your aim can help us to improve your experience. </p>
                                    <input type="text" value={aim} className='SettingsEmailInput' />




                                </div>



                            </div>
                            <div className="SettingsLine AimLine">

                            </div>

                            <div className="SettingsDeleteContainer">
                                <button className='SettingsDeleteBtn'>Delete account</button>

                            </div>

                        </div>

                    )
                }
                {
                    InformationOpen && (

                        <Information />

                    )
                }
                {
                    ProblemsOpen && (
                        <Problems />
                    )
                }
















            </div>




        </div >
    )
}
export default Settings;