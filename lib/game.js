"use strict";

const readline = require('readline');

const initQuestion = function (question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(`${question}`, answer => {
    console.log(answer);
    rl.close();
  });
};

initQuestion('toto ? ');