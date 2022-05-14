import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const { storage } = require("./firebase-config");

const { db } = require("./firebase-config");

const collectionRef = collection(db, "ingredients");

class DbService {
  addIngredient = (newIngredient) => {
    return addDoc(collectionRef, newIngredient);
  };

  addRecipe = (newItem) => {
    return addDoc(collection(db, "recipes"), newItem);
  };

  addImage = (newImage) => {
    const name = newImage.name;
    const storageRef = ref(storage, "images/" + name);
    uploadBytes(storageRef, newImage).then((snapshot) => {
      console.log("Uploaded to storage");
    });
  };

  downloadImage = async (path) => {
    return await getDownloadURL(ref(storage, path));
  };

  getAllIngredients = async () => {
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    let ingredients = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ingredients.push(doc.data());
    });
    return ingredients;
  };

  getAllItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    let items = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      items.push(doc.data());
    });
    return items;
  };
}

export default new DbService();
