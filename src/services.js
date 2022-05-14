import { getDatabase, ref, set } from "firebase/database";
import { database } from "../src/firebase-config";

class DbService {
  writeUserData(name) {
    console.log("hej");
    const db = getDatabase();
    set(ref(db, "users/"), {
      username: name,
    });
  }
}

export default new DbService();
