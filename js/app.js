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
document.getElementById('selected-player').innerText = playerArray.length;  
}
function getElementbyValue(element){
    const playerElement = document.getElementById(element);
const playerString = playerElement.value;
const playerNumber = parseFloat(playerString);
return playerNumber;
}

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