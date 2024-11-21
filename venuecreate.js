let venueTagNames = JSON.parse(sessionStorage.getItem("tags")) || [];
let exploreContent = document.getElementById("exploreContent");

let activeTags = [];

let venueIp = "192.168.0.168"

document.addEventListener("DOMContentLoaded", function () {
  loadTags();
});

function loadTags() {
  for (let i = 0; i < venueTagNames.length; i++) {
    let tag = document.createElement("div");
    tag.classList.add("explore-tag");
    tag.textContent = venueTagNames[i];
    tag.setAttribute("onclick", `activeToggle(this, ${i})`);
    exploreContent.appendChild(tag);
  }
}

function activeToggle(element, index) {
  let current = document.getElementsByClassName("active");
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    if (current.length < 4) {
      element.classList.add("active");
    }
  }
  if (activeTags.includes(index)) {
    activeTags = activeTags.filter((tag) => tag !== index);
  } else if (activeTags.length < 4) {
    activeTags.push(index);
  }
}

function submitVenue() {
  let name = document.getElementById("venueName").value;
  let address = document.getElementById("venueAddress").value;
  let tags = activeTags;
  let customTag = document.getElementById("customTag").value;

  let newData = {
    name: name,
    address: address,
    tags: tags,
    openStatus: true,
    currentEvent: "- None",
    upcomingEvents: [],
  };

  // Send the new data to the backend to add it to the pending list
  fetch(`http://${venueIp}:3000/api/add-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Data has been submitted for approval.");
    })
    .catch((error) => console.error("Error:", error));
}
