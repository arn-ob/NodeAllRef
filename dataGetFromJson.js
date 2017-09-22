
// Get the html data from json file . by a syntex % . 
// 21 sept 


var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url == '/'){
        fs.readFile('./list.json',function(err,data){
            if(err){
                console.error(err);
                res.end('Error');
            }else{
                var title = JSON.parse(data.toString());
                fs.readFile('./view/page.html',function(err,data){
                    if(err){
                        console.error(err);
                        res.end('Server Error');
                    }
                    else{
                        var temp = data.toString();
                        var html = temp.replace('%',title.join('<p></p>'));
                        res.writeHead(200,{'context-text':'text/html'});
                        res.end(html);
                    }
                });
            }

        })
    }
}).listen(8000);