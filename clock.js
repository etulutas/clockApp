function showTime() {
    const saat = document.getElementById("myClock");
  
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minutes");
    const second = document.getElementById("second");
  
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
  
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
  }
  setInterval(showTime, 1000);