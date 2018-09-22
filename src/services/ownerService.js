import * as firebase from "firebase";

export const create = newUser => async dispatch => {
    const response = await firebase.auth()
    await response.createUserWithEmailAndPassword(
        newUser.email, newUser.password)
        .catch(function (error) {
            console.log(error)
        })

    return response.key
}

export const loginFirebase = user => async dispatch => {
    const auth = await firebase.auth()
    const response = await auth.signInWithEmailAndPassword(user.email, user.password)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, ' ', errorMessage)
        });
        console.log(response)
    return response.user
}

export const logoutFirebase = user => async dispatch => {
    const auth = await firebase.auth()
    await auth.signOut()
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, ' ', errorMessage)
        });
}




