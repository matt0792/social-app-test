let greetingElement = document.getElementById("greeting");
let contentElement = document.getElementById("content");

const tags = ["Techno", "Underground", "Sing - Along", "Bar", "Club"];
let homeData = [
  {
    name: "Modular",
    img: "./images/modular.png",
    tags: [0, 1, 4],
    openStatus: true,
    currentEvent: "- Binary Botany"
  },
  {
    name: "Moveable Feast",
    img: "./images/moveable.png",
    tags: [0, 2, 3, 4],
    openStatus: true,
    currentEvent: "- Badger Takeover"
  },
  {
    name: "Village Idiot",
    img: "./images/village.png",
    tags: [2, 3, 4],
    openStatus: true,
    currentEvent: "- ABBA Night"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  populateGreeting();
  loadCards();
});

function getDate() {
  const date = new Date();

  // Array for days of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array for months of the year
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get current day, month, and date
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  // Determine the suffix for the day
  const suffix = (n) => {
    if (n % 10 === 1 && n !== 11) return "st";
    if (n % 10 === 2 && n !== 12) return "nd";
    if (n % 10 === 3 && n !== 13) return "rd";
    return "th";
  };

  // Combine to form the final string
  return `${dayOfWeek}, ${month} ${dayOfMonth}${suffix(dayOfMonth)}`;
}

function populateGreeting() {
  let date = getDate();
  greetingElement.textContent = `Hi Ash. Today is ${date}`;
}

function loadCards() {
  for (let i = 0; i < homeData.length; i++) {
    let currentVenue = homeData[i];

    let cardElement = document.createElement("div");
    cardElement.classList.add("home-card");

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
      tagElement.textContent = tags[currentVenue.tags[x]];
      tagContainer.appendChild(tagElement);
    }
  }
}