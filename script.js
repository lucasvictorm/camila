const eventDate = new Date("2024-11-11T16:00:00").getTime();

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

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    data = {nome: document.getElementById('nome').value}
   
    fetch('https://script.google.com/macros/s/AKfycbwuJgdI0xjHubsiI3xz3zoUR3zkdMYbPBwOfllXAbQXx7QwVwV6c2ptmHME6wp4C5wh_Q/exec', {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(data)
      })
      .then(response => response.text());
    
      document.getElementById('nome').value ='';

      document.getElementById('botaoConfirmar').style.display = 'none';

      document.getElementById('textoConfirmar').style.display = 'block';
});