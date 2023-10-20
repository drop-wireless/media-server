const admin = require("firebase-admin");
const serviceAccount = require("../../config/nesten-advert-demo-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nesten-advert-demo-default-rtdb.firebaseio.com"
});
module.exports = admin;