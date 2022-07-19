setInterval(() => {
    
    let date = new Date(),
    formatDate = date.toLocaleString('pt-BR', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })

    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    let period;
    period = hour < 12 ? 'AM' : 'PM';
    hour < 10 ? "0" + hour : hour;
    seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#display-date").innerText = formatDate;

    document.querySelector("#hours").innerText = hour;
    document.querySelector("#minutes").innerText = minutes;
    document.querySelector("#seconds").innerText = seconds;
    document.querySelector("#ampm").innerText = period;
}, 1000);