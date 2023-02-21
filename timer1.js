count = [3000, 5000, 9000, 10000, 15000];
for (let i = 0; i < 5; i ++){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, count[i]);
}
