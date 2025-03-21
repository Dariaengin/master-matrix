const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.6zvjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("DB is connected");
    })
    .catch(err => {
        console.log(err)
    });
