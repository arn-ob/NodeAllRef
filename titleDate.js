exports.mydateTime = function(){

    newFunction();
    return Date();
};




function asuncfunction(callback){
    setTimeout(callback,200);
}




color = 'green'


function newFunction() {
    (function(color) {
        asuncfunction(function() {
        console.log('The color is ' + color);
    });
    })(color);
}

