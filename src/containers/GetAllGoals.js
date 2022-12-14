const expressApp = require("./expressApp");

// CODE TO INITIALIZE FIREBASE ADMIN
const admin = require("firebase-admin");
const credentials = require("./key/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const firestoreDB = admin.firestore();
const authDB = admin.auth();
// END OF CODE TO INITIALIZE FIREBASE ADMIN

// GETS ALL AVAILABLE DOCS IN GOALs COLLECTION
const getAllGoals = async (props) => {
  expressApp.get("/read/all", async (req, res) => {
    try {
      const usersRef = firestoreDB.collection("goals");
      const response = await usersRef.get();
      let responseArr = [];
      response.map((doc) => {
        responseArr.push(doc.data());
      });
      res.send(responseArr);
    } catch (error) {
      console.log(error);
    }
  });
};

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

export default getAllGoals;
