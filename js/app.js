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
    console.log(element);
    const playerName = element.parentNode.children[0].innerText;
     if(selectedPlayer){
        element.setAttribute("disabled",true);
     }
     if(playerArray.length < 5){
        playerArray.push(playerName);
    }
    else{
        alert("You are already five player add");
        element.removeAttribute("disabled",false);
    }
   displayPlayer(playerArray);
document.getElementById('selected-player').innerText = playerArray.length;  
}
function getElementbyValue(element){
    const playerElement = document.getElementById(element);
const playerString = playerElement.value;
const playerNumber = parseFloat(playerString);
return playerNumber;
}
/* calculation part*/
document.getElementById("calculate-btn").addEventListener('click',function(){
    const perPlayerCost = getElementbyValue("per-player");
    const playerExpenses = document.getElementById("player-expenses");
    const totalCost = perPlayerCost * playerArray.length;
    playerExpenses.innerText = totalCost;
})
document.getElementById("calc-total-btn").addEventListener('click',function(){
    const perPlayerCost = getElementbyValue("per-player");
    const playerExpenses = document.getElementById("player-expenses");
    const totalCost = perPlayerCost * playerArray.length;
    playerExpenses.innerText = totalCost;
    const managerCost = getElementbyValue("manager");
    const coachCost = getElementbyValue("coach");
    const totalPlayerCost = totalCost + managerCost + coachCost;
    const totalElement = document.getElementById("total");
    totalElement.innerText = totalPlayerCost;
})