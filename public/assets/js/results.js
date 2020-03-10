// calculate results


// $("input").filter(function () {
//     return parseInt($(this).attr("name")) > 0 && parseInt($(this).attr("name")) < 6
// });

// const func = function(){
//     $("input:radio[name='1']:checked").each(function () {

// })

const countChecked = function (x, y) {
    const numberTrue = $("input#true:checked").length;
   
    x = numberTrue;
    console.log('Number True: ' + x);
    const numberFalse = $("input#false:checked").length;
    y = numberFalse;
    console.log('Number False: ' + y);
    console.log("=================================")
    if (x > y) {
        console.log("First letter wins!")
    } else if (y > x) {
        console.log("Second letter wins!")
    } else {
        console.log(`It's a tie! Or you didn't answer all the questions...`);
    }
};
$("#submitFinal").on("click", function () {
    const questionResults = $("input[name]");
    let questionGroupStart = 0;
    let questionGroupEnd = 6;


    // $(`input[name='${questionResults[i].name}']#false:checked`)
    
    
    for (let i = 0; i < questionResults.length; i++) {
        console.log(questionResults[i]);
        // const quesNum = parseInt(questionResults[i].name);
        // console.log(quesNum);
        var trueCount = 0;
        var falseCount = 0;
        for (let j = questionGroupStart; j < questionGroupEnd; j++) {
            console.log("Inner loop!");
            // console.log("question results value", questionResults[i].value);
            let trueOrFalse = $(`input[name='${questionResults[i].name}']`);
            console.log(trueOrFalse);
            if ($(`input[name='${questionResults[i].name}']#true:checked`) === 1) {
                trueCount++;
            } else {
                falseCount++;
            }
            questionGroupStart++;
            if (questionGroupEnd > 21) {
                questionGroupEnd++;
            }
        }
    if (trueCount > falseCount && questionGroupStart === 0) {
        console.log("E wins!")
        } else {
            console.log("I wins!")
        }
        if (trueCount > falseCount && questionGroupStart === 6) {
            console.log("S wins!")
        } else {
            console.log("N wins!")
        }
        if (trueCount > falseCount && questionGroupStart === 11) {
            console.log("F wins!")
        } else {
            console.log("T wins!")
        }
        if (trueCount > falseCount && questionGroupStart === 16) {
            console.log("J wins!")
        } else {
            console.log("P wins!")
        }
    }

    // console.log(quesNum);
    // if ($("input[name='1']") || $("input[name='2']") || $("input[name='3']") || $("input[name='4']") || $("input[name='5']")) {
    //     console.log("Results for E / I: ")
    //     countChecked();

    // } else if ($("input[name='6']") || $("input[name='7']") || $("input[name='8']") || $("input[name='9']") || $("input[name='10']")) {
    //     console.log("Results for S / N: ")
    //     countChecked();
    // } else if ($("input[name='11']") || $("input[name='12']") || $("input[name='13']") || $("input[name='14']") || $("input[name='15']")) {
    //     console.log("Results for F / T: ")
    //     countChecked();
    // } else if ($("input[name='16']") || $("input[name='17']") || $("input[name='18']") || $("input[name='19']") || $("input[name='20']")) {
    //     console.log("Results for J / P: ")
    //     countChecked();
    // }


    // questionResults[i].filter($("#true:checked") && quesNum === 1).length
//     if (quesNum > 0 && quesNum < 6 && $("input#true:checked")) {
//         let idk = $("input[name]#true:checked");
//         console.log(idk);
//     }
// }
//     countChecked();
});


// let inputNum = parseInt($("input[name]"));

// If questions are for E/I, save whichever has more (if E > I, save "E", else save "I" for their first letter)
// if($("input[name]"))
// countChecked(0, 6);


// If questions are for S/N, save whichever has more (if S > N, save "S", else save "N" for their second letter)
// countChecked(5, 11);


// If questions are for F/T, save whichever has more (if F > T, save "F", else save "T" for their third letter)
// countChecked(10, 16);


// If questions are for J/P, save whichever has more (if J > P, save "J", else save "P" for their fourth letter)
// countChecked(15, 21);


// const results = (x, y) => {

// }