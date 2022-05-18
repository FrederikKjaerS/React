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
  addRecipe = (newItem) => {
    return addDoc(collection(db, "recipes"), newItem);
  };

  addImage = (newImage) => {
    const name = newImage.name;
    const storageRef = ref(storage, "recipeImages/" + name);
    uploadBytes(storageRef, newImage).then((snapshot) => {
      console.log("Uploaded to storage");
    });
  };

  downloadImage = async (path) => {
    return await getDownloadURL(ref(storage, path));
  };

  getAllRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    let recipes = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      recipes.push(doc.data());
    });
    return recipes;
  };
}

export default new DbService();
