const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('April 27, 2018, 00:00:00').getTime();

// Update every second
const interval = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Time between now and launch
    const distance = launchDate - now;

    // Time calcs
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / (1000));

    // Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // Check if past launch
    if(distance < 0){
        // Stop countdown
        clearInterval(interval);
        // Style and output text
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched!";
    }
}, 1000);