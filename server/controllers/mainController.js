/*
    get/
    homepage
*/

exports.homepage = async(req, res) => {
    const locals = {
        title: "Notes",
        description: "This is the homepage" 
    }
    res.render('index', {
        locals,
        layout: '../views/'
     });
}


/*
    get/
    about
*/

exports.about = async(req, res) => {
    const locals = {
        title: "About - Notes App",
        description: "This is a node js note app that I created for practicing" 
    }
    res.render('about', locals);
}