import React, {Component} from 'react';
import {createClient} from 'contentful';
import Question from './question'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})

const questionList = [
    {
        "question": "It is better than weapons pf war",
        "answer": "2",
        "options": [
            "wealth",
            "wisdom",
            "peace"
        ]
    },
    {
        "question": "It can weigh as much as 180 tons",
        "answer": "3",
        "options": [
            "elephant",
            "sun",
            "whale"
        ]
    },
    {
        "question": "what is the boundary of the sea",
        "answer": "3",
        "options": [
            "beach",
            "seashore",
            "sand"
        ]
    },
    {
        "question": "who are the heroes of the forests",
        "answer": "3",
        "options": [
            "rain",
            "soil ",
            "earthworms"
        ]
    },
    {
        "question": "Besides the wonder of creation we must also hear",
        "answer": "3",
        "options": [
            "noise",
            "din",
            "thunder"
        ]
    },
    {
        "question": "creation has .........as opposed to evolution which is chance",
        "answer": "1",
        "options": [
            "goal",
            "chance ",
            "desire"
        ]
    },
    {
        "question": "Matt 7:21-23 can be summarized as .........speaks louder than words",
        "answer": "1",
        "options": [
            "action",
            "will",
            "verbs"
        ]
    },
    {
        "question": "Babylon the great is religious because of its .......involvement",
        "answer": "2",
        "options": [
            "educational",
            "political",
            "psychological"
        ]
    },
    {
        "question": "what is an example of systems of thisngs at Heb 11:3",
        "answer": "2",
        "options": [
            "governments",
            "solar",
            "computer"
        ]
    },
    {
        "question": "who are the two witnesses of Revelation ",
        "answer": "3",
        "options": [
            "russel",
            "lorsch",
            "annointed brs"
        ]
    },
    {
        "question": "Who wrote second Samuel?",
        "answer": "1",
        "options": [
            "Gad",
            "Samuel",
            "Moses"
        ]
    },
    {
        "question": "Where did Peter write his letters?",
        "answer": "3",
        "options": [
            "Jerusalem",
            "Rome ",
            "Babylon"
        ]
    },
    {
        "question": "Which Samaritan city did Jesus preach to the Samaritan woman at the well?",
        "answer": "1",
        "options": [
            "Sychar",
            "Samaria",
            "Mt. Ebal"
        ]
    },
    {
        "question": "Jesus preached to Zachheus in which city?",
        "answer": "2",
        "options": [
            "Jerusalem",
            "Jericho",
            "Capernaum"
        ]
    },
    {
        "question": "How many bulls were used to support the copper altar in Solomon's temple?",
        "answer": "2",
        "options": [
            "7",
            "12",
            "4"
        ]
    },
    {
        "question": "What did Jehovah accomplish on the 4th creative day?",
        "answer": "2",
        "options": [
            "Creation of Animals",
            "Setting of the distinction between day and night.",
            "Creation of plantlife"
        ]
    },
    {
        "question": "The festival of weeks fell in what Jewish month?",
        "answer": "3",
        "options": [
            "Nisan",
            "Chislev",
            "Sivan"
        ]
    },
    {
        "question": "A drachma coin was equivalent to how many day's wages in Jesus' day?",
        "answer": "3",
        "options": [
            "4",
            "2",
            "1"
        ]
    },
    {
        "question": "Who was NOT a contemporary of Jeremiah",
        "answer": "1",
        "options": [
            "Micah",
            "Nahum",
            "Habakkuk"
        ]
    },
    {
        "question": "Which world power was represented by Gold in Daniel's vision?",
        "answer": "2",
        "options": [
            "Medo-Persia",
            "Babylon",
            "Greece"
        ]
    },
    {
        "question": "Name the 4 world powers represented by the 4 metals of Nebuchadnezzar's Dream?",
        "answer": "2",
        "options": [
            "Medo Persia-Gold Head,MedoPersia Silver breasts & arms,Greece- copper belly and thighs, Rome - iron legs",
            "Babylon-Gold Head,MedoPersia Silver breasts & arms,Greece- copper belly and thighs, Rome - iron legs",
            "Babylon-Gold Head,MedoPersia Silver breasts & arms,Babylon- copper belly and thighs, Rome - iron legs"
        ]
    },
    {
        "question": "What is the name of the woman that Peter resurrected?",
        "answer": "1",
        "options": [
            "Thabitha",
            "Eutycus",
            "Dorcas"
        ]
    },
    {
        "question": "What was the firsts miracle Jesus performed?",
        "answer": "2",
        "options": [
            "Healed a blind man",
            "Turned water into wine",
            "feed thousands with 5 loaves of bread and fish"
        ]
    },
    {
        "question": "What is the deliverance of the nation of Israel from Egyptian bondage known as?",
        "answer": "2",
        "options": [
            "Depart",
            "Exodus",
            "Journey"
        ]
    },
    {
        "question": "Which books are known as Gospels?",
        "answer": "3",
        "options": [
            "John, Acts, Peter, Mark",
            "Mark, Luke, Titus, Timothy",
            "Matthew, Mark, Luke, John"
        ]
    },
    {
        "question": "Name John the Baptist's Parents?",
        "answer": "1",
        "options": [
            "Zechariah & Elizabeth",
            "Mary and Joseph",
            "Priscilla & Aquilla"
        ]
    },
    {
        "question": "What was Hannah's Husband's Name?",
        "answer": "2",
        "options": [
            "Joseph",
            "Elkanah",
            "Samuel"
        ]
    },
    {
        "question": "The first one was like a lion and had wings of an Eagle",
        "answer": "1",
        "options": [
            "Babylon",
            "Rome",
            "Greece"
        ]
    },
    {
        "question": "Name Jacob's Sons",
        "answer": "1",
        "options": [
            "Asher, Ruben, Simon, Gad, Dan, Benjamin, Joseph, Zebulan, Naphthali, Judah, Levi, Issachar",
            "Asher, Ruben, Simon, Gad, Dan, Abel, Joseph, Zebulan, Naphthali, Judah, Levi, Issachar",
            "Asher, Ruben, Simon, Gad, Dan, Benjamin, Joseph, Zebulan, Naphthali, Judah, Levi, Isaac"
        ]
    },
    {
        "question": "Timothy's mother's name",
        "answer": "2",
        "options": [
            "Mary",
            "Eunice",
            "Elizabeth"
        ]
    },
    {
        "question": "How many wives and concubine did Solomon have",
        "answer": "1",
        "options": [
            "300 & 700",
            "200&500",
            "700&300"
        ]
    },
    {
        "question": "who only like Jesus is said to be an only begotten son and how so",
        "answer": "3",
        "options": [
            "Joseph",
            "Judah",
            "Isaac because was Abraham's only son by Gods promise and only son by Sarah"
        ]
    },
    {
        "question": "which 2 gospels discuss the sermon on the mount",
        "answer": "2",
        "options": [
            "Mathew and John",
            "Mathew 5-7 and Luke 6",
            "Luke and John"
        ]
    },
    {
        "question": "Who  became the  new apostle when Judas betrayed Jesus",
        "answer": "1",
        "options": [
            "Matthias",
            "James",
            "Peter"
        ]
    },
    {
        "question": "name and describe the world powers foretold by Daniel",
        "answer": "3",
        "options": [
            "Greece gold,Rome clay, anglo america silver , made persia clay and stone",
            "anglo america Gold, medo Persia clay, Rome Gold, Babylon silver",
            "Babylon gold, medo-Persia silver, Greece copper, Rome clay, Anglo America clay and iron"
        ]
    },
    {
        "question": "luke not an apostle. where get info on Jesus life",
        "answer": "3",
        "options": [
            "Gods spirit",
            "from friends",
            "Ref from Mathew a account and interviews eg mary"
        ]
    },
    {
        "question": "what's difference disciple and apostle",
        "answer": "3",
        "options": [
            "servant",
            "slave",
            "disciple learner, student apostle one sent forth eg the 12"
        ]
    },
    {
        "question": "what's the age difference between Jesus and John the Baptist ",
        "answer": "1",
        "options": [
            "6 months ",
            "1 year",
            "9 months"
        ]
    },
    {
        "question": "what prophet was serving when Asa ruled",
        "answer": "2",
        "options": [
            "Jeremiah",
            "Elijah",
            "Hoseah"
        ]
    },
    {
        "question": "how many new additions to Gods name have been found from recent research",
        "answer": "1",
        "options": [
            "6",
            "4",
            "3"
        ]
    },
    {
        "question": "When was the passover done?",
        "answer": "2",
        "options": [
            "14",
            "33",
            "607"
        ]
    },
    {
        "question": "Who was the first to be healed by Jesus?",
        "answer": "1",
        "options": [
            "Deaf man",
            "Blind man",
            "Lazarus"
        ]
    },
    {
        "question": "Who was stonned for his Faith?",
        "answer": "1",
        "options": [
            "Stephen",
            "A Corinthian",
            "Paul"
        ]
    },
    {
        "question": "How many days did it take for the ark to touch the ground?",
        "answer": "3",
        "options": [
            "120 days",
            "80 days",
            "150 days"
        ]
    },
    {
        "question": "Which publication was realised in the recent Anual Meeting?",
        "answer": "1",
        "options": [
            "Enjoy Life",
            "NWT",
            "The Emphasiezed Bible"
        ]
    },
    {
        "question": "When Jesus Died, Did Peter Catch fish?",
        "answer": "1",
        "options": [
            "Yes",
            "No",
            "What?"
        ]
    },
    {
        "question": "Who comforted Jesus During his last few days?",
        "answer": "2",
        "options": [
            "Peter",
            "An Angel",
            "John"
        ]
    },
    {
        "question": "How long did Adam live for?",
        "answer": "2",
        "options": [
            "675",
            "965",
            "1065"
        ]
    },
    {
        "question": "There are ___ books in the Bible",
        "answer": "3",
        "options": [
            "60",
            "65",
            "66"
        ]
    },
    {
        "question": "Who wrote the Bible book of Esther",
        "answer": "1",
        "options": [
            "Mordecai",
            "Moses",
            "Esther"
        ]
    }
]

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
        questions: questionList
    }

    // componentDidMount() {
    //     client.getEntries({
    //         content_type: 'question'
    //     }).then(res => {
    //         console.log(res)
    //         this.setState({questions: res.items.map(q => q.fields)})
    //     })
    // }

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