import firebase from '../lib/firebase'

const db = firebase.firestore();

const write = () => {
  db.collection('teste').add({
    sou: 'FOOOOOOOOOI',
    um: 'um',
    teste: 'teste',
  })
  console.log("Show")
}

export default write