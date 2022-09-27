const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const linksSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    }
},
{ timestamps: true },
{
    colllections:'linksData'
}
);

const model = new mongoose.model('linksData',linksSchema);
module.exports = model; 