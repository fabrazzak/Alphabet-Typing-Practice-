
function addClassList(id,classAd){
    const homeSection= document.getElementById(id);
     homeSection.classList.add(classAd);
}

function removeClassList(id,classAd){
    const playGround=document.getElementById(id);
    playGround.classList.remove(classAd)

}

function getInnerTextById(id){

    const scoreTag=document.getElementById(id);
     const totalScore= parseInt(scoreTag.innerText);
     return totalScore

}

function randomAlphabet(){

    const allAlphabet="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    const allAlphabetArray=allAlphabet.split(",");    
    const randomNumber= Math.round(Math.random() * 25);
    const currentAlphabet = allAlphabetArray[randomNumber];
    return currentAlphabet;

}