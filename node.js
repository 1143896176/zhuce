var http=require('http');
http.createServer(function(req,res){
    var str='';
    var i=0;
    req.on('data',function(data){
        console.log(i++)
        str+=data;
    })
    req.on('end',function(){
        console.log(str)
        res.write('200')
        res.end();
    })
}).listen(8081);