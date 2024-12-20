let contentElement = document.getElementById("content");
let fullScreenElement = document.getElementById("fullScreen");

let venueIndex = JSON.parse(sessionStorage.getItem("venueToLoad"));

let tags = sessionStorage.getItem("tags") || [];

let database = JSON.parse(sessionStorage.getItem("database")) || [];

let venueData = database;

document.addEventListener("DOMContentLoaded", function () {
  populateProfile();
});

function populateProfile() {
  let currentVenue = venueData[venueIndex];

  let venueImageSrc = currentVenue.img;
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  let imageElement = document.createElement("img");
  imageElement.src = venueImageSrc;
  imageElement.classList.add("card-image");

  let venueHead = document.createElement("div");
  venueHead.classList.add("card-head");

  let venueName = currentVenue.name;
  let nameElement = document.createElement("div");
  nameElement.classList.add("card-name");
  nameElement.textContent = venueName;

  let venueOpenStatus = currentVenue.openStatus ? "[OPEN]" : "[CLOSED]";
  let openStatusElement = document.createElement("div");
  openStatusElement.classList.add("card-open-status");
  openStatusElement.textContent = venueOpenStatus;

  let addressElement = document.createElement("div");
  addressElement.classList.add("card-address");
  let venueIcon = document.createElement("i");
  venueIcon.classList.add("bi", "bi-geo-alt-fill");
  let addressText = document.createElement("div");
  addressText.textContent = currentVenue.address;

  let eventContainer = document.createElement("div");
  eventContainer.classList.add("event-container");
  let eventHead = document.createElement("div");
  eventHead.textContent = " CURRENT EVENT:";
  eventHead.classList.add("profile-event-head");
  let currentEvent = document.createElement("div");
  currentEvent.classList.add("current-event");
  currentEvent.textContent = currentVenue.currentEvent;
  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  let showMoreIcon = document.createElement("i");
  showMoreIcon.classList.add("bi", "bi-caret-down-fill");
  showMoreIcon.setAttribute("onclick", "toggleUpcomingEvents()");
  iconContainer.appendChild(showMoreIcon);
  let upcomingEventsContainer = document.createElement("div");
  let upcomingEventsHead = document.createElement("div");
  upcomingEventsHead.textContent = "UPCOMING:";
  upcomingEventsHead.classList.add("profile-event-head");
  upcomingEventsContainer.appendChild(upcomingEventsHead);
  upcomingEventsContainer.classList.add("upcoming-event-container");
  for (let i = 0; i < currentVenue.upcomingEvents.length; i++) {
    let upcomingEvent = document.createElement("div");
    upcomingEvent.classList.add("upcoming-event");
    upcomingEvent.textContent = currentVenue.upcomingEvents[i];
    let addToCalendarElement = document.createElement("div");
    addToCalendarElement.classList.add("add-to-calendar");
    let addToCalendarIcon = document.createElement("i");
    addToCalendarIcon.classList.add("bi", "bi-calendar-plus");
    addToCalendarElement.appendChild(addToCalendarIcon);
    upcomingEventsContainer.appendChild(upcomingEvent);
    upcomingEvent.appendChild(addToCalendarElement);
  }

  contentElement.appendChild(imageContainer);
  imageContainer.appendChild(imageElement);
  contentElement.appendChild(venueHead);
  venueHead.appendChild(nameElement);
  venueHead.appendChild(openStatusElement);
  contentElement.appendChild(addressElement);
  addressElement.appendChild(venueIcon);
  addressElement.appendChild(addressText);
  contentElement.appendChild(eventContainer);
  eventContainer.appendChild(eventHead);
  eventContainer.appendChild(currentEvent);
  eventContainer.appendChild(upcomingEventsContainer);
  eventContainer.appendChild(iconContainer);
}

function toggleUpcomingEvents() {
  let upcomingEventsContainer = document.querySelector(
    ".upcoming-event-container"
  );
  let showMoreIcon = document.querySelector(".bi-caret-down-fill");
  if (upcomingEventsContainer.classList.contains("expanded")) {
    // Collapse
    upcomingEventsContainer.classList.remove("expanded");
    upcomingEventsContainer.style.maxHeight = "0";
  } else {
    // Expand
    upcomingEventsContainer.classList.add("expanded");
    upcomingEventsContainer.style.maxHeight = `${upcomingEventsContainer.scrollHeight}px`;
  }
  showMoreIcon.classList.toggle("rotate-up");
}
