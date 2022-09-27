const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tendersSchema = new mongoose.Schema({
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
    colllections:'tendersData'
}
);

const model = new mongoose.model('tendersData',tendersSchema);
module.exports = model; 