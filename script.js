const eventDate = new Date("2024-11-11T17:00:00").getTime();

// Atualiza o contador a cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Exibe o tempo restante no elemento com id "countdown"
    document.getElementById("diaSpan").innerText = days
    document.getElementById("horaSpan").innerText = hours
    document.getElementById("minutoSpan").innerText = minutes
    document.getElementById("segundoSpan").innerText = seconds
        

    // Para o contador quando o tempo acabar
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "O evento já começou!";
    }
}, 1000);