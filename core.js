const mongoose = require('mongoose');
class Core {
    constructor(){
        this.startDatabase();
    }
    startDatabase() {
        mongoose.connect('mongodb+srv://ufal:IjDYmDlLHAiqchsX@cluster0.ces2k.mongodb.net/jadson', {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

module.exports = Core; 