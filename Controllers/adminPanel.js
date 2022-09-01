const News = require('../Database/news');

exports.getAdminPanel = (req,res)=>{
    res.render('adminPanel.ejs');
}

exports.getPrimaryPanel = (req,res)=>{
    const id = req.query.taskId;
    if(id == 1){
        res.render('manageNews');
    }
    else if (id == 2){
        res.render('manageQuicklinks');
    }
    else{
        res.render('manageTenders')
    }
}

exports.postPrimaryTask = async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const file = req.files;

    let news = new News({
        title,
        description,
        file
    });
    try {
        const data = await news.save();
        res.status(200).send({message:"News created successfully!"});
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Error Occured, Please try again. " });
    }
}

exports.getNews = async (req,res)=>{
    const id = req.query.id;
    console.log(id);
    try{
        News.findById(id,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.render('news',{title:result.title,description:result.description,file:result.file[0].filename});
            }
        });

    }catch(err){
        console.log(err);
    }
}