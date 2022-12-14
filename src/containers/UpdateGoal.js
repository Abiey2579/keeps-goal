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

// UPDATE DOC IN A GOALS COLLECTION
const UpdateGoal = () => {
  expressApp.post("/update", async (req, res) => {
    try {
      const id = req.body.id;
      const newFirstName = "hello world";
      const userRef = await firestoreDB.collection("goals").doc(id).update({
        firstName: newFirstName,
      });
      res.send(userRef);
    } catch (error) {
      console.log(error);
    }
  });
};

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

export default UpdateGoal;
