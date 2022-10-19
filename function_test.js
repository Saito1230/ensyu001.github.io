const log_str_1 = (str) => consoleLog(str);
const log_str_2 = (str_1, str_2 = "Default Str") => {
  consoleLog(`引数1: ${str_1}`);
  consoleLog(`引数2: ${str_2}`);
}

const consoleLog = (str) => console.log(str);