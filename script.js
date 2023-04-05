window.promises = [];

for (let i = 1; i <= 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise ${i} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch(error => console.log(error));
