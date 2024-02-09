// ************************ OS ************************
//-> By using this... we get the hardware info about system we are working on !!!

// import OS Module using...
const os = require("os");

// ----------------------- Methods with OS platform -----------------------

// console.log(os.arch())
//-> x64 (my cpu structure)
//-> returns OS's CPU structure

// console.log(os.platform())
//-> returns OS platform "darwin"- for mac; "win32"- for windows; "linux"- for linux

// console.log(os.cpus())
// -> returns an array of objects containing the info about each logical CPU core
// -> returns the following array of objects...
// [
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 745421, nice: 0, sys: 766078, idle: 14664578, irq: 40734 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 547265, nice: 0, sys: 457171, idle: 15171500, irq: 9093 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 445796, nice: 0, sys: 338796, idle: 15391343, irq: 5421 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 258187, nice: 0, sys: 148140, idle: 15769593, irq: 2015 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 265234, nice: 0, sys: 221406, idle: 15689281, irq: 4312 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 175640, nice: 0, sys: 118750, idle: 15881531, irq: 2593 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 244218, nice: 0, sys: 215687, idle: 15716031, irq: 3859 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//     speed: 1190,
//     times: { user: 188875, nice: 0, sys: 206250, idle: 15780812, irq: 2203 }
//   }
// ]

// console.log(os.freemem() / 1024 / 1024 / 1024)
//-> returns amount of free memory that is available on this system

// console.log(os.totalmem() / 1024 / 1024 / 1024)
//-> returns the total memory on the system

// console.log(os.homedir())
//-> returns the home directory that this working file exists in.

// console.log(os.hostname())
//-> returns hostname of the OS

const upt = (os.uptime());
const days = Math.floor(upt / 60 / 60 / 24)
const hrs = Math.floor(upt / 60 / 60) % 24
const mins = Math.floor(upt / 60) % 60
const seconds = Math.floor(upt) % 60

console.log(`uptime-${upt}... the uptime is ${days}-Days; ${hrs}-Hours; ${mins}-Minutes; ${seconds}-Seconds`)
//->