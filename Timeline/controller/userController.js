const homePage = (req, res) => {
  const dataObj = [
    {
      name: 'Michael Choi',
      createdAt: '18-03-2025',
      message:
        'This is my message    This is my message This is my message This is my messageThis is my message',
    },
    {
      name: 'Luisa Hloe',
      createdAt: '15-03-2025',
      message:
        'This is my message    This is my message This is my message This is my messageThis is my message',
    },
    {
      name: 'John Doe',
      createdAt: '05-02-2025',
      message:
        'This is my message    This is my message This is my message This is my messageThis is my message',
    },
  ];
  res.render('homepage', {
    postList: dataObj,
  });
};


const notFoundPage = (req, res) => {
  res.render('notFound');
};
const getUsers = (req, res) => {
  res.json({ message: "User list fetched successfully!" });
};
const addNewUser = (req, res) => {
  let newUser = new userModel(req.body)
  newUser.save()
    .then(
      () => {
        console.log("Added a new user")
      }
    )
    .catch(err => {
      console.log(err);
    }

    )
}

const userModel = require("../models/userModel")

module.exports = {
  homePage,
  notFoundPage,
  getUsers,
  addNewUser,
};





