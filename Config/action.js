import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const signUp = (data,navigation)=> {
    return auth().createUserWithEmailAndPassword(data.email,data.password)
    .then(()=> {
        navigation.navigate('Home');
        console.log(data.email)
        var email = data.email
        database().ref(`/users/`).push(data);
    })
}

const logIn = ({email,password},navigation)=> {
    return auth().signInWithEmailAndPassword(email,password).then(()=> navigation.navigate('Home')).catch((e)=> alert('Something went wrong'))
}

const signOut = ()=>{
    return auth().signOut()
}

export {
    signOut,
    signUp,
    logIn
}