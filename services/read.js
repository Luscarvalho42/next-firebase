import firebase from '../lib/firebase'

const db = firebase.firestore();

const read = () => {
  db.collection("teste").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().sou}`);
      });
    });
}

export default read