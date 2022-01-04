const date = require('date-and-time')


const value = date.format(new Date(),
    'YYYY/MM/DD HH:mm:ss');

console.log("Текущая дата и время : " + value)

