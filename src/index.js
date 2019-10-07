module.exports = function check(str, bracketsConfig) {
  let i = 0;
  let reg = [];
  while (i < bracketsConfig.length) {
    let regStr = Number.isInteger(+bracketsConfig[i][0]) ? `${bracketsConfig[i][0]}${bracketsConfig[i][1]}` : `\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}`;
    reg.push(regStr);
    i++;
  }
  const regExp = new RegExp(reg.join('|'), 'g');
  while (regExp.test(str)) {
    str = str.replace(regExp, '')
  }
  return str.length === 0;
}



