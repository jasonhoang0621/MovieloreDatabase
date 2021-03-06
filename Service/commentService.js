const comment = require('../Model/comment');
const mongoose = require('mongoose');

const getAllComments = async (reviewID) => {
    try {
        const comments = comment.find({ reviewID: reviewID }).lean();
        return comments;
    } catch (err) {
        console.log(err)
    }
}

const storeNewCommnet = async (newComment) => {
    try {
        newComment._id = mongoose.Types.ObjectId();
        await comment.create({ ...newComment })
        return newComment;
    } catch (err) {
        console.log(err);
    }
}

const deleteAComment = async (commentID) => {
    try {
        await comment.deleteOne({ _id: commentID })
        await comment.deleteMany({ parentID: commentID })
    } catch (err) {
        console.log(err);
    }
}

const updateAComment = async (updateComment) => {
    try {
        await comment.updateOne({ _id: updateComment._id }, { ...updateComment })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllComments,
    storeNewCommnet,
    deleteAComment,
    updateAComment,

}