import React, {Component} from 'react';
import {createClient} from 'contentful';
import Question from './question'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})

class BibleQuiz extends Component {
    state = {
        current_question: 0,
        started: false,
        finished: false,
        name: "",
        score: 0,
        correct_percentage: 0,
        correct: [],
        incorrect: [],
        questions: []
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'question'
        }).then(res => {
            console.log(res)
            this.setState({questions: res.items.map(q => q.fields)})
        })
    }

    setName = (evt) => {
        this.setState({name: evt.target.value})
    }

    startGame = () => {
        if(!this.state.name) {
            alert('Please enter your name before continuing!')
            return
        }
        this.setState({started: true})
    }

    answerQuestion = (ans) => {
        const question = this.state.questions[this.state.current_question]
        if(ans != question.answer) {
            const newIncorrect = [...this.state.incorrect]
            newIncorrect.push(this.state.current_question)
            this.setState({incorrect: newIncorrect}, this.updatePercentage)
        } else {
            const newCorrect = [...this.state.correct]
            newCorrect.push(this.state.current_question)
            this.setState({
                correct: newCorrect,
                score: this.state.score + 1
            }, this.updatePercentage)
        }
        if(this.state.current_question + 1 == this.state.questions.length) {
            this.setState({finished: true})
        } else {
            this.setState({current_question: this.state.current_question + 1})
        }
    }

    updatePercentage = () => {
        const total_questions = this.state.incorrect.length + this.state.correct.length
        const correct_percentage = (this.state.correct.length / total_questions) * 100
        this.setState({correct_percentage: correct_percentage.toFixed(2)})
    }

    newGame = () => {
        this.setState({
            started: false,
            finished: false,
            current_question: 0,
            correct: [],
            incorrect: []
        })
    }

    getAnswer = (qID) => {
        const question = this.state.questions[qID]
        return question.options[question.answer - 1]
    }

    render () {
        const cardStyle = {
            maxWidth: '400px',
            margin: '20px auto'
        }

        if(!this.state.started) {
            return (
                <div className="card shadow" style={cardStyle}>
                    <div className="card-body">
                        <h4>Welcome to the bible Quiz</h4>
                        <hr />
                        <p>Please Tell Me your Name:</p>
                        <input 
                          type="text"
                          name="name"
                          id="id_name"
                          className="form-control"
                          value={this.state.name}
                          onChange={this.setName} />
                          <br />
                        <button className="btn btn-primary" onClick={this.startGame}>Start</button>

                    </div>
                </div>
            )
        }

        if(this.state.finished) {
            return (
                <div className="card shadow"  style={cardStyle}>
                    <div className="card-body">
                        <h4>Thanks for playing {this.state.name}</h4>
                        <p>Your score was  {this.state.score}. Well done!</p>
                        <hr />
                        <p>Here are the questions you got right: </p>
                        {this.state.correct.map(qID => (
                            <p><b>Question:</b> {this.state.questions[qID].question}<br />
                                <b style={{color: 'green'}}>Answer:{this.getAnswer(qID)}</b></p>
                        ))}
                        <hr />
                        <p>Here is where you missed the answers:</p>
                        {this.state.incorrect.map(qID => (
                            <p><b>Question:</b> {this.state.questions[qID].question}<br />
                                <b style={{color: 'red'}}>Answer:{this.getAnswer(qID)}</b></p>
                        ))}
                        <button className="btn btn-success" onClick={this.newGame}>Pay Again ?</button>
                    </div>
                </div>
            )
        }

        const headStyle = {
            backgroundColor: 'steelblue',
            color: 'white',
            padding: '0.5rem'
        }

        return (
            <div>
                <h3 style={headStyle}>Hello {this.state.name}</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>Score</h4>
                                    <p><b>Correct Answers: {this.state.correct.length}</b></p>
                                    <p><b>Incorrect Answers: {this.state.correct.length}</b></p>
                                    <p><b>Correct Percentage: {this.state.correct_percentage}%</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <h4>Questions</h4>
                            <div className="card shadow">
                                <div className="card-body">
                                    <Question 
                                        submitQuestion={this.answerQuestion}
                                        question_no={this.state.current_question}
                                        {...this.state.questions[this.state.current_question]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BibleQuiz