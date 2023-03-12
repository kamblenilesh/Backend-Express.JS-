// products
const products = [];

exports.getSuccessPage = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success Message',
        path: '/success'
    });
};