/* ------------- GLOBAL VARIABLES --------------  */
// Menu mobile dropdown, his default "top" value and invisible background if menu is opened
const menuMobileDropdown = document.getElementById("menu-mobile-dropdown-container");
const menuMobileDropdownTopDefaultValue = getComputedStyle(menuMobileDropdown).top;
const menuMobileDropdownBackground = document.getElementById("menu-dropdown-invisible-background");

// Submenu mobile container, triangle of submenu button and
const submenuMobileContainer = document.getElementsByClassName("submenu-mobile-container");
const triangleMobileImg = document.getElementsByClassName("triangle-mobile");

// Search bar results
const searchBarResults = document.getElementById("search-bar-results");

// All tool names and links to them on the page
const toolNamesAndLinksContainer = document.getElementsByClassName("subelement");
const toolNamesAndLinks = {};
for (let i = 0; i < toolNamesAndLinksContainer.length; i++) {
  const toolName = toolNamesAndLinksContainer[i].textContent;
  const toolLink = toolNamesAndLinksContainer[i].parentNode.href;
  toolNamesAndLinks[toolName] = toolLink;
}

// Index of which submenu is currently open (NaN if none is open)
let whichSubmenuIsOpen = NaN;

/* ----------------- FUNCTIONS -----------------  */
/* Function that hides the mobile menu dropdown */
function menuMobileDropdownHide() {
  menuMobileDropdown.style.transition = "0.12s";
  menuMobileDropdown.style.visibility = "hidden";
  menuMobileDropdown.style.opacity = 0;
  menuMobileDropdown.style.top = menuMobileDropdownTopDefaultValue;
  Array.from(submenuMobileContainer).forEach((submenu) => {
    submenu.style.display = "none";
  });
  menuMobileDropdownBackground.style.display = "none";
}

/* Function that shows the mobile menu dropdown */
function menuMobileDropdownShow() {
  menuMobileDropdown.style.transition = "visibility 0s, opacity 0.3s, top 0.3s ease";
  menuMobileDropdown.style.visibility = "visible";
  menuMobileDropdown.style.opacity = 0.95;
  menuMobileDropdown.style.top = "56px";
  Array.from(submenuMobileContainer).forEach((submenu) => {
    submenu.style.display = "block";
  });
  menuMobileDropdownBackground.style.display = "block";
}

/* Function that closes current opened mobile submenu if box with triangle was clicked */
function closeCurrentSubmenu(currentSubmenu) {
  if (!isNaN(currentSubmenu)) {
    submenuMobileContainer[currentSubmenu].style.visibility = "hidden";
    submenuMobileContainer[currentSubmenu].style.height = 0;
    triangleMobileImg[currentSubmenu].style.transform = "rotate(0deg)";
    whichSubmenuIsOpen = NaN;
  }
}

/* Function that closes previous opened mobile submenu if new submenu is opened */
function closePreviousSubmenu(previousSubmenu) {
  if (!isNaN(previousSubmenu)) {
    submenuMobileContainer[previousSubmenu].style.visibility = "hidden";
    submenuMobileContainer[previousSubmenu].style.height = 0;
    triangleMobileImg[previousSubmenu].style.transform = "rotate(0deg)";
    whichSubmenuIsOpen = NaN;
  }
}

/* Function that shows/opens selected mobile submenu */
function openSubmenu(selectedSubmenu) {
  submenuMobileContainer[selectedSubmenu].style.visibility = "visible";
  submenuMobileContainer[selectedSubmenu].style.height = "auto";
  triangleMobileImg[selectedSubmenu].style.transform = "rotate(180deg)";
  whichSubmenuIsOpen = selectedSubmenu;
}

/* Function displays matching tool names of the entered text */
function searchForMatchingTools() {
  const enteredText = searchBarInput.value.toLowerCase();
  const matchingNames = Object.keys(toolNamesAndLinks).filter((item) =>
    item.toLowerCase().includes(enteredText)
  );
  // Clear results
  searchBarResults.innerHTML = "";
  // Adding the results to the results container (links and tool names)
  matchingNames.forEach((match) => {
    const resultElement = `<div><a href="${toolNamesAndLinks[match]}">${match}</a></div>`;
    searchBarResults.insertAdjacentHTML("beforeend", resultElement);
  });
}

