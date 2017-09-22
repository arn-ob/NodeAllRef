    
    function asyncs(callback){
        setTimeout(callback,2000);
    }


var color = 'blue';

asyncs(function(){
    console.log('The color is ' + color);
});

color = 'green';