const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    file:{
     type: Schema.Types.Object 
    },
    time:{
        type:Date,
        default:Date.now()
    }
},
{
collection:'newsData'
}
);

const model = new mongoose.model('newsSchema',newsSchema);

module.exports = model;