$(document).ready(function() {

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

    const quizContainer = $('#quizContainer');
    const theResults = $('#results');
    const toSubmit = $('#submit');


    $('#startGame').on("click", function startGame() {
            console.log("it worked")
            $(this).hide();

            var remainingTime = 11;
            

            var countDown = setInterval(function(){
            
        remainingTime--; 
        $('#theTimer').text(remainingTime);
        if (remainingTime === 0) {
            clearInterval(countDown);
        
        } 
            }, 1000);
            
        for (i = 0; i < questions.length; i++) {

            let qDiv = $("<div>");
            let q = $("<h5>").text(questions[i].question)
            qDiv.append(q)
            quizContainer.append(qDiv)
        }    
    })

    $('endGame')






});

