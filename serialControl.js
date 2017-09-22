
// Serial Execution Exexcution 

var flow = require('nimble');

flow.series([
    function(callback){
        setTimeout(function(){
            console.log('1st Exe');
            callback();

        },1000);
    },

    function(callback){
      setTimeout(function(){
          console.log('It exe next');
          callback();
      },1000);  
    },
    function (callback){
        setTimeout(function(){
            console.log('Exe last');
            callback();
        },100);
    }

]);

