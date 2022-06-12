const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "") {
      reject("Invalid Data!");
    } else if (emosi == "marah") {
      (async () => {
        const sumIIX = hitung(await promiseTheaterIXX(), emosi);
        const sumVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        const sumIIX = hitung(await promiseTheaterIXX(), emosi);
        const sumVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    }
  });
};

function hitung(data, feel) {
  let counter = 0;
  if (feel == "marah") {
    for (let a = 0; a < data.length; a++) {
      if (data[a].hasil == "marah") {
        counter++;
      }
    }
  } else {
    for (let a = 0; a < data.length; a++) {
      if (data[a].hasil == "tidak marah") {
        counter++;
      }
    }
  }
  return counter;
}
module.exports = {
  promiseOutput,
};