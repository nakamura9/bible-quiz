// alert('hello quiz')
$(document).ready(function() {
    let current_question_id = 0
    let current_question = null
    const questions = [{
            question: 'Who is called Gods friend at James 2:23?',
            options: [
                'Abraham',
                'Job',
                'David'
            ],
            answer: 0
        },
        {
            question: 'Who were Aarons sons who Jehovah executed?',
            options: [
                'Hophni and Phineas',
                'Nadab and Abihu',
                'Esau and Isaac'
            ],
            answer: 1
        },
        {
            question: 'Which scripture states: "Thier coming to know you"?',
            options: [
                'John 17:3',
                'Mark 12:13',
                'Revelation 21:3,4'
            ],
            answer: 0
        },
        {
            question: 'Where was the Bible book of Mark written?',
            options: [
                'Jerusalem',
                'Rome',
                'Ceasarea'
            ],
            answer: 1
        },
        {
            question: 'List the fruitage of the spirit.',
            options: [
                'Love, Joy, Peace, Patience, Faith, Goodness, Mildness, Self-control, Kindness.',
                'Love , Respect, Honor, Peace, Patience, Kindness, Goodness, Joy, Loyalty.',
                'I dont Remeber.'
            ],
            answer: 0
        },
        {
            question: 'Who was the oldest man alive?',
            options: [
                'Adam',
                'Cain',
                'Methuselah'
            ],
            answer: 2
        },
        {
            question: 'At what Age did Adam have a son?',
            options: [
                '100',
                '30',
                '130'
            ],
            answer: 2
        },
        {
            question: 'Who was Adams first son',
            options: [
                'Abel',
                'Cain',
                'Seth'
            ],
            answer: 2
        },
        {
            question: 'Who was A descendant of Issachar?',
            options: [
                'Abel',
                'Joel',
                'Ishmael'
            ],
            answer: 1
        },
        {
            question: 'Around what time did King David die?',
            options: [
                '970 BCE',
                '900 BCE',
                '960 BCE'
            ],
            answer: 1
        },
        {
            question: 'Who was A descendant of Issachar?',
            options: [
                'Abel',
                'Joel',
                'Ishmael'
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