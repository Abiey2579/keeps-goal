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

// GET SPECIFIC DOC IN GOALS COLLECTION
const getGoal = async () => {
  expressApp.get("/read/:id", async (req, res) => {
    try {
      const userRef = await firestoreDB.collection("goals").doc(req.params.id);
      const response = await userRef.get();
      res.send(response.data());
    } catch (error) {
      console.log(error);
    }
  });
};

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

export default getGoal;
