import React, {useState} from 'react';

const Question = (props) => {
    const [answer, setAnswer] = useState(null)
    const submit = () => {
        if(answer === null) {
            alert('A valid choice must be selected!')
            return
        }

        if(answer === props.answer) {
            alert('Correct! You have earned 1 point.')
        } else {
            alert(`Sorry that answer is incorrect. The correct answer is '${props.options[props.answer - 1]}'`)
        }
        props.submitQuestion(answer)

    }

    const selectAnswer = (evt) => {
        setAnswer(parseInt(evt.target.value))
    }

    return (<div>
        <h5>Question #{props.question_no + 1}</h5>
        <p>{props.question}</p>
        <ul className="list-group">
            {props.options.map((opt, optID) => (
                <li className="list-group-item" key={optID}> 
                    <input 
                      type="radio" 
                      name="answer" 
                      value={optID+1}
                      onClick={selectAnswer}/> {opt}
                </li>
            ))}
        </ul>
        <br />
        <button className="btn btn-primary" onClick={submit}>Submit</button>
    </div>)
}

export default Question;