import { useState } from 'react';
import './Registration.css';
import Form from '../Form/Form';


const Registration = ({ RegistrationClose }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [RegistrationOpen, setRegistrationOpen] = useState(true);
    const [FormOpen, setFormOpen] = useState(false);


    const Submit = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);


        setName('');
        setPassword('');

        OpenForm()

    }
    const NameChange = (e) => {
        setName(e.target.value)
    }
    const PasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const OpenForm = () => {
        setFormOpen(true);
        setRegistrationOpen(false)
    }

    return (
        <div className="Registration">
            {
                RegistrationOpen && (

                    <form onSubmit={Submit} className="RegistrationForm">
                        <p>Sigh up</p>
                        <div className="RegistrationFormInputContainer">
                            <input type="text" className='RegistrationFormInput' onChange={NameChange} placeholder='Type your name' />
                            <input type="password" className='RegistrationFormInput' onChange={PasswordChange} placeholder='Type your password' />


                        </div>
                        <button className='RegistrationFormBtn'>Sigh up</button>
                    </form>

                )
            }
            {
                FormOpen && (
                    <Form RegistrationClose={RegistrationClose} />

                )
            }



        </div>
    )
}
export default Registration;