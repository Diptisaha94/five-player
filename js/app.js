const playerArray = [];
function displayPlayer(playerArray){
const ol = document.querySelector('#ol');
ol.textContent = '';
for(i=0;i<playerArray.length;i++){
        const li = document.createElement('li');
        li.textContent= playerArray[i];
        ol.appendChild(li); 

}
}

function selectedPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    if(playerArray.length > 5){
        alert("you are already five player selected");
    }
   displayPlayer(playerArray);
   
}