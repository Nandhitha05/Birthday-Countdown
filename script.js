
function calculateTimeUntilBirthday() {
    const today = new Date()
    const birthday = new Date(today.getFullYear(), 2, 18);  
    if (today.getMonth() > 2 || (today.getMonth() === 2 && today.getDate() > 18)) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    } 
    const difference = birthday - today; 
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); 
    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const { days, hours, minutes, seconds } = calculateTimeUntilBirthday();
    
    document.getElementById('dleft').textContent = `${days}d`;
    document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
    document.getElementById('min').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('sec').textContent = seconds.toString().padStart(2, '0');
    
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
    document.getElementById('day').textContent = formattedDate;
    
 
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById('text').textContent = 'Happy 19!';
        document.getElementById('wish').textContent = 'Wishing you a fantastic day!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

