const args = process.argv.slice(2);
for (const num of args) {
  if (num < 0 || !(Number.isInteger(Number(num)))) {
    console.log('Entered an invalid input!')
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000)
  }
}