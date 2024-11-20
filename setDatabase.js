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

const tags = [
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

sessionStorage.setItem("database", JSON.stringify(centralData));
sessionStorage.setItem("tags", JSON.stringify(tags));
