//target the froms .\, button 

// const title=document.getElementById("eventTitle");
// const date=document.getElementById("eventDate");
// const category=document.getElementById("eventCategory");
// const description=document.getElementById("eventDescription");


// const clear=document.getElementById("clearAllBtn");
// const addSample=document.getElementById("addSampleBtn");

// let sampleEvent=[{
//     name :"KPratzz",
//     date:8/10/2026,
//     category:"Webinar",
//     description:"It is important webinar"
// },{
//     name:"Shiji",
//     date:24/2/26,
//     category:"conference",
//     description:"Very important conference"

// }]

const form = document.getElementById("eventForm");
const eventsList = document.getElementById("eventsList");
const clearBtn = document.getElementById("clearAllBtn");
const sampleBtn = document.getElementById("addSampleBtn");
const keysDiv = document.getElementById("keys");

function addEvent(title, date, category, desc) {
    const emptyMsg = document.getElementById("emptyMsg");
    if (emptyMsg) emptyMsg.remove();

    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p>📅 ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
        <button class="delete-btn">Delete</button>
    `;

    eventsList.appendChild(card);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addEvent(
        eventTitle.value,
        eventDate.value,
        eventCategory.value,
        eventDescription.value
    );

    form.reset();
});


sampleBtn.addEventListener("click", function () {
    addEvent(
        "Web Development Conference",
        "2026-02-15",
        "Conference",
        "Annual conference on modern web technologies."
    );

    addEvent(
        "JavaScript Workshop",
        "2026-02-20",
        "Workshop",
        "Hands-on JavaScript learning session."
    );
});


eventsList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();

        if (eventsList.children.length === 0) {
            eventsList.innerHTML = `<p id="emptyMsg">No events yet. Add your first event!</p>`;
        }
    }
});


clearBtn.addEventListener("click", function () {
    eventsList.innerHTML = `<p id="emptyMsg">No events yet. Add your first event!</p>`;
});

