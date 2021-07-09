import { getDataFromDoc } from "./unit.js";

export async function register(name,email,password,phoneNumber) {
 await firebase.auth().createUserWithEmailAndPassword(email, password);
 await firebase.auth().currentUser.updateProfile({
          displayName: name
 })

 let UID = firebase.auth().currentUser.uid;
 await firebase.firestore().collection('users').doc(UID).set({
     name : name,
     phoneNumber : phoneNumber,
     VIP : true,
     course : []
 })


}

export async function login(email,password) {
    await firebase.auth().signInWithEmailAndPassword(email,password)
}

export async function onAuthChanged(cb) {
    await firebase.auth().onAuthStateChanged(user =>{
        cb(user)
    })
}

export function signOut() {
    firebase.auth().signOut()
}
export async function getUser() {
     let currentUser = firebase.auth().currentUser;
     let res = await firebase.firestore().collection('users').doc(currentUser.uid).get();
   return getDataFromDoc(res);
}