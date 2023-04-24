module.exports = {
    mutipleMongooseToObject: (mongoosesArray) => {
        return mongoosesArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}