const container = document.getElementById("container");
const header = document.getElementById("header");
const thanks = document.getElementById("thanks");
const form = document.getElementById("form");
const counterElem = document.getElementById("counter");

let limit = 30; // 30s to wait until the user should be redirected to the home page.

const counter = async () => {
  return new Promise((resolve, reject) => {
    let temp = setInterval(() => {
      if (limit == 0) {
        clearInterval(temp);
        resolve();
      }
      counterElem.innerText = `Redirecting you to the homepage in ${limit} seconds`;
      limit--;
    }, 1000);
  });
};

const formHandler = async (e) => {
  e.preventDefault();
  form.submit();
  setTimeout(() => {
    container.classList.add("toggle");
    header.classList.add("toggle");
    thanks.classList.remove("toggle");
  }, 1000);
  await counter();
  window.location.assign("/index.html");
};
