exports.getErrorPage = (req,res,next)=>{
    res.render('404' , {docTitle :"Page Not Found "});

}