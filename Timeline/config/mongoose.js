const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dariaengin:GOnKB9BhIL2YrtpP@cluster0.6zvjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("DB is connected");
    })
    .catch(err => {
        console.log(err)
    });
