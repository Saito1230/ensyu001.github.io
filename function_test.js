const calc_1 = () => consoleLog(2021*1010);
const calc_2 = (a, b) => consoleLog(a*b);
const calc_3 = (a, b) =>  {
  a = ((a*b) / 10) % 10
  consoleLog(a)
}

const consoleLog = (str) => console.log(str);