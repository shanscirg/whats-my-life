// Variables to store user responses 
let E = 0;
let I = 0;
let S = 0;
let N = 0;
let F = 0;
let T = 0;
let J = 0;
let P = 0;
let result = [];
let joinedResult;

// Re-setting user response variables to zero in the case they forget to answer all questions
const setToZero = () => {
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

// When document loads
$(document).ready(() => {
    // Get user ID and result from local storage
    const getUserId = localStorage.getItem('userId');
    const getUserResult = localStorage.getItem('userResult');

    // GET request to redirect to results page with user's id and result
    if (window.location.pathname.split(`/`)[1] === `result`) {
        $.ajax({
            method: 'GET',
            url: '/results/' + getUserResult + '/' + getUserId
        })
            .then(data => console.log(data));
    }

    // On click function for 'Sign In' button that saves username and password and runs signIn function
    $('#signIn').click(() => {
        const userSignIn = $('#userSignIn').val();
        const passwordSignIn = $('#passwordSignIn').val();
        signInUser(userSignIn, passwordSignIn);
    });

    // On click function for 'Home' button that redirects to home page
    $('#signOut').click(() => {
        window.location.pathname = `/`;
    });

    // On click function for 'Let's Begin' button that redirects to questions page
    $('#beginButton').click(() => {
        window.location.pathname = `/questions`;
    });

    // On click function for 'Save and View Results' button that:
        // Generates user's four-letter result if all Q's are answered & user form is filled out
        // Saves user info to create user
    $('#submitFinal').click(() => {

        // Four for-loops for each set of five questions to add to letter variables based on if they selected true or false 
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

        // If/else statements to...
            // Check which letter to push to results array to ensure only 4 letters get generated as the final result
            // Make sure each letter pair adds up to five. If user doesn't answer all questions at first, it messes with the number for each variable.
        if (E > I && ((E + I) === 5)) {
            result.push('E');
        } else if (I > E && ((E + I) === 5)) {
            result.push('I');
        }
        if (S > N && ((S + N) === 5)) {
            result.push('S');
        } else if (N > S && ((S + N) === 5)) {
            result.push('N');
        }
        if (F > T && ((F + T) === 5)) {
            result.push('F');
        } else if (T > F && ((F + T) === 5)) {
            result.push('T');
        }
        if (J > P && ((J + P) === 5)) {
            result.push('J');
        } else if (P > J && ((J + P) === 5)) {
            result.push('P');
        }

        // Join the four-letter result to be one string
        joinedResult = result.join('');

        // If all questions are answered, run create user function which redirects to results page
        if (checkIfAllQsAnswered(joinedResult)) {
            createUser();
        }
    });

    // AJAX post request to post to database
    const createUser = () => {
        const userInfo = {
            firstName: $('#inputName2').val(),
            username: $('#inputEmail2').val(),
            password: $('#inputPassword2').val(),
            result: joinedResult
        }
        $.ajax({
            method: 'POST',
            url: '/api/users',
            data: userInfo
        })
            .then(user => {
                window.location.href = `/results/${joinedResult}/${user.id}`;
            })
    }

    // Post request to post user data to server
    const signInUser = (username, password) => {
        $.ajax({
            method: 'POST',
            url: '/api/sign-in',
            data: {
                username: username,
                password: password
            }
        })
            .then(data => {
                if (!data) {
                    return alert('Username and password do not match.')
                }
                localStorage.setItem('userId', data.id);
                localStorage.setItem('userResult', data.result)
                window.location.href = `/results/${data.result}/${data.id}`;
            });
    }
});


// Function to make sure user answered all questions and filled out user info form
const checkIfAllQsAnswered = (joinedResult) => {
    if (joinedResult.length === 4) {
        if ($('#inputEmail2').val() === '' || $('#inputPassword2').val() === '' || $('#inputName2').val() === '') {
            alert('Please complete all fields to get your results!')
            return false
        } else {
            return true
        }
    } else {
        alert('Please answer all questions.');
        setToZero();
        return false
    }
}