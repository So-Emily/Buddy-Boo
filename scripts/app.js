let hunger = 50;
let happiness = 50;

function updateStatus(){
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('happiness').innerText = happiness;
}

function feedPet() {
    hunger = math.max(0, hunger - 10);
    updateStatus();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 10);
    updateStatus();
}

updateStatus();