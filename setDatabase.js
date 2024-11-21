let centralData;
let tags;

fetch("http://localhost:3000/api/data")
  .then((response) => response.json())
  .then((data) => {
    centralData = data;
    sessionStorage.setItem("database", JSON.stringify(centralData));

    // Now fetch tags after centralData is set
    return fetch("http://localhost:3000/api/tags");
  })
  .then((response) => response.json())
  .then((data) => {
    tags = data;
    sessionStorage.setItem("tags", JSON.stringify(tags));
  })
  .catch((error) => console.error("Error fetching data:", error));