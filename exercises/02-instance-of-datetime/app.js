// let d = new Date();
// console.log("Today is "+(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear());
let d = new Date(),
  month = '' + (d.getMonth() +1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  let _output = `Today is: ${month}-${day}-${year}`
  console.log(_output);