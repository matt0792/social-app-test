let reviewList = document.getElementById("reviewList");

let pendingVenues = [];
let ip = "192.168.0.168"

// Fetch pending data from the backend
fetch(`http://${ip}:3000/api/pending-venues`)
  .then((response) => response.json())
  .then((data) => {
    pendingVenues = data;
    populateList();
  })
  .catch((error) => console.error("Error fetching pending data:", error));

function populateList() {
  reviewList.innerHTML = ""; // Clear the list first
  for (let i = 0; i < pendingVenues.length; i++) {
    let venue = pendingVenues[i];
    let venueElement = document.createElement("div");
    venueElement.classList.add("venue-list-item");
    venueElement.innerHTML = `
            <h3>${venue.name}</h3>
            <p>${venue.address}</p>
            <p>Tags: ${venue.tags.join(", ")}</p>
            <button class=(approve-button) onclick="approveVenue(${i})">Approve</button>
            <button class=(approve-button) onclick="denyVenue(${i})">Deny</button>
          `;
    reviewList.appendChild(venueElement);
  }
}

function approveVenue(index) {
  let venue = pendingVenues[index];

  // Send the approved data to the backend
  fetch(`http://${ip}:3000/api/approve-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(venue),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Venue has been approved and added to the database.");
      // Remove the approved venue from the pending list
      pendingVenues.splice(index, 1);
      reviewList.innerHTML = "";
      populateList();
    })
    .catch((error) => console.error("Error:", error));
}

function denyVenue(index) {
  let venue = pendingVenues[index];

  // Send the denied data to the backend
  fetch(`http://${ip}:3000/api/deny-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(venue),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Venue has been denied and removed from the pending list.");
      // Remove the denied venue from the pending list
      pendingVenues.splice(index, 1);
      reviewList.innerHTML = "";
      populateList();
    })
    .catch((error) => console.error("Error:", error));
}