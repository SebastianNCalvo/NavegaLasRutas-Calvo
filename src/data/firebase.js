import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import products from "./productos";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY ,
  authDomain: "distribuidora-de-la-costa.firebaseapp.com",
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: "distribuidora-de-la-costa.firebasestorage.app",
  messagingSenderId: "792092113091",
  appId: import.meta.env.VITE_FS_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getProducts(){
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);
  const documents = productsSnapshot.docs
  const dataDocs = documents.map(product => {
    return {id:product.id, ...product.data()}
  })

  return dataDocs
}

export async function getProductById(idParam){
  const docRef = doc(db, "products", idParam)
  const docSnapshot = await getDoc(docRef)
  const docData = docSnapshot.data()
  docData.id = docSnapshot.id
  
  return docData
}

export async function getProductByCategoria(categParam){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categParam))
  const productsSnapshot = await getDocs(q);
  const documents = productsSnapshot.docs
  const dataDocs = documents.map(product => {
    return {id:product.id, ...product.data()}
  })

  return dataDocs
}

export async function createOrder(orderData){
  const ordersRef = collection(db, "orders")
  const newDoc = await addDoc(ordersRef, orderData)
  return newDoc
}

export async function exportProductsData(){
  const productsRef = collection(db, "products")
  for(let item of products){
    delete item.id
    const docCreated = await addDoc(productsRef, item)
  }
}

export default app