// alert('hello quiz')
$(document).ready(function() {
    let current_question_id = 0
    let current_question = null
    const questions = [{
            question: 'What was the estimated total of the Israelite Camp?',
            options: [
                '300,000',
                '3,000,000',
                '30,000,000'
            ],
            answer: 1
        },
        {
            question: 'Ps65:2 is a scripture used for what sample conversation',
            options: [
                'Initial Call',
                'Return visit 1',
                'Return Visit 2'
            ],
            answer: 0
        },
        {
            question: 'Who because of his weak eyesight blessed jacob instead of Esau?',
            options: [
                'Abraham',
                'Joshua',
                'Issac'
            ],
            answer: 2
        },
        {
            question: 'Who was the father Of John The Baptizer?',
            options: [
                'Zecheriah',
                'Zephaniah',
                'Jacob'
            ],
            answer: 0
        },
        {
            question: 'Who asked Jesus: Are You the King of the Jews?',
            options: [
                'Herod',
                'Nicodemus',
                'Pilate'
            ],
            answer: 2
        },
        {
            question: 'Who asked the Israelites to seperate from their foreign Wives?',
            options: [
                'Asa',
                'Moses',
                'Ezra'
            ],
            answer: 2
        },
        {
            question: 'To whom was it allowed to use meat as food for the first time?',
            options: [
                'Noah',
                'Moses',
                'Aaron'
            ],
            answer: 0
        },
        {
            question: 'To whom did Jehovah set up a sign that anyone who found him could not strike him?',
            options: [
                'Abel',
                'Cain',
                'Seth'
            ],
            answer: 1
        },
        {
            question: 'What prophet interpreted the words writtenon the wall during Belshazzars feast?',
            options: [
                'Daniel',
                'David',
                'Jonah'
            ],
            answer: 0
        },
        {
            question: 'Hadassah was the hebrew name of whom?',
            options: [
                'Esther',
                'Prescilla',
                'Mary'
            ],
            answer: 0
        },
        {
            question: 'What woman sold purple in Phiippi and osted Paul?',
            options: [
                'Rebekah',
                'Lydia',
                'Eunice'
            ],
            answer: 1
        },
        {
            question: 'Who is the Author of Genesis?',
            options: [
                'Moses',
                'Jehovah',
                'Samuel'
            ],
            answer: 1
        },
        {
            question: 'What is the meaning of the name Genesis?',
            options: [
                'Origin',
                'Death',
                'Lifetime'
            ],
            answer: 0
        },
        {
            question: 'Who was a prophet during King Darius reign?',
            options: [
                'Obediah',
                'Haggai',
                'Samuel'
            ],
            answer: 1
        },
        {
            question: 'How many Chapters are in the Bible?',
            options: [
                '1669',
                '2041',
                '1189'
            ],
            answer: 2
        },
        {
            question: 'What does Haggais name mean?',
            options: [
                'Born on A Festival',
                'Protector',
                'Name Of God'
            ],
            answer: 0
        },
        {
            question: 'What does the word apostle mean?',
            options: [
                'Disciple',
                'One sent forth',
                'Preacher of good news'
            ],
            answer: 1
        },
        {
            question: 'Who was foretold to destroy the altar Jeroboam built in Bethel?',
            options: [
                'Josiah',
                'Hezekaih',
                'Jehoshaphat'
            ],
            answer: 0
        }, {
            question: 'What is a bath measure in modern units?',
            options: [
                '220L',
                '22L',
                'None of the above'
            ],
            answer: 1
        }, {
            question: 'How old was Noah when his children were born',
            options: [
                '500',
                '400',
                '510'
            ],
            answer: 0
        }, {
            question: 'How long is a cubit in centimeters?',
            options: [
                '44cm',
                '40cm',
                '42cm'
            ],
            answer: 0
        }, {
            question: 'Who plotted Naboths Death so that here husband would size his vineyard?',
            options: [
                'Athaliah',
                'Jazebel',
                'Eunice'
            ],
            answer: 1
        }, {
            question: 'Her first Husband was rude and ill; Her second husband was a king',
            options: [
                'Achsah',
                'Sarah',
                'Abigail'
            ],
            answer: 2
        }, {
            question: 'What king, being deceived, commanded that all the Jews in the Persian empire should be killed?',
            options: [
                'Hoshea',
                'Zechariah',
                'Ahaseurus'
            ],
            answer: 2
        }, {
            question: 'What King Forsook the counsel of the elders nd followed the advice from friends he grew up with?',
            options: [
                'Hiram',
                'Rehoboam',
                'Melchizedek'
            ],
            answer: 1
        }, {
            question: 'I was 98 years old when at the time of the deluge',
            options: [
                'Noah',
                'Shem',
                'David'
            ],
            answer: 2
        }, {
            question: 'What does the number 7 mean in the Bible?',
            options: [
                'Purity',
                'Imperfection',
                'Complete'
            ],
            answer: 2
        }, {
            question: 'How many creatures did Ezekial see in his vision?',
            options: [
                '8',
                '4',
                '5'
            ],
            answer: 1
        }, {
            question: 'When did the Jews exiled in Babylon return to Jerusalem?',
            options: [
                '677 B.C.E',
                '600 B.C.E',
                '537 B.C.E'
            ],
            answer: 2
        }, {
            question: 'When was Jesus Baptized?',
            options: [
                '33 C.E',
                '29 C.E',
                '30 C.E'
            ],
            answer: 0
        }, {
            question: 'How long did it take for the Bible to be written?',
            options: [
                '1 610 years',
                '2 000 years',
                '150 cubits'
            ],
            answer: 0
        }, {
            question: 'The river made in eden divides itself into 4. Which one does not belong in the list?',
            options: [
                'Euphrates',
                'Nile',
                'Pishon'
            ],
            answer: 1
        }, {
            question: 'How long was the ark of Noah?',
            options: [
                '300 cubits',
                '400 cubits',
                '150 cubits'
            ],
            answer: 0
        }, {
            question: 'Where was Jeremiah thrown by the princes',
            options: [
                'Cistern',
                'Lion Pit',
                'Dungeon'
            ],
            answer: 0
        }, {
            question: 'On what island was the apostle John exiled when he received the revelation of Jesus Christ?',
            options: [
                'Patmos',
                'Cyprus',
                'Crete'
            ],
            answer: 0
        },{
            question: 'Who wrote the book of Second Samuel?',
            options: [
                'Samuel',
                'Jeremial',
                'Nathan'
            ],
            answer: 2
        },{
            question: 'Where did Jeremiah finish the book of second kings ?',
            options: [
                'Jerusalem',
                'Babylon',
                'Egypt'
            ],
            answer: 2
        },{
            question: 'Which of these is not a city of refuge?',
            options: [
                'Bethel',
                'Kedesh',
                'Ramoth'
            ],
            answer: 0
        },{
            question: 'Which is the largest measure of mass/volume?',
            options: [
                'Homer',
                'Ephah',
                'Omer'
            ],
            answer: 0
        },{
            question: 'Purim is a Jewish festival celebrating?',
            options: [
                'The Exodus from Egypt',
                'The rebuilding of the temple by the returning exiles',
                "The deliverance from Haman's Genocide"
            ],
            answer: 2
        },{
            question: 'The festival of booths was done in which month?',
            options: [
                'Nisan',
                'Tishri',
                "Chislev"
            ],
            answer: 1
        },{
            question: 'What is the name of the second wild beast in Daniels vision of the 4 wild beasts?',
            options: [
                'Bear',
                'Lion',
                "Leopard"
            ],
            answer: 0
        },{
            question: 'What other prophet had a vision of locusts other than the Apostle John?',
            options: [
                'Amos',
                'Joel',
                "Nahum"
            ],
            answer: 1
        },{
            question: 'In what modern country is the marketplace of Appius located?',
            options: [
                'Italy',
                'Syria',
                "Greece"
            ],
            answer: 0
        },{
            question: 'Which bible book records Jesus first Miracle?',
            options: [
                'Luke',
                'John',
                "Matthew"
            ]
        }, {
            question: 'Where did Rahab hide the spies?',
            options: [
                'In the closet',
                'On the terrace',
                'Under the bed'
            ],
            answer: 1
        },

        
    ]

    current_question = questions[current_question_id]

    function render() {
        $('#question').text(current_question.question)
        $('#q-no').text(current_question_id + 1)
        $('#options').empty()
        $.each(current_question.options, function(i, q) {
            $('#options').append(`<li><input type='radio' name='answer' value='${i}' /> ${q}</li>`)
        })
    }

    function next() {
        current_question_id += 1
        if (questions.length < current_question_id + 1) {
            alert('There are no more questions in our quiz. Thanks for playing!')
        }
        current_question = questions[current_question_id]
        render()
    }

    $('#next-btn').click(next)
    $('#answer-btn').click(function() {
        const answer = $('input[name=answer]:checked').val()
        if (answer == undefined) {
            alert('Please select one of the options as an answer')
        }
        if (parseInt(answer) == current_question.answer) {
            alert('Correct! Click next to move on to the next question')
        } else {
            alert('Oops! That is incorrect. the correct answer is: ' + current_question.options[current_question.answer])
        }
    })
    render()
})