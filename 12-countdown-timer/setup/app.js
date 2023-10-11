const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2023, 9, 25, 10, 30, 0)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear()
const month = futureDate.getMonth()
const day = futureDate.getDay()
const date = futureDate.getDate()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

const weekday = weekdays[day];
const futureMonth = months[month];

// const today_date = `Year: ${year}, Month: ${months[month]}, Day: ${weekdays[day]}, Date: ${date}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
// console.log(today_date);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${futureMonth} ${year}, ${hours}:${minutes}am`

// future date - today date = 25 Oct - 11 Oct = 14 
const giveawayEndTime = futureDate.getTime();
// console.log("giveawayEndTime:", giveawayEndTime); //1698210000000

function getRemainingTime() {
  const today = new Date().getTime()
  // console.log("today:", today); //1697008562048

  let remainingTime = giveawayEndTime - today
  // console.log("remainingTimeOfGiveaway:", remainingTime); //1201423364
  // ab is bache hue t yani ke mili seconds ko hamko convert krna hai days, hours, minutes, seconds me 

  const oneDay = 24 * 60 * 60 * 1000 //86400000
  const oneHour = 60 * 60 * 1000 //3600000
  const oneMinute = 60 * 1000 //60000

  // calculate all values
  let days = Math.floor(remainingTime / oneDay);
  // console.log("remaining_days:",days);

  let hour = Math.floor((remainingTime % oneDay) / oneHour)
  // console.log("remaining_hours:", hour);

  let minute = Math.floor((remainingTime % oneHour) / oneMinute)
  // console.log("remaining_minutes:", minute);

  let seconds = Math.floor((remainingTime % oneMinute) / 1000)
  // console.log("remaining_seconds:", seconds);


  const values = [days, hour, minute, seconds]
  // console.log(values);
  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
    // console.log(item);
  })

  if(remainingTime < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;

  }
}
//countdown
let countdown = setInterval( getRemainingTime , 1000);

getRemainingTime()