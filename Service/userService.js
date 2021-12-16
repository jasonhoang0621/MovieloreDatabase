const user = require('../Model/user');
const notification = require('../Model/notification');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = 10;

const validateLogin = async (email, password) => {
    try {
        const account = await user.findOne({ email: email });
        if (account) {
            const valid = bcrypt.compareSync(password, account.password);
            if (valid) {
                const userNotic = await notification.findOne({ userID: account._id }).lean();
                account.notification = userNotic.item;
                return account;
            }
            else return null;
        }
    } catch (err) {
        console.log(err);
    }
}

const createNewUser = async (newAccount) => {
    try {
        const emails = await user.find({ email: newAccount.email });

        for (let i = 0; i < emails.length; i++) {
            if (newAccount.email === emails[i].email) return 1; //same email
        }

        const mongoose = require('mongoose');
        newAccount._id = mongoose.Types.ObjectId();
        newAccount.password = await bcrypt.hash(newAccount.password, salt);
        const newUser = new user({ ...newAccount });
        await newUser.save();
        await notification.create({ userID: newAccount._id })
        return 0; //create success
    } catch (err) {
        console.log(err);
    }
}

const updateInfo = async (id, newInfo) => {
    try {
        const emails = await user.find({ email: newInfo.email });

        for (let i = 0; i < emails.length; i++) {
            if (id !== emails[i]._id.toString()) return 1; //cannot have more than 1 email CHÚ Ý ID VÀ _ID
            else {
                await user.updateOne({ _id: id }, newInfo);
                return 0; //update success
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const updatePassword = async (id, newPass) => {
    try {
        const password = await bcrypt.hash(newPass, salt);
        await user.updateOne({ _id: id }, { password: password }); //syntax???
        return password; //success
    } catch (err) {
        console.log(err);
        return null; //fail
    }
}

const addFav = async (userID, reviewID) => {
    try {
        const aUser = await user.findOne({ _id: userID });
        aUser.favorite.push(reviewID);
        // await user.updateOne({_id: userID, favorite: })
        await aUser.save();
    } catch (err) {
        console.log(err);
    }
}

const removeFav = async (userID, reviewID) => {
    try {
        const aUser = await user.findOne({ _id: userID });
        aUser.favorite = aUser.favorite.filter(item => item !== reviewID);
        // await user.updateOne({_id: userID, favorite: })
        await aUser.save();
    } catch (err) {
        console.log(err);
    }
}

const getNotification = async (userID) => {
    try {
        const userNotic = await notification.findOne({ userID: userID }).lean();
        return userNotic;
    } catch (err) {
        console.log(err);
    }
}

const addNotification = async (userID, newNotic) => {
    try {
        const userNotic = await notification.findOne({ userID: userID });
        userNotic.item.push(newNotic);
        await userNotic.save();
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    validateLogin,
    createNewUser,
    updateInfo,
    updatePassword,
    addFav,
    removeFav,
    getNotification,
    addNotification
}