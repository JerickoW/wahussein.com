import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import {setDoc,doc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const email = document.getElementById("email");
const fullname = document.getElementById("fullname");
const password = document.getElementById("password");
const creatUserSubmitBtn = document.getElementById("creatUserSubmitBtn");

creatUserSubmitBtn.addEventListener("click", async () => {
    try {
       const userDoc = await createUserWithEmailAndPassword(auth, email.value , password.value);
       const userRef = doc(db, "users", userDoc.user.uid);
       await setDoc(userRef,{
            email: email.value,
            fullname: fullname.value,
            created_at: serverTimestamp(),
       })
    } catch (error) {
        console.log(error)
    }
});