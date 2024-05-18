const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jun 26, 2024 10:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('dias').innerText = '0';
        document.getElementById('horas').innerText = '0';
        document.getElementById('minutos').innerText = '0';
        document.getElementById('segundos').innerText = '0';
      }
    }, second);
