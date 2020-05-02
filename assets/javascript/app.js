$(document).ready(function() {
    $('#startGame').on("click", function startGame() {
            console.log("it worked")
            $(this).hide();
            })
            

    const quizContainer = document.getElementById('quiz');
    const theResults = document.getElementById('results');
    const toSubmit = document.getElementById('submit');


    const questions = [
    {
        question: "What is the correct platform to get on the train?",
        answers: {
            a: "Platform 1 1/2",
            b: "Platform 9 3/4",
            c: "Platform 9 4/3",
            d: "Platform 4 3/9"
        },
        correctAnswer: "c"
    },
    {
        question: "What was the name of Harry Potter's owl?",
        answers: {
            a: "Birdy",
            b: "Wighed",
            c: "Snowflake",
            d: "Hedwig"
        },
        correctAnswer: "d"
    },
    {
        question: "Who was Harry Potter's Godfather?",
        answers: {
            a: "SiriusXm",
            b: "Snape",
            c: "Mad-Eye Moody",
            d: "Sirius Black"
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of animal is Harry's patronus charm?",
        answers: {
            a: "A Moose",
            b: "A Bear",
            c: "A Deer",
            d: "A Lion"
        },
        correctAnswer: "c"
    },
    {
        question: "Who rightfully owned Dumboldore's wand after he died?",
        answers: {
            a: "Malfoy",
            b: "Snape",
            c: "Lord Voldemort",
            d: "Lucious"
        },
        correctAnswer: "a"
    },
    {
        question: "Who did Harry marry at the end?",
        answers: {
            a: "Hermione",
            b: "Luna",
            c: "Ginny",
            d: "Cho"
        },
        correctAnswer: "c"
    },
]





});

