const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  } else if (Number.isInteger(Number(key)) && Number(key) < 10 && Number(key) > 0){
    console.log(`Setting timer for ${key} seconds...`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
  }
});