
//Ex1
//Function Times 3
function productCollectionFunc(a,b) {
    var product = [a,b];
    return product;
}

var getNum = function(){
var x = prompt("Enter a number");
if(isNaN(x) || x === ""){
    alert("Not a number");
    throw new Error("Stop script");

}else{
    return parseInt(x);
}
}

function sumOfTheProducts(){
    var product1 = productCollectionFunc(getNum(),getNum());
    var product2 = productCollectionFunc(getNum(),getNum());
    var product3 = productCollectionFunc(getNum(),getNum());
    var sum = product1[0] * product2[0] * product3[0] + product1[1] * product2[1] * product3[1];
    alert(sum);
}

// optiion 2

function makePlusFunction(a, b){
    return function(c,d){
        return function(e,f){
            return a*c*e + b*d*f;

        }
    }
}

//Ex2 
//Fix the Code: Un-Mutating an Array
let  x =  [3, 3, 3, 3, 3, 3, 3];
function change(x, times) {
   var x2 = [...x]
    for(let i = 0; i < x2.length; i++) {
      let j =1;
      while (j <= times) {
        if (i >= j && i < x2.length-j) {
          x2[i]--; 
          
        }
        j++;  
}
}
    return x2; 
    }
    
function showPicture(x) {
    var btn = document.getElementById(x);
   if(btn.style.display =="none"){
         btn.style.display = "block";
   } else {
       btn.style.display = "none";
   }

}
//Ex3
//Metaprogramming: Making a Test Case
//Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)


      var createTest = function(firstParameter, secondParameter, result){
        if(typeof(firstParameter) === 'number' && typeof(secondParameter) ==='number'){
            assertEquals(firstParameter,secondParameter, result);

        }else if(typeof(firstParameter) === 'string' && typeof(secondParameter) === 'string'){
            assertEquals(firstParameter,secondParameter, result); 
        }else if (Array.isArray(firstParameter) && Array.isArray(secondParameter)){
            assertSimilar(firstParameter,secondParameter, result);
        }
        else{
            console.log("Test failed");
        }
    }

    function assertEquals(firstParameter, secondParameter, result){
        if(firstParameter + secondParameter === result){
            console.log("Test passed");
        }else{
            console.log("Test failed");
        }
      }

      function assertSimilar(firstParameter, secondParameter, result){
        if(result === firstParameter.concat(secondParameter)){
            console.log("Test passed");
        }else{
            console.log("Test failed");
        }
      }
      
    

        

    

        
    
    

   

    



//Ex4
//Backspace Attack

function eraze(){
    var Str = prompt("Enter a string");
    var count = 0;
    var newStr = "";
    for (let i = 0; i < Str.length; i++) { 
        count++;
        console.log(count) ;
        if (Str[i] != "#") {
            newStr += Str[i];
        }else {
            newStr = newStr.slice(0, -1);
           
        }    
  
 }
 alert(newStr);
 return newStr;
}


function eraze2(str){
    var count = 0;
return Array.from(str).reduce((acc, curr) => {
    count++;
    console.log(count);
    return curr ==="#" ? acc.slice(0, -1) : acc + curr;
});
}

//Ex5
//Moving Partition


function movingPartition(arr){
    var newArr = [];
    
    for(var i = arr.length -1 ; i >= 0; i--){
        var mArr = []
        mArr.push([arr.slice(0,-i)]);
        mArr.push([arr.slice(arr.length-i)]);
        newArr.push(mArr);



    }
    return newArr.splice(0,arr.length-1);


}




//Ex6
//Function Factory
function makePlusFunction(baseNumber){
    return function(newNumber){
        return baseNumber + newNumber;
    }
}

const pluesFive = makePlusFunction(5);
const plusTen = makePlusFunction(10);



