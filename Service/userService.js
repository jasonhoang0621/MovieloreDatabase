const user = require('../Model/user');
const bcrypt = require('bcryptjs');
const sale = 10;

const validateLogin = async (email, password) => {
    try {
        const account = await user.findOne({ email: email });
        if (account) {
            const valid = bcrypt.compareSync(password, account.password);
            if (valid) return account;
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
            else {
                newAccount.password = await bcrypt.hash(newAccount.password, salt);
                const newUser = new user({ ...newAccount });
                await newUser.save();
                return 0;
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const updateInfo = async (newInfo) => {
    try {
        const emails = await user.find({ email: newInfo.email });

        for (let i = 0; i < emails.length; i++) {
            if (newInfo.id !== emails[i]._id.toString()) return 1; //cannot have more than 1 email CHÚ Ý ID VÀ _ID
            else {
                await user.updateOne({ _id: newInfo.id }, newInfo);
                return 0; //update success
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const updatePassword = async (id, newPass) => {
    const password = await bcrypt.hash(newPass, salt);
    await user.updateOne({ _id, id }, { password: password }); //syntax???
}

module.exports = {
    validateLogin,
    createNewUser,
    updateInfo,
    updatePassword,

}