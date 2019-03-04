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
  "December"
];

export function getMonthName(index) {
  return months[index];
}

export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export function getWeekDayName(index) {
  return weekdays[index];
}

export function abbreviationForWeekday(weekday) {
  return weekday.substring(0, 1);
}

const WEEK_LENGTH = 7;

export function getFirstDateOfWeek(curr) {
  return curr.getDate() - curr.getDay();
}

export function getLastDateOfWeek(curr) {

}

/*get week for day*/
export function getWeekForDay(curr) {
  console.log(`helper start ${curr}`)
  console.dir(curr)
  /*convert obj to string and copy it to not mutate origin all in js is reference*/
  let mutate = curr.toString().slice();//Object.assign({}, curr);
  mutate = new Date(mutate);
  let week = [];

  for (let i = 0; i <= 6; i++) {
    let first = mutate.getDate() - mutate.getDay() + i;
    let day = new Date(mutate.setDate(first));/*.toISOString().slice(0, 10)*/
    week.push(day);
  }
  console.log(`helper end ${curr}`)
  return week;
}

/*draw weeks and days for month. Empy cells for days of another month*/
export function getWeeksForMonth(month, year) {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();
  const weeks = [[]];

  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
}