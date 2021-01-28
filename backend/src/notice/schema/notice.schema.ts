import * as mongoose from 'mongoose';

export const NoticeModel = new mongoose.Schema({
    story_title : String,
    title: String,
    author: String,
    story_url: String,
    url: String,
    created_at: String,
    _id: String,
    isRemoved: Boolean 
},{
    versionKey: false // You should be aware of the outcome after set to false
})