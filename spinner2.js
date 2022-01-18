const loadingArray = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   '];

let delay = 100;

for (let i = 0; i < loadingArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(loadingArray[i]);
    if (i === loadingArray.length - 1) {
      process.stdout.write('\n');
    }
  }, delay);
  delay += 200;
}