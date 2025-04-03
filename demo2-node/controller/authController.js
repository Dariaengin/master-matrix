const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

// GET login/register page
const homePage = (req, res) => {
    res.render('auth', { error: null });
}
const getLoginPage = (req, res) => {
    res.render('auth', { error: null });
}
// POST /register
const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.render('auth', { error: '❌ All fields are required.' });
    }

    if (password !== confirmPassword) {
        return res.render('auth', { error: '❌ Passwords do not match.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.redirect('/'); // or redirect to login success
    } catch (err) {
        console.error('❌ Registration error:', err);
        res.render('auth', { error: '❌ Email may already exist or data is invalid.' });
    }
};
// POST /login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('auth', { error: '❌ Email and password required.' });
    }

    const user1 = await User.findOne({ email });
    if (!user1 || !(await bcrypt.compare(password, user1.password))) {
        return res.render('auth', { error: '❌ Invalid credentials.' });
    }

    res.render('dashboard', {user: user1});
};
const showDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    res.render('dashboard', { user: req.session.user });
};
const logoutUser = (req, res) => {
     
        res.redirect('/');
    };

// 404 page
const notFoundPage = (req, res) => {
    res.status(404).render('404page');
};

module.exports = {
    homePage,
    getLoginPage,
    registerUser,
    loginUser,
    showDashboard,
    logoutUser,
    notFoundPage
};