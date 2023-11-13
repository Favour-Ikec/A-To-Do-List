const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");



const currentYear = new Date().getFullYear();

const newYearDate = new Date(`January 1 ${currentYear + 1}, 00:00:00`);


function updateCountDown() {
  const currentTime = new Date();

  const diff = newYearDate - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24 );
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  

  let days = document.getElementById("days").innerHTML = d;
  
  
  let hours = document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
  
  
  let minutes = document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m; 
  
  
  
  let seconds = document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;

  if(diff <= 0) {
    //Countdown has reached zero, trigger celebration 
    celebrateNewYear()
  }
}

setInterval(updateCountDown, 1000);


  const celebrationMessages = [
    "Happy New Year!",
    "Wishing you a fantastic year ahead!",
    "May all your dreams come true in the new year!",
    "Have a great year",
    "You can do amazing things in this new year",
    "Counting my blessings and wishing you more.",
    "New year, new opportunities. Make them count!",
    "Cheers to the memories we'll create in the coming year!",
    "Sending you warm wishes for a bright and prosperous year ahead.",
    "May the next year be a chapter of endless blessings.",
    "Happy New Year! May it be your best one yet.",
    "May the coming year bring you peace, health, and happiness."





  ]

  function celebrateNewYear () {
      //First we need a variable to display random messages
      const celebrationMessage = document.getElementById("celebration-message");

      // Randomly select a message
      const randomMessage =
        celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
    
      // Set the message text
      celebrationMessage.textContent = randomMessage;
    
      // Show the message by removing the "hidden" class
      celebrationMessage.classList.remove("hidden");
}




