const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

const discSearch = async function () {
  let inpWord = document.getElementById("inp-word").value;

  try {
    const res = await fetch(`${url}${inpWord}`);
    const data = await res.json();

    result.innerHTML = `
      <h1 class="text-3xl font-bold p-6">${inpWord}</h1>
      <h3 class="text-xl">${data[0].phonetic || ""}</h3>
      <h2 class="text-lg">${data[0].meanings[0].definitions[0].definition}</h2>
      <h3>${data[0].meanings[0].definitions[0].example || ""}</h3>
      `;
  } catch {
    result.innerHTML = `<h1 class="error">Couldn't Find The Word</h1>`;
  }
};

document.getElementById("inp-word").addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    btn.click();
  }
});
btn.onclick = discSearch;
