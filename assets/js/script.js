// const allLiElements = document.getElementsByTagName('li');
// const expandSearchInput = document.getElementById("expand-search-box");
// const closeSearchButton = document.getElementById("close-btn");


// function Expand() {
//   expandSearchInput.classList.add("search-box-expand");
//   allLiElements.classList.add('hide')  
//   closeSearchButton.classList.remove("cancel-btn");

// }

// expandSearchInput.addEventListener("click", Expand);

// function Close() {
//   expandSearchInput.classList.remove("search-box-expand");
//   closeSearchButton.classList.add("cancel-btn");
// }

// expandSearchInput.removeEventListener("click", Close);


const allLiElements = document.getElementsByTagName('li');
const expandSearchInput = document.getElementById("expand-search-box");
const closeSearchButton = document.getElementById("close-btn");

function Expand() {
  expandSearchInput.classList.add("search-box-expand");
  closeSearchButton.classList.remove("cancel-btn");
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.add('hide');
  }
}

expandSearchInput.addEventListener("click", function(event) {
  // Check if the click target is the close button
  if (!event.target.closest('#close-btn')) {
    Expand();
  }
});

function Close() {
  expandSearchInput.classList.remove("search-box-expand");
  closeSearchButton.classList.add("cancel-btn");
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.remove('hide');
  }

  const inputElement = expandSearchInput.querySelector('input');
  if (inputElement) {
    inputElement.value = ''; // Clear the input value
  }
}

closeSearchButton.addEventListener("click", Close);
