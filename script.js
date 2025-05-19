let currentHour = 12;
let currentMinute = 0;

function updateClock() {
    const hourAngle   = (currentHour % 12) * 30 + currentMinute * 0.5;
    const minuteAngle = currentMinute * 6;
  
    const hourHand   = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
  
    hourHand.style.transform   = `translateX(-50%) rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    updateDigitalClock();
  }
  
  function updateDigitalClock() {
    let hour = currentHour % 12;
    if(currentHour === 12 || currentHour === 0) hour = 12;
    const hh = String(hour).padStart(2, "0");
    const mm = String(currentMinute).padStart(2, "0");
    document.getElementById("digital-clock").textContent = `${hh}:${mm}`;
  }

function adjustTime(minutes) {
  currentMinute += minutes;
  while (currentMinute >= 60) {
    currentMinute -= 60;
    currentHour++;
  }
  while (currentMinute < 0) {
    currentMinute += 60;
    currentHour--;
  }

  currentHour = (currentHour + 24) % 24;  // 24시간 형식 유지
  updateClock();
}

function setToCurrentTime() {
  const now = new Date();
  currentHour = now.getHours();
  currentMinute = Math.floor(now.getMinutes() / 15) * 15; // 15분 단위로 내림
  updateClock();
}

function createTicks() {
    const clock  = document.querySelector('.clock');
    const radius = 140;  // 시계 내부 반지름 (300/2 - border 10)
  
    for (let i = 0; i < 60; i++) {
      const tick = document.createElement('div');
      tick.classList.add('tick');
      if (i % 5 === 0) tick.classList.add('hour');
  
      const angle = i * 6; // 360도 / 60
  
      // 1) rotate 먼저, 2) 바깥으로 이동
      tick.style.transform = `
        rotate(${angle}deg)
        translateY(-${radius}px)
      `.trim();
  
      clock.appendChild(tick);
    }
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    createTicks();
    updateClock();
  });