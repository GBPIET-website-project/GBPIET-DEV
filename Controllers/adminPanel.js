const News = require('../Database/news');
const Quicklinks = require('../Database/quicklinks');
const Tenders = require('../Database/tenders');
const fs = require('fs');
const path = require('path');
const { join } = require('path');

exports.getAdminPanel = (req, res) => {
    res.render('adminPanel.ejs', { style: 'adminPanelStyle' });
}

// .............................Function for indexing..............................

const indexedResult = async (pageNo, perpage, panel) => {
    let data;
    let tempData = new Array();
    if (panel == "news") {
        try {
            data = await News.find();
        } catch (err) {
            console.log(err);
        }
    }
    else if (panel == "quicklinks") {
        try {
            data = await Quicklinks.find();
        } catch (err) {
            console.log(err);
        }
    }
    else {
        try {
            data = await Tenders.find();
        } catch (err) {
            console.log(err);
        }
    }
    data.reverse();
    if (data.length < perpage) {
        return data;
    }
    for (let i = (pageNo - 1) * perpage; i < (perpage * pageNo); i++) {
        if (data[i] != undefined) {
            tempData.push(data[i]);
        }
    }
    return tempData;
}

exports.getPrimaryPanel = async (req, res) => {
    const id = req.query.taskId;
    const pageNo = req.query.pageNo;
    const perpage = req.query.perpage;
    const tempData = await News.find();
    const noOfPages = Math.ceil(tempData.length / perpage);
    if (id == 1) {
        data = await indexedResult(pageNo, perpage, "news");
        console.log(data);
        res.render('manageNews', { style: 'manageNews', news: data, pages: noOfPages, page: pageNo });
    }
    else if (id == 2) {
        data = await indexedResult(pageNo, perpage, "quicklinks");
        console.log(data);
        res.render('manageQuicklinks', { style: 'manageQuicklinks', links: data, pages: noOfPages, page: pageNo });
    }
    else {
        data = await indexedResult(pageNo, perpage, "tenders");
        console.log(data);
        res.render('manageTenders', { style: 'manageNews', tenders: data, pages: noOfPages, page: pageNo })
    }
}

exports.postPrimaryTask = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id == 1) {
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
            res.status(200).send({ message: "News created successfully!" });
        } catch (error) {
            console.log(error);
            res.status(401).send({ error: "Error Occured, Please try again. " });
        }
    }
    else if(id == 2){
        console.log("coming here")
        const title = req.body.title;
        const description = req.body.description;
        const url = req.url;
        let links = new Quicklinks({
            title,
            description,
            url
        });
        try {
            const data = await links.save();
            if(data){
                res.status(200).send({ message: "Links created successfully!" });
            }
        } catch (error) {
            console.log(error);
            res.status(401).send({ error: "Error Occured, Please try again. " });
        }
    }
    else{
        const title = req.body.title;
        const description = req.body.description;
        const file = req.files;
        let tenders = new Tenders({
            title,
            description,
            file
        });
        try {
            const data = await tenders.save();
            res.status(200).send({ message: "Links created successfully!" });
        } catch (error) {
            console.log(error);
            res.status(401).send({ error: "Error Occured, Please try again. " });
        }
    }

}

exports.getNews = async (req, res) => {
    const id = req.params.id;
    try {
        News.findById(id, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
                res.render('news', { title: result.title, description: result.description, file: result.file[0].filename });
            }
        });

    } catch (err) {
        console.log(err);
    }
}

exports.deleteNews = async (req, res) => {
    const id = req.query.id;
    const panel = req.query.panel;

    if(panel == 1){
        try {
            News.findByIdAndDelete(id, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let filePath = path.join('/uploads/', result.file[0].filename);
                    fs.unlink("Public" + filePath, function (err) {
                        if (err) throw err;
    
                        console.log('File deleted!');
                    });
                    res.status(200).json({ message: "deleted" });
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
    else{
        try {
            Tenders.findByIdAndDelete(id, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let filePath = path.join('/uploads/', result.file[0].filename);
                    fs.unlink("Public" + filePath, function (err) {
                        if (err) throw err;
    
                        console.log('File deleted!');
                    });
                    res.status(200).json({ message: "deleted" });
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
}


exports.getDisplayNews = async (req, res) => {
    const id = req.query.id;
    const panel = req.query.panel;
    if(panel == 1){
        try {
            News.findById(id, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.render('displayNews', { result });
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    else{
        try {
            Tenders.findById(id, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.render('displayNews', { result });
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}