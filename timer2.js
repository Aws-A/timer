let count = [1000, 2000, 3000, 40000, 5000, 6000, 7000, 8000, 9000];
let num = ['1', '2','3','4','5','6','7','8','9'];

const ring = function(str) {
  for (let i = 0; i < 9; i ++) {
    if (str === 'b') {
      process.stdout.write('\x07');
      return;
    } else if (str === num[i]) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, count[i]);
      return;
    }  else if(str && str.name === "c" && str.ctrl) {
        console.log("Thanks for using me, ciao!");
        process.exit();
      }
  }
}

let str = process.argv[2];
ring(str);