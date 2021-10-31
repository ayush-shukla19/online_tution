const express = require("express");
const dbConn = require("./sql/connectionDb");
const app  = express();

app.get("/",(req,res)=> {
    res.send("<h1>Hello this is my firrst website</h1>");
});

dbConn.getConnection().authenticate()
    .then(
        // On successfull Database connection
        () => {
           console.log("Success fully connected to db")
        },
    )
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        console.error('Cancelling app server launch');
    });


app.get("/", (req, res) => {
    res.status(200).json({
        msg : "Welcome to Video File Server this is servet site"
    });
});

app.listen(5000,()=>{
    console.log("Listining on port 5000");
})
