import './Problems.css';

const Problems = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    return (
        <div className="Problems">
            <div className="ProblemsText">
                Write your problem
            </div>
            <div className="ProblemsCard">
                <div className='ProblemCardText'> From: {name}</div>
                <div className='ProblemCardText'>Email: {email}  </div>
                <textarea className="ProblemCardInput" placeholder='Type your problem' />
                <button className='ProblemCardBtn'>Send</button>


            </div>

        </div>
    )
}
export default Problems;