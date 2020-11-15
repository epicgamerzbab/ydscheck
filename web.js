const http = require('http')
const fs = require('fs')


const port = 8000 // portu variable ile atadım

const sw = http.createServer((req,res)=>{ // server kurdum (http modulu expressden kolay geld)
    var url = req.url
    if (url == '/'){ // eger mainpage ise indexi yolladım
    fs.readFile('index.html',(err,data)=>{ // path yerine fs daha kolay geldigi icin daha rahat oldu
        res.write(data)
        res.end('')
    })
}
    else{ // eger request mainpageye uymazsa error htmlini yolluyorum
       fs.readFile('error.html',function(err,data){
            res.write(data)
            res.end('')
       })
    }
})

sw.listen(port,(num)=>{
num = port
console.log(`SERVER http://localhost:${port}/ ustune kurulu iyi gunler`)
})