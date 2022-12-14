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
    }
},
{ timestamps: true },
{
    colllections:'newsData'
}
);

const model = new mongoose.model('newsData',newsSchema);
module.exports = model; 