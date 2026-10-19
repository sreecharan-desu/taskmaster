const mongoose = require('mongoose');
if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not set. Copy .env.example to .env and fill it in.');
}

mongoose.connect(process.env.MONGODB_URI);


const userSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const adminSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const todosSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    },
    Title : {
        type  : String,
        default: "Title", // Automatically sets to the current date and time
    },
    Description : {
        type  : String,
        default: "Description", // Automatically sets to the current date and time
    },
    Completed : {
        type  : Boolean,
        default: false, // Automatically sets to the current date and time
    },
    Time : {
        type  : Date,
        default: Date.now, // Automatically sets to the current date and time
    }
})


const User = new mongoose.model('User',userSchema);
const Admin = new mongoose.model('Admin',adminSchema);
const Todos = new mongoose.model('Todos',todosSchema);

module.exports = {
    User,
    Admin,
    Todos
    //exports here
}