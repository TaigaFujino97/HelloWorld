alert('Hello World');
let getToday = () => {
    const today = new Date();
    return today;
}

const dateMessage = document.getElementById('date');
const title = document.getElementById('title');
const btnRefresh = document.getElementById('btnBlack');
const btnRed = document.getElementById('btnRed');
const btnBlue = document.getElementById('btnBlue');

// Displays today date and time 
let showDate = () => {
    dateMessage.textContent = getToday();
};

// changes the color of the Title based on the button clicked.
let changeColor = (button) => {
    const color = button.id.substring(3);
    title.style.color = color;
};

// Function for buttons to refresh date and update title color
let refreshActions = (button) => {
    showDate();
    changeColor(button);
};



// Event listeners for the buttons
btnRefresh.addEventListener('click', () => refreshActions(btnRefresh));
btnRed.addEventListener('click', () => refreshActions(btnRed));
btnBlue.addEventListener('click', () => refreshActions(btnBlue));

showDate();
