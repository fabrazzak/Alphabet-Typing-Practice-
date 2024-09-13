// hide home section 

 function hideElementById(classAd){
   addClassList("home-section",classAd);

 }


//  add playground 
 function addAddElementByID(classRemove){
    removeClassList("play-ground",classRemove)
  
 }

 function handleKeyPressEven (even){    
    const typingKey=even.key;
    let  totalScore = getInnerTextById("score")
    let  totalLife = getInnerTextById("life");
   
  
    
    const currentAlphabet= document.getElementById("letter").innerText;
    if(currentAlphabet == typingKey){

        removeClassList(typingKey,"bg-orange-400");
        continueGame();
        totalScore += 1; 
        document.getElementById("score").innerText= totalScore ;  
         document.getElementById("total-point").innerText = totalScore ;     

    }
    else if( totalLife > 1) {
    
    totalLife -= 1;
    document.getElementById("life").innerText= totalLife ; 
     //  addClassList("home-section",classAd);   

    } else{

         addClassList("play-ground","hidden");
         removeClassList("total-score","hidden")
          document.getElementById("life").innerText= 5 ; 
          document.getElementById("score").innerText= 0;
          removeClassList(currentAlphabet,"bg-orange-400")
             
          
      

    }
  
   



 }


document.addEventListener("keyup",handleKeyPressEven)

// game continue  


 function continueGame(){

    const currentAlphabet= randomAlphabet(); 
    document.getElementById("letter").innerText=currentAlphabet;
    addClassList(currentAlphabet,"bg-orange-400")


 
 }


//  play game 

function play() {
    hideElementById("hidden");
    addAddElementByID("hidden")
    continueGame()   

}
function playAgain() {
    document.getElementById("total-point").innerText = 0 ; 
    addClassList("total-score","hidden");
    hideElementById("hidden");
    removeClassList("play-ground","hidden")
    
    continueGame()   

}