/* ------------------ BUTTONS ------------------  */
/* Menu mobile dropdown button - click on the mobile menu navbar button open or close menu (and close submenu if opened)  */
const menuMobileDropdownButton = document.getElementById("menu-mobile-btn");
menuMobileDropdownButton.addEventListener("click", () => {
  if (getComputedStyle(menuMobileDropdown).visibility === "hidden") menuMobileDropdownShow();
  else menuMobileDropdownHide();
});

/* Hide mobile menu navbar (links) - click on the mobile menu navbar links to hide mobile menu navbar */
const menuMobileLinks = document.getElementsByClassName("menu-mobile-link");
for (let i = 0; i < menuMobileLinks.length; i++) {
  const menuMobileLink = menuMobileLinks[i];
  menuMobileLink.addEventListener("click", () => {
    closeCurrentSubmenu(whichSubmenuIsOpen);
    menuMobileDropdownHide();
  });
}

/* Hide mobile menu navbar (background) - click on invisible background to hide mobile menu navbar */
document
  .getElementById("menu-dropdown-invisible-background")
  .addEventListener("click", menuMobileDropdownHide);

/* Open mobile submenu - click on the box with triangle in mobile dropdown menu to expand the submenu */
const triangleMobileContainer = Array.from(document.getElementsByClassName("submenu-mobile-btn"));
triangleMobileContainer.forEach((triangle, whichSubmenuClicked) => {
  triangle.addEventListener("click", () => {
    // Hides/shows a submenu depending on which triangle was clicked
    switch (whichSubmenuClicked) {
      // 0 is for Unit Coverters - hide/show submenu
      case 0:
        if (whichSubmenuIsOpen === whichSubmenuClicked) {
          closeCurrentSubmenu(whichSubmenuClicked);
        } else {
          closePreviousSubmenu(whichSubmenuIsOpen);
          openSubmenu(whichSubmenuClicked);
        }
        break;
      // 1 is for Online calcualtors - hide/show submenu
      case 1:
        if (whichSubmenuIsOpen === whichSubmenuClicked) {
          closeCurrentSubmenu(whichSubmenuClicked);
        } else {
          closePreviousSubmenu(whichSubmenuIsOpen);
          openSubmenu(whichSubmenuClicked);
        }
        break;

      // 2 is for Text Content Tools - hide/show submenu
      case 2:
        if (whichSubmenuIsOpen === whichSubmenuClicked) {
          closeCurrentSubmenu(whichSubmenuClicked);
        } else {
          closePreviousSubmenu(whichSubmenuIsOpen);
          openSubmenu(whichSubmenuClicked);
        }
        break;

      // 3 is for Other Tools - hide/show submenu
      case 3:
        if (whichSubmenuIsOpen === whichSubmenuClicked) {
          closeCurrentSubmenu(whichSubmenuClicked);
        } else {
          closePreviousSubmenu(whichSubmenuIsOpen);
          openSubmenu(whichSubmenuClicked);
        }
        break;
    }
  });
});

/* Search bar button - open the link to the first tool found in the search bar results window */
const searchBarButton = document.getElementById("search-bar-btn");
searchBarButton.addEventListener("click", () => {
  if (searchBarResults.children.length >= 1) {
    const linkOfFirstToolInSearchBar = searchBarResults.children[0].children[0].href.toString();
    window.open(linkOfFirstToolInSearchBar);
  }
});

/* ------------- SEARCH BAR INPUT --------------  */
/* Responds to changes in search bar input */
const searchBarInput = document.getElementById("search-bar-input");
searchBarInput.addEventListener("input", () => {
  if (searchBarInput.value.length >= 2) searchForMatchingTools();
  else searchBarResults.innerHTML = "";
});
