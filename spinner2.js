
//Before//

// setTimeout(() => {
//   process.stdout.write('\r|   ');
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//     setTimeout(() => {
//       process.stdout.write('\r-   ');
//       setTimeout(() => {
//         process.stdout.write('\r\\   ');
//         setTimeout(() => {
//           process.stdout.write('\r|  ');
//           setTimeout(() => {
//             process.stdout.write('\r/  ');
//             setTimeout(() => {
//               process.stdout.write('\r-  ');
//               setTimeout(() => {
//                 process.stdout.write('\r\\  ');
//                 setTimeout(() => {
//                   process.stdout.write('\r|  ');
//                   process.stdout.write('\n');
//                 }, 1900)
//               }, 1600)
//             }, 1300)
//           }, 1100)
//         }, 900)
//       }, 700);
//     }, 500);
//   }, 300);  
// }, 100);


//After//
const spinny = ['\r|   ','\r/   ','\r-   ','\r\\   ']
let delay = 200
let increment = 200

for(let i = 0; i < 20; i++){
  for(let spin of spinny){
    setTimeout(() => {
      process.stdout.write(spin);
    }, delay)
    delay += increment
  }
}

// process.stdout.write('\n');