$(document).ready(function() {

    const questions = [
        {
            question: "What is the correct platform to get on the train?",
            answers: [
                "Platform 1 1/2",
                "Platform 9 3/4",
                "Platform 9 4/3",
                "Platform 4 3/9"
            ],
            correctAnswer: "Platform 9 3/4"
        },
        {
            question: "What was the name of Harry Potter's owl?",
            answers: [
                "Birdy",
                "Wighed",
                "Snowflake",
                "Hedwig"
            ],
            correctAnswer: "Hedwig"
        },
        {
            question: "Who was Harry Potter's Godfather?",
            answers: [
                "SiriusXm",
                "Snape",
                "Mad-Eye Moody",
                "Sirius Black"
            ],
            correctAnswer: "Sirius Black"
        },
        {
            question: "What kind of animal is Harry's patronus charm?",
            answers: [
                "A Moose",
                "A Bear",
                "A Deer",
                "A Lion"
            ],
            correctAnswer: "A Deer"
        },
        {
            question: "Who rightfully owned Dumboldore's wand after he died?",
            answers: [
                "Malfoy",
                "Snape",
                "Lord Voldemort",
                "Lucious"
            ],
            correctAnswer: "Malfoy"
        },
        {
            question: "Who did Harry marry at the end?",
            answers: [
                "Hermione",
                "Luna",
                "Ginny",
                "Cho"
            ],
            correctAnswer: "Ginny"
        },
    ]

    const quizContainer = $('#quizContainer');
    const theResults = $('#results');
    const toSubmit = $('#submit');

    let amtCorrect = 0;
    let amtWrong = 0;
    let usrScore =0; 

    $('#quizContainer').hide();
    $('#toReset').hide();

    $('#startGame').on("click", function startGame() {
            
            $(this).hide();

            $('#quizContainer').show();

            var remainingTime = 121;
            

            var countDown = setInterval(function(){
            
        remainingTime--; 
        
        $('#theTimer').text(remainingTime);
        if (remainingTime === 0) {
            clearInterval(countDown);

        scoreSheet();

        } 
            }, 1000);
            
        for (i = 0; i < questions.length; i++) {

            let qDiv = $("<div>");
            let q = $("<h5>").text(questions[i].question)
            qDiv.append(q)
            
            let firstAns = $('<p>').html( '<input name=" '+questions[i].correctAnswer+' " type="radio"><label>'+ questions[i].answers[0]+' </label><br>')
            let secondAns = $('<p>').html('<input name=" '+questions[i].correctAnswer+' " type="radio"><label>'+ questions[i].answers[1]+' </label><br>')
            let thirdAns = $('<p>').html('<input name=" '+questions[i].correctAnswer+' " type="radio"><label>'+ questions[i].answers[2]+' </label><br>')
            let fourthAns = $('<p>').html('<input name=" '+questions[i].correctAnswer+' " type="radio"><label>'+ questions[i].answers[3]+' </label><br>')
            


            qDiv.append(firstAns)
            qDiv.append(secondAns)
            qDiv.append(thirdAns)
            qDiv.append(fourthAns)

            quizContainer.append(qDiv)
        }    
    })

function checkAns(){
    $('#')
}

    function scoreSheet () {
        $('quizContainer').hide()
        $('#theTimer').hide()
        $('#toReset').show()
    }


});

