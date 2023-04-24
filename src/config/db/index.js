const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Kết nối MongoDB thành công!');
        })
        .catch((err) => {
            console.error('Lỗi kết nối MongoDB:', err);
        });
}

module.exports = { connect };