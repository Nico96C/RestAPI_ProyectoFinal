import { db } from '../data/data.js';
import { getDoc, doc } from 'firebase/firestore';

async function obtenerProducto() {

    const docRef = doc(db, 'products', "WYL1yYyyP5pLOzYM7IeD");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }

}

obtenerProducto();

