import { useState } from 'react';
import './Problems.css';
import emailjs from 'emailjs-com';

const Problems = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const [text, setText] = useState('');

    const submit = (e) => {
        e.preventDefault();


        const emailContent = {
            name: name,
            email: email,
            message: text,


        }
        emailjs
            .send('service_nq2wx9s', 'template_4fazvej', emailContent, 'XIKKVFGQTwbBsdkZH')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });

    }

    return (
        <div className="Problems">
            <div className="ProblemsText">
                Write your problem
            </div>
            <form className="ProblemsCard" onSubmit={submit}>
                <div className='ProblemCardText'> From: {name}</div>
                <div className='ProblemCardText'>Email: {email}  </div>
                <textarea className="ProblemCardInput" placeholder='Type your problem' value={text} onChange={(e) => setText(e.target.value)} />
                <button className='ProblemCardBtn'>Send</button>


            </form>

        </div>
    )
}
export default Problems;