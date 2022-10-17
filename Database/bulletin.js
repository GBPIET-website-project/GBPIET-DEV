const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bulletinSchema = new mongoose.Schema({
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
    colllections:'bulletinData'
}
);

const model = new mongoose.model('bulletinData',bulletinSchema);
module.exports = model; 