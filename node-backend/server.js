// Import express
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let centralData = [
  {
    name: "Modular",
    img: "./images/modular.png",
    tags: [0, 1, 4],
    openStatus: true,
    currentEvent: "- Binary Botany",
    upcomingEvents: [
      "- Modular Tuesday",
      "- First Thursday",
      "- Mark Valsecchi Takeover",
    ],
    address: "34 Riebeek Street, Cape Town",
  },
  {
    name: "Moveable Feast",
    img: "./images/moveable.png",
    tags: [0, 2, 3, 4],
    openStatus: true,
    currentEvent: "- Badger Takeover",
    upcomingEvents: ["- Monday Grooves", "- First Thursday"],
    address: "13 Kloof Nek Rd, Cape Town",
  },
  {
    name: "Village Idiot",
    img: "./images/village.png",
    tags: [2, 3, 4],
    openStatus: true,
    currentEvent: "- ABBA Night",
    upcomingEvents: [
      "- Wine and Dine",
      "- First Thursday",
      "- Bad Sound but Loud",
    ],
    address: "32 Loop St, Cape Town",
  },
  {
    name: "Carlyle's on Derry",
    img: "./images/carlyles.png",
    tags: [3, 5, 6, 8],
    openStatus: true,
    currentEvent: "- Quiz Night",
    upcomingEvents: ["- Date Night", "- Rugby", "- Amelia's wine time"],
    address: "17 Derry St, Cape Town",
  },
  {
    name: "The Athletic Club & Social",
    img: "./images/athletic.png",
    tags: [3, 7, 8],
    openStatus: false,
    currentEvent: "- None",
    upcomingEvents: ["- Gentleman's Night"],
    address: "35 Buitengracht St, Cape Town",
  },
];

let tags = [
  "Techno",
  "Underground",
  "Sing-Along",
  "Bar",
  "Club",
  "Restaurant",
  "Live Music",
  "Speakeasy",
  "Cocktails",
];

// API endpoint
app.get("/api/data", (req, res) => {
  res.json(centralData);
});

// API endpoint
app.get("/api/tags", (req, res) => {
  res.json(tags);
});

let pendingVenues = [];

// API endpoint to add data to the pending list
app.post("/api/add-data", express.json(), (req, res) => {
    const newData = req.body; // Get the data from the frontend
  
    // Add to pending list
    pendingVenues.push(newData); // Remove nesting here
  
    // Respond back with success
    res.status(200).json({ message: "Data added to pending list" });
  });

// API endpoint to fetch pending data (for moderation)
app.get("/api/pending-venues", (req, res) => {
  res.json(pendingVenues);
});

// API endpoint to approve a pending entry and move it to centralData
app.post("/api/approve-data", express.json(), (req, res) => {
  const approvedData = req.body; // This should be the data that the admin approves

  // Find the index of the pending item to approve
  const index = pendingVenues.findIndex(
    (item) =>
      item.name === approvedData.name && item.address === approvedData.address
  );

  if (index !== -1) {
    // Move the item to centralData
    centralData.push(pendingVenues[index]);

    // Remove the item from pendingData
    pendingVenues.splice(index, 1);

    res
      .status(200)
      .json({ message: "Data approved and added to central data" });
  } else {
    res.status(404).json({ error: "Pending data not found" });
  }
});

// API endpoint to deny a pending entry and remove it from pendingVenues
app.post("/api/deny-data", express.json(), (req, res) => {
    const deniedData = req.body; // This should be the data that the admin denies

    // Find the index of the pending item to deny
    const index = pendingVenues.findIndex(
        (item) =>
            item.name === deniedData.name && item.address === deniedData.address
    );

    if (index !== -1) {
        // Remove the item from pendingVenues
        pendingVenues.splice(index, 1);

        res.status(200).json({ message: "Data denied and removed from pending list" });
    } else {
        res.status(404).json({ error: "Pending data not found" });
    }
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log(`Server running`);
});
