
var fs = require('fs');

var completeTasks = 0;

var tasks = [];

var wordcounts = {};

var fileDir = './text';

function checkIfComplete(){
    completeTasks++;
    if(completeTasks == tasks.length){
        for(var index in wordcounts){
            console.log(index +' : ' + wordcounts[index]);
        }
    }
}


function countwordinText(text){
    var words = text.toString().toLowerCase().split(/\W+/).sort();
    for(var index in words){
        var word = words[index];
        if(word){
            wordcounts[word] = (wordcounts[word] ? wordcounts[word]+1:1);
        }
    }

}


fs.readdir(fileDir,function(err,files){
    if(err) throw err;
    
    for(var index in files){
        var task = (function(file){
            return function(){
                fs.readFile(file,function(err,text){
                    if(err) throw err;
                    countwordinText(text);
                    checkIfComplete();
                });
            }
        })(fileDir+'/'+files[index]);
        tasks.push(task);
    }
    for(var task in tasks){
        tasks[task]();
    }
});


