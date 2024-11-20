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
      upcomingEvents: [
        "- Monday Grooves",
        "- First Thursday",
      ],
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
      tags: [3, 5, 6],
      openStatus: true,
      currentEvent: "- Quiz Night",
      upcomingEvents: [
        "- Date Night",
        "- Rugby",
        "- Amelia's wine time",
      ],
      address: "17 Derry St, Cape Town",
    },
  ];

  sessionStorage.setItem("database", JSON.stringify(centralData));