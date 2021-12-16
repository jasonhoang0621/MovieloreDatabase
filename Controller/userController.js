const userService = require('../Service/userService');

class userController {
    async getUser(req, res) {
        const account = await userService.validateLogin(req.body.email, req.body.password);
        if (account) res.send(account);
        else res.send({ code: 1 }); //no user or wrong password
    }

    async createUser(req, res) {
        const newAccount = req.body;
        const valid = await userService.createNewUser(newAccount);
        if (valid === 0) res.send({ code: 0 }) // created;
        else res.send({ code: 1 }) //email has already use
    }

    async updateInfo(req, res) {
        const newInfo = req.body;
        const id = req.params.id
        const success = await userService.updateInfo(id, newInfo);
        if (success === 1) res.send({ code: 1 }); //duplicate email
        else res.send({ code: 0 }); //update success
    }

    async updatePassword(req, res) {
        const newPass = req.body.newPass;
        const id = req.params.id;
        const password = await userService.updatePassword(id, newPass);
        if (password) res.send({ password }) //new pass
        else res.send({ code: 1 }) //fail code
    }

    async addFavorite(req, res) {
        try {
            const id = req.params.id;
            const user = req.body.user;
            await userService.addFav(user, id);
            res.send({ error: 0 }) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async removeFavorite(req, res) {
        try {
            const id = req.params.id;
            const user = req.body.user;
            await userService.removeFav(user, id);
            res.send({ error: 0 }) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async addNotification(req, res) {
        try {
            const rootCommentId = req.params.id;
            const newNotic = req.body;
            await userService.addNotification(rootCommentId, newNotic);
            res.send({ error: 0 }) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async getNotification(req, res) {
        try {
            const userID = req.params.id;
            const userNotic = await userService.getNotification(userID);
            res.send(userNotic) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async markAllRead(req, res) {
        try {
            const userID = req.params.id;
            await userService.markAllRead(userID);
            res.send({ error: 0 }) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async getUserInformation(req, res) {
        try {
            const userID = req.params.id;
            const user = await userService.getUserProfile(userID);
            res.send(user) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async upgradeUser(req, res) {
        try {
            const userID = req.params.id;
            await userService.updateUser(userID)
            res.send({ error: 0 }) //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }
}

module.exports = new userController