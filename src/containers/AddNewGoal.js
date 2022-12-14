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

// ADDS DOC TO GOALS COLLECTION
const createNewGoal = async (props) => {
  expressApp.get("/create", async (req, res) => {
    alert(JSON.stringify(props));

    try {
      const response = await firestoreDB
        .collection("goals")
        .add(JSON.stringify(props));
      res.send(response);
    } catch (error) {
      console.log(error);
    }
  });
};

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

export default createNewGoal;
