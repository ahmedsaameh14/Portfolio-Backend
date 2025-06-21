const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')           // Where file will be saved
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + '_' + file.originalname)      // set unique name to file 
    }
})
const upload = multer({ storage });
module.exports = multer({ storage });