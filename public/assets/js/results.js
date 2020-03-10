// calculate results
var E = 0;
var I = 0;
var S = 0;
var N = 0;
var F = 0;
var T = 0;
var J = 0;
var P = 0;
var result = [];

$(document).ready(function () {
    $("#submitFinal").click(function () {
        for (let i = 0; i < 6; i++) {
            var radioValue = $(`input[name='${i}']:checked`).val();
            if (radioValue === '1') {
                E++
            } else if (radioValue === '0') {
                I++
            }
        };
        for (let i = 6; i < 11; i++) {
            var radioValue = $(`input[name='${i}']:checked`).val();
            if (radioValue === '1') {
                S++
            } else if (radioValue === '0') {
                N++
            }
        };
        for (let i = 11; i < 16; i++) {
            var radioValue = $(`input[name='${i}']:checked`).val();
            if (radioValue === '1') {
                F++
            } else if (radioValue === '0') {
                T++
            }
        };
        for (let i = 16; i < 21; i++) {
            var radioValue = $(`input[name='${i}']:checked`).val();
            if (radioValue === '1') {
                J++
            } else if (radioValue === '0') {
                P++
            }
        };
        if(E > I){
            result.push("E");
        } else if (I > E) {
            result.push("I");
        }
        if(S > N){
            result.push("S");
        } else if (N > S) {
            result.push("N");
        }
        if(F > T){
            result.push("F");
        } else if (T > F) {
            result.push("T");
        }
        if(J > P){
            result.push("J");
        } else if (P > J) {
            result.push("P");
        }
        const joinedResult = result.join("");
        console.log(joinedResult);
    });
});