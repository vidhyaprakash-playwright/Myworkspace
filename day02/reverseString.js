let str="madam"
let text="";

function reverseString(){    
    //logic to reverse the string 

    for(i=str.length-1;i>=0;i--){
      console.log(str.charAt(i)) 
      text=text.concat(str.charAt(i))           
    }
    console.log("Reversed String is "+text)
}
 function palindromeCheck(){
    if(str===text){
        console.log("The given string is a palindrome")
    }else{
        console.log("The given string is not a palindrome")
    }
 }
 reverseString()
 palindromeCheck()