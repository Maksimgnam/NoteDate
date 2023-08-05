
import './Form.css';
import { useState } from 'react';
const Form = ({ RegistrationClose }) => {
    const [aim, setAim] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('')
    const AimChange = (e) => {
        setAim(e.target.value)
    }
    const EmailChange = (e) => {
        setEmail(e.target.value)
    }
    const ImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const FormSubmit = () => {
        localStorage.setItem('aim', aim);
        localStorage.setItem('email', email);
        localStorage.setItem('image', image);

        setAim('');
        setEmail('');
        setImage('')
        RegistrationClose()
    }

    return (
        <form className="Form" onSubmit={FormSubmit}>
            <p className='FormText'>Tell a about you</p>
            <div className="FormInputContainer">
                <input type="text" className='RegistrationFormInput' onChange={AimChange} placeholder='Type your aim: student, teacher, any' />
                <input type="email" className='RegistrationFormInput' onChange={EmailChange} placeholder='Type your email' />
                <label class="input-file">




                    <input
                        name="fileInfo"
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={ImageChange}
                        required
                        placeholder='Choose your image'
                        className='photo'
                    />
                    <p className='input__p'>Select your image</p>



                </label>

            </div>
            <button className='FormBtn'>Let's go</button>




        </form>
    )
}
export default Form;