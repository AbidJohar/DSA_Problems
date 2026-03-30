

function A(cb){

    console.log("A");
   
    cb();


}

function B(cb){
    console.log("B");
    cb();
     
}

function C(){
  console.log("C");
}

A(B(C));