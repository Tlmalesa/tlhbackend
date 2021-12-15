import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    firstName:String,
    cellNumber:Number,
    username:String,
    message:String,
    
  createdAt: { type: Date, default: Date.now }

 
});