var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    getTitles(res);
}).listen(8000);


function getTitles(res){
    fs.readFile('./list.json',function(err,data){
        if(err){
            console.error(err);
            res.end('Server Error');
        }
        else{
            getTemplete(JSON.parse(data.toString()),res);
        }
    })
}

function getTemplete(title,res){
    fs.readFile('./view/page.html',function(err,data){
        if(err){
            console.error(err);
            res.end('Error');
        }else{
            formatHTMl(title,data.toString(),res);
        }
    })
}


function formatHTMl(title,tmpl,res){
    var html = tmpl.replace('%',title.join('<p></p>'));
    res.writeHead(200,{'context-type':'text/html'});
    res.end(html);
}