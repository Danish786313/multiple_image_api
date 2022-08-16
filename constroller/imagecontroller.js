const path = require('path');
const multer = require('multer');
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb)
        { 
            if(file.mimetype ==='image/jpeg'||file.mimetype ==='image/png'||file.mimetype ==='image/jpg'){
            cb(null,file.originalname+"-"+Date.now()+path.extname(file.originalname));
            }
            else{
                cb(new Error('Unsupported file'),false)

            }
        }
     
    })
})

module.exports = {
    upload:upload
}