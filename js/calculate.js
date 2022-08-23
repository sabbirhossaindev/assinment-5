/*..................... I am  cart players explore start........................ */
const playerArray = [];
function display(playerList) {
    const tableBody = document.getElementById('cart-players');
    tableBody.innerHTML = '';

    for (let i = 0; i < playerList.length; i++){
    const fiend = document.querySelectorAll('.find-items tr td').length;
    if (fiend < 5) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th class="border border-0">${i + 1}</th>
            <td class="border border-0">${playerList[i].name}</td>
        `;
        tableBody.appendChild(tr);
        }
        else {
            alert("You can't click more than five people");
        }
    }
};
    
function addToList(element) {
    element.style.backgroundColor = 'red';
    element.setAttribute('disabled', true);
    const playerName = element.parentNode.parentNode.children[0].children[1].children[0].innerText;
        
    const playerObj = {
        name: playerName,
    }
    playerArray.push(playerObj);
    document.getElementById('total-select-player').innerText = playerArray.length;
    display(playerArray);
};
/*..................... I am  cart players explore end........................ */


/* ....................common function use for perPlayerInputField ...............*/
function getFieldValueById(id) {
    const perPlayerInputField = document.getElementById(id);
    const value = perPlayerInputField.value;
    perPlayerInputField.value = '';
    return parseInt(value);
};

function setTextElementValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
};

/*......................common function use for managerCoachField .......................*/
function getFieldValueById(id) {
    const managerCoachField = document.getElementById(id);
    const value = managerCoachField.value;
    managerCoachField.value = '';
    return parseInt(value);
};

function setTextValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
};



/* ......................calculate btn  use addEventListener.....................*/
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = getFieldValueById('per-player-input-field');
    const fiend = document.querySelectorAll('.find-items tr td').length;
    const totalPlayersAmount = fiend * perPlayer;
    const playerExpenses = totalPlayersAmount;
    if (playerExpenses == '') {
        alert('select button press & typed per player Amount added');
    }

    setTextElementValueById('Player-expenses', playerExpenses);
});


/*.................... calculate-total use addEventListener  ...........................*/
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerElement = getFieldValueById('manager-field');
    const coachElement = getFieldValueById('coach-field');
    const psgTotalCost = managerElement + coachElement;
    const playerExpensesStr = document.getElementById('Player-expenses').innerText;
    const playerExpenses = parseFloat(playerExpensesStr);
    const total = psgTotalCost + playerExpenses;
     
    setTextValueById('total', (total));
});