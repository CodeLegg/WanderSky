
function navSearchBar () {
  // Select elements
const allLiElements = document.getElementsByTagName('li');
const expandSearchInput = document.getElementById("expand-search-box");
const closeSearchButton = document.getElementById("close-btn");

// Expand function
function expandSearch() {
  expandSearchInput.classList.add("search-box-expand");
  closeSearchButton.classList.remove("cancel-btn");

  // Check if the screen width is 1340 pixels or below
  if (window.innerWidth <= 1340) {
    const inputElement = expandSearchInput.querySelector('input');
    if (inputElement) {
      inputElement.classList.remove('hide-input');
    }
  }

  // Hide list items
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.add('hide');
  }
}

// Event listener for expanding search
expandSearchInput.addEventListener("click", function(event) {
  // Check if the click target is not the close button
  if (!event.target.closest('#close-btn')) {
    expandSearch();
  }
});

// Close function
function closeSearch() {
  expandSearchInput.classList.remove("search-box-expand");
  closeSearchButton.classList.add("cancel-btn");

  // Show list items
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.remove('hide');
  }

  // Hide input and clear its value
  const inputElement = expandSearchInput.querySelector('input');
  if (inputElement) {
    inputElement.classList.add('hide-input');
    inputElement.value = '';
  }
}

// Event listener for closing search
closeSearchButton.addEventListener("click", closeSearch);
}
navSearchBar();


   // JavaScript for toggling the mobile navbar dropdown
   document.addEventListener("DOMContentLoaded", function () {
    const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
    const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

    mobileToggleBtn.addEventListener("click", function () {
        mobileNavDropdown.classList.toggle("show");
        mobileToggleBtn.classList.toggle("cross");
    });
});












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