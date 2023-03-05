// location.href = "/";
const big = document.querySelector(".big");

const api = async () => {
  try {
    // console.log("hello");
    const response = await fetch("/find");
    const res = await response.json();
    let html = "";
    let i = 1;
    let str = `<h3>Number of Facts: ${res.length}</h3>`;
    res.forEach((element) => {
      html += `<div class="topna">
      <div class="input">
        <p class="${i}">${i}. Fact: ${element.Fact}</p>
      </div>
      <div class="input">
      <p class="${i}">Length: ${element.Length}</p>
    </div>
    </div>`;
      i++;
    });
    str += html;
    big.innerHTML = str;
  } catch {
    (e) => {
      res.send(e);
    };
  }
};
api();
