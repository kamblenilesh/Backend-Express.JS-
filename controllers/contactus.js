// products
const products = [];

exports.getContact = (req, res, next) => { // next() is not use
    res.render('contact', {
        pageTitle: 'Contact US',
        path: '/contact',
        formsCSS: true,
        productCSS: true,
        activeContactUS : true
    });
};


exports.postcontact = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/success');  // redirect to '/'
}