const mongoose = require('mongoose');
const ExperienceSchema = require('./ExperienceSchema');
const SubSubjectSchema = require('./SubSubjectSchema');

const UserSchema = new mongoose.Schema({
    userInfo: {
        email: String,
        role: String,
        password: String
    },
    userPersonalInfo:{
        firstName: String,
        lastName: String,
        city:String,
        education:String,
        phoneNumber:String,
        personalPhoto:Image
    },
    userLifeActivity:{
      biography:String,
      experiences:[ExperienceSchema],
      awardsPhotos:[{info:String,img:Image}]
    },
    teaching:{
      subSubjects:[SubSubjectSchema],
      teachingPlace:[String]
    },
    ratings:{
      overallRate:Number,
      peopleRating:[]
    },
    userActivity:{
      active:Boolean,
      accountCreation:Date,
      lastLogIn:Date,
    }
})





module.exports = UserSchema;