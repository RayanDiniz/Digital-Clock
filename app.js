setInterval(() => {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? "PM" : "AM";
  
  h = (h>=10) ? h : "0"+h;
  m = (m>=10) ? m : "0"+m;
  s = (s>=10) ? s : "0"+s;
  
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = ap;

  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 15}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
})