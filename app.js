const apiURL = "http://localhost:8383/";
historyContainer = document.getElementById("history");

let dbContext = [];
let searchHistory = [];

fetch(apiURL, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      dbContext.push(element);
    });
  });

function SearchBar() {
  let searchText = document
    .getElementById("search")
    .value.charAt(0)
    .toUpperCase();
  const filteredProducts = document.getElementById("resultList");
  document.getElementById("searchBar").append(filteredProducts);

  if (searchText) {
    for (let i = 0; i < dbContext.length; i++) {
      const suggestion = document.createElement("a");
      suggestion.className = "suggestion";
      suggestion.textContent = dbContext[i].name;
      suggestion.href = dbContext[i].link;
      suggestion.target = "_blank";

      if (suggestion.textContent.startsWith(searchText)) {
        filteredProducts.appendChild(suggestion);
        searchHistory.push(dbContext[i]);
        localStorage.setItem("history", JSON.stringify(searchHistory));
        console.log(searchHistory);
      }
      if (!suggestion.textContent.startsWith(searchText)) {
        removeProductFromSearch(suggestion.textContent);
      }
      RemoveDoubledProducts();
    }
  } else {
    filteredProducts.innerHTML = "";
  }
}

function removeProductFromSearch(productName) {
  let allSuggestion = document.getElementsByClassName("suggestion");
  for (let i = 0; i < allSuggestion.length; i++) {
    if (allSuggestion[i].textContent === productName) {
      allSuggestion[i].remove();
    }
  }
}

function RemoveDoubledProducts() {
  let allSuggestion = document.getElementsByClassName("suggestion");
  for (let i = 0; i < allSuggestion.length; i++) {
    for (let x = 0; x < allSuggestion.length; x++) {
      if (
        allSuggestion[i].textContent === allSuggestion[x].textContent &&
        x !== i
      ) {
        allSuggestion[i].remove();
      }
    }
  }
}

function displayHistory() {
  let searchHistoryDisplay = JSON.parse(localStorage.getItem("history"));
  console.log(searchHistoryDisplay);
  searchHistoryDisplay.forEach((element) => {
    historyContainer.innerHTML += `
    <div class="history__result">
    <img class="history__img" src="img/googlio-logo1.ico" alt="" />
    <div class="history__title">${element.name}</div>
    <div class="history__url">${element.link}</div>
    <div class="history__icon">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </div>`;
  });
}
