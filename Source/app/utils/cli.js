/* eslint-disable global-require */

function mapDataToArr(data) {
  return new Promise(resolve => {
    const withoutBrackets = data.slice(1, data.length - 1);
    const arr = withoutBrackets.split(';');
    const formatedData = arr.map(item => {
      const clearItem = item.replace(/"/g, '').trim();
      return clearItem.split('-');
    });
    resolve(formatedData);
  });
}

export function runCommand(command, ...args) {
  return new Promise((resolve, reject) => {
    const { spawn } = require('child_process');
    const child = spawn(command, args);

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', chunk => {
      if (!chunk.trim()) return;
      mapDataToArr(chunk)
        .then(data => {
          resolve(data);
          return data;
        })
        .catch(error => reject(error));
    });
    child.on('close', code => {
      resolve(code);
      console.log(`child process exited with code ${code}`);
    });
  });
}

export function temp() {}
