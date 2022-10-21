
function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    function sayHi (){
  console.log("Hello")
    };
    return sayHi 
}
function returnsAnAnonymousFunction(){
   return function(){
        console.log("Hello")
    }
}