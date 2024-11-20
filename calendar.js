let userUpcomingEvents = [
    {
        name: "Modular Tuesday",
        date: "2021/10/12",
        time: "19:00",
        venue: "Modular",
    }, 
    {
        name: "First Thursday",
        date: "2021/10/07",
        time: "18:00",
        venue: "Village Idiot",
    }, 
    {
        name: "Monday Grooves",
        date: "2021/10/11",
        time: "18:00",
        venue: "Moveable Feast",
    }, 
    {
        name: "Wine and Dine",
        date: "2021/10/14",
        time: "19:00",
        venue: "Village Idiot",
    }, 
    {
        name: "Bad Sound but Loud",
        date: "2021/10/21",
        time: "20:00",
        venue: "Village Idiot",
    }
];

document.addEventListener("DOMContentLoaded", function () {
    populateCalendar();
});

function populateCalendar() {
    let calendarContainer = document.querySelector(".calendar-container");

    userUpcomingEvents.forEach((event) => {
        let eventBlock = document.createElement("div");
        eventBlock.classList.add("calendar-event-block");
        let eventElement = document.createElement("div");
        eventElement.classList.add("calendar-event");


        let dateContainer = document.createElement("div");
        dateContainer.classList.add("calendar-event-date-container");
        let dateIcon = document.createElement("i");
        dateIcon.classList.add("bi", "bi-calendar-event");
        let dateElement = document.createElement("div");
        dateElement.classList.add("calendar-event-date");
        dateElement.textContent = event.date;
        dateContainer.appendChild(dateIcon);
        dateContainer.appendChild(dateElement);

        let nameElement = document.createElement("div");
        nameElement.classList.add("calendar-event-name");
        nameElement.textContent = event.name;

        let venueContainer = document.createElement("div");
        venueContainer.classList.add("calendar-event-venue-container");
        let venueIcon = document.createElement("i");
        venueIcon.classList.add("bi", "bi-geo-alt-fill");
        let venueElement = document.createElement("div");
        venueElement.classList.add("calendar-event-venue");
        venueElement.textContent = event.venue;
        venueContainer.appendChild(venueIcon);
        venueContainer.appendChild(venueElement);


        let timeElement = document.createElement("div");
        timeElement.classList.add("calendar-event-time");
        timeElement.textContent = event.time;

        eventElement.appendChild(nameElement);
        eventElement.appendChild(venueContainer);
        eventElement.appendChild(dateContainer);
        eventElement.appendChild(timeElement);

        let eventCircleContainer = document.createElement("div");
        eventCircleContainer.classList.add("calendar-event-circle-container");
        let eventCircle = document.createElement("div");
        eventCircle.classList.add("calendar-event-circle");
        let eventCircleIcon = document.createElement("i");
        eventCircleIcon.classList.add("bi", "bi-chevron-double-right");
        eventCircle.appendChild(eventCircleIcon);
        eventCircleContainer.appendChild(eventCircle);

        let eventLine = document.createElement("div");
        eventLine.classList.add("calendar-event-line");
        eventLine.textContent = "|";

        eventBlock.appendChild(eventCircleContainer);
        eventBlock.appendChild(eventElement);
        calendarContainer.appendChild(eventBlock);
        if (event !== userUpcomingEvents[userUpcomingEvents.length - 1]) {
            calendarContainer.appendChild(eventLine);
        }
    });
};