// import file
const fs = require('fs');

// import path
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
        cb(JSON.parse(fileContent));
    }
    });
};

module.exports = class Product {
    constructor(titleVariable) {
        this.title = titleVariable;
    }

    // save method store array data
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    };

    // Retrive product
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};