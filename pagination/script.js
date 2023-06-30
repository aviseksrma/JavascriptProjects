const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
];

const listElement = document.getElementById("list");
const paginationElement = document.getElementById("pagination");

let currentPage = 1;
let rows = 5;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";

  let start = rowsPerPage * (page - 1);
  let end = start + rowsPerPage;
  let paginatedItmes = items.slice(start, end);

  for (let i = 0; i < paginatedItmes.length; i++) {
    let item = paginatedItmes[i];

    let itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = item;

    wrapper.appendChild(itemElement);
  }
}

function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";
  let pageCount = Math.ceil(items.length / rowsPerPage);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (currentPage === page) button.classList.add("active");

  button.addEventListener("click", () => {
    currentPage = page;
    displayList(items, listElement, rows, currentPage);

    let currntBtn = document.querySelector(".pagenumbers button.active");
    currntBtn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

displayList(list_items, listElement, rows, currentPage);

setupPagination(list_items, paginationElement, rows);
