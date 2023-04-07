let suchergebnisse = [
  { name: "digitec" },
  { name: "google" },
  { name: "googlio" },
  { name: "youtube" },
  { name: "twitter" },
  { name: "zalando" },
  { name: "kaggle" },
  { name: "twitch" },
  { name: "snpachat" },
  { name: "instagram" },
  { name: "spotify" },
  { name: "discord" },
];

function SearchBar() {
  const searchText = document.getElementById("search").value.toLowerCase();
  const filteredProducts = document.getElementById("resultList");
  document.getElementById("searchBar").append(filteredProducts);

  if (searchText) {
    for (let i = 0; i < suchergebnisse.length; i++) {
      const suggestion = document.createElement("a");
      suggestion.className = "suggestion";
      suggestion.textContent = suchergebnisse[i].name;

      if (suggestion.textContent.startsWith(searchText)) {
        filteredProducts.appendChild(suggestion);
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
