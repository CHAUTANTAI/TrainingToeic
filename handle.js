let vocab = [
  "address",
  "avoid",
  "evaluation",
  "traditional",
  "demonstration",
  "structure",
  "Characteristic",
  "Consequence",
  "Consider",
  "Cover",
  "Expiration",
  "Frequently",
  "commitment",
  "Reputation",
  "Require",
  "requirement",
  "current",
  "imply",
  "a variety of",
  "variety",
  "demonstrate",
  "develop",
  "evaluate",
  "gather",
  "offer",
  "primary",
  "risk",
  "strategy",
  "substitution",
  "substitute",
  "purpose",
  "suspension",
  "permit",
  "pool",
  "purchase",
  "tradition",
  "infrastructure",
  "manufacturer",
];
let shuffled = vocab.sort(() => Math.random() - 0.5);
let vocabulary = document.getElementById("Vocabulary");
let status = document.getElementById("status");
let i = 0;
vocabulary.innerHTML = shuffled[i];

function nextClick() {
  if (i == vocab.length) {
    status.innerHTML = `It's Over! Please click "REFRESH" button.`;
    return;
  }

  status.innerHTML = "";
  i++;
  vocabulary.innerHTML = shuffled[i];
}
function backClick() {
  if (i == 0) {
    status.innerHTML = "This is the First!";
    return;
  }
  i--;
  vocabulary.innerHTML = shuffled[i];
}
function refreshClick() {
  let status = document.getElementById("status");
  status.innerHTML = `The Vocabulary has been REFRESHED!`;
  shuffled = vocab.sort(() => Math.random() - 0.5);
  i = 0;
  vocabulary.innerHTML = shuffled[i];
}
//Test exists Repeat Words
// let test = [];
// for (let i = 0; i < vocab.length; i++) {
//   if (test.includes(vocab[i])) {
//     alert(vocab[i]);
//   } else {
//     test.push(vocab[i]);
//   }
// }
// alert("ok");
//
//alert("Number of Words: " + vocab.length);
