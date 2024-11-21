let searchTagNames = JSON.parse(sessionStorage.getItem("tags")) || [];

let database = JSON.parse(sessionStorage.getItem("database")) || [];
let venueData = database;
let exploreContent = document.getElementById("exploreContent");
let contentElement = document.getElementById("content");
let endScroll = document.getElementById("endScroll");

document.addEventListener("DOMContentLoaded", function () {
    loadTags();
});

function loadTags() {
    for (let i = 0; i < searchTagNames.length; i++) {
        let tag = document.createElement("div");
        tag.classList.add("explore-tag");
        tag.textContent = searchTagNames[i];
        tag.setAttribute("onclick", `filterTags(${i}); activeToggle(this)`);
        exploreContent.appendChild(tag);
    }
}

function filterTags(index) {
    let filteredData = venueData.filter((venue) => venue.tags.includes(index));
    loadCards(filteredData);
}

function activeToggle(element) {
    let current = document.getElementsByClassName("active");
    for (let i = 0; i < current.length; i++) {
        current[i].classList.remove("active");
    }
    element.classList.add("active");
}

function loadCards(cards) {
    contentElement.classList.add("fade-in-fast");
    contentElement.innerHTML = "";
    endScroll.classList.remove("hidden");
    for (let i = 0; i < cards.length; i++) {
      let currentVenue = cards[i];
  
      let cardElement = document.createElement("div");
      cardElement.classList.add("home-card");
      cardElement.setAttribute("onclick", `openVenueProfile(${i})`)
  
      let venueImageSrc = currentVenue.img;
      let imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      let imageElement = document.createElement("img");
      imageElement.src = venueImageSrc;
      imageElement.classList.add("card-image")
  
      let venueHead = document.createElement("div");
      venueHead.classList.add("card-head")
  
      let venueName = currentVenue.name;
      let nameElement = document.createElement("div");
      nameElement.classList.add("card-name");
      nameElement.textContent = venueName;
  
      let venueOpenStatus = currentVenue.openStatus ? "[OPEN]" : "[CLOSED]";
      let openStatusElement = document.createElement("div");
      openStatusElement.classList.add("card-open-status")
      openStatusElement.textContent = venueOpenStatus;
  
      let eventContainer = document.createElement("div");
      eventContainer.classList.add("event-container");
      let eventHead = document.createElement("div");
      eventHead.textContent = "EVENTS:"
      eventHead.classList.add("event-head");
      let eventContent = document.createElement("div");
      eventContent.classList.add("event-content");
      eventContent.textContent = currentVenue.currentEvent;
  
  
      let tagContainer = document.createElement("div");
      tagContainer.classList.add("tag-container");
  
      // Append all elements
      contentElement.appendChild(cardElement);
      cardElement.appendChild(imageContainer);
      imageContainer.appendChild(imageElement);
      cardElement.appendChild(venueHead);
      venueHead.appendChild(nameElement);
      venueHead.appendChild(openStatusElement);
      cardElement.appendChild(eventContainer);
      eventContainer.appendChild(eventHead);
      eventContainer.appendChild(eventContent);
      cardElement.appendChild(tagContainer);
      for (let x = 0; x < currentVenue.tags.length; x++) {
        let tagElement = document.createElement("div");
        tagElement.classList.add("tag");
        tagElement.textContent = searchTagNames[currentVenue.tags[x]];
        tagContainer.appendChild(tagElement);
      }
    }
    setTimeout(() => {
        contentElement.classList.remove("fade-in-fast");
      }, 500);
  }