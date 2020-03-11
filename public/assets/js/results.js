// calculate results
let E = 0;
let I = 0;
let S = 0;
let N = 0;
let F = 0;
let T = 0;
let J = 0;
let P = 0;
let result = [];

function setToZero() {
    E = 0;
    I = 0;
    S = 0;
    N = 0;
    F = 0;
    T = 0;
    J = 0;
    P = 0;
    result = [];
}

$(document).ready(function () {
    console.log("")
    $("#beginButton").click(function () {
        window.location.pathname = `/questions`;
    });
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
        console.log("E, I", E, I);
        console.log("S, N", S, N);
        console.log("F, T", F, T);
        console.log("J, P", J, P);
        if (E > I && ((E + I) === 5)) {
            result.push("E");
        } else if (I > E && ((E + I) === 5)) {
            result.push("I");
        }
        if (S > N && ((S + N) === 5)) {
            result.push("S");
        } else if (N > S && ((S + N) === 5)) {
            result.push("N");
        }
        if (F > T && ((F + T) === 5)) {
            result.push("F");
        } else if (T > F && ((F + T) === 5)) {
            result.push("T");
        }
        if (J > P && ((J + P) === 5)) {
            result.push("J");
        } else if (P > J && ((J + P) === 5)) {
            result.push("P");
        }
        const joinedResult = result.join("");
        console.log(joinedResult);
        checkIfAllQsAnswered(joinedResult);
    });
});

const checkIfAllQsAnswered = function (joinedResult) {
    if (joinedResult.length === 4) {
        if ($('#inputEmail2').val() === '' || $('#inputPassword2').val() === '' || $('#inputName2').val() === '') {
            alert("Please complete all fields to get your results!")
        } else {
            console.log(joinedResult);
            window.location.pathname = `/results/${joinedResult}`;
        }
    } else {
        alert("Please answer all questions.");
        setToZero();
    }
}

