var result = [];

$(document).ready(function () {
    console.log("")
    $("#submitFinal").click(function () {
        for (let i = 0; i < 6; i++) {
            var radioValue = $(`input[name='${i}']:checked`).val();
            $(document).ready(function () {
                P++
            }
        };
        if(E > I){
        if (E > I) {
            result.push("E");
        } else if (I > E) {
            result.push("I");
        }
        if(S > N){
        if (S > N) {
            result.push("S");
        } else if (N > S) {
            result.push("N");
        }
        if(F > T){
        if (F > T) {
            result.push("F");
        } else if (T > F) {
            result.push("T");
        }
        if(J > P){
        if (J > P) {
            result.push("J");
        } else if (P > J) {
            result.push("P");
        }
        const joinedResult = result.join("");
        console.log(joinedResult);
        window.location.pathname = `/lads/results/${joinedResult}`;
    });
}); 