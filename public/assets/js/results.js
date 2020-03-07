// calculate results



$("#submitFinal").on("click", function(){
    const questionResults = $("input[name]");
    for (let i = 0; i < questionResults.length; i++) {
        console.log(questionResults[i]);
        const questionVal = questionResults[i];
    }
})

// const results = (x, y) => {

// }