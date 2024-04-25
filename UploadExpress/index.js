
const express = require('express')
const app = express()
const port = 3000
const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
      cb(null,file.originalname);
    },
  });
  
const upload = multer({ storage: storage })
app.use(express.static('uploads'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/api/upload', upload.single('file'), function (req, res, next) {
    res.json(req.file)
})
app.get('/api/upload', (req,res) => {
    res.json({
        file: "RunNow_Mtp.mp3"
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})