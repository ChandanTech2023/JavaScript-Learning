//Immediately Invoked Function Expression (IIFE)

function chai(){  
    console.log('DB CONNECTED');

}
// chai()

//TO REDUCE THE PROBLEM WITH GLOBAL SCOPE POLLUTION WE USE  IIFE Function
(function chai(){
    // This is Named IIFE
    console.log('DB CONNECTED');

})
chai() ;  // In this specal case For stopping the context here use of ';' is mandatory


( (name) =>{
    //This is Simple IIFE ,not a Named IIFE
    console.log(`DB CONNECTED Two ${name}`);

})("CHANDAN") //here passed parameter name