const emodiv = document.getElementById("emojiDiv");
const typed = document.getElementById("emojiName");
const searchBtn = document.getElementById("searchButton");
function showEmoji() {
  emojiList.forEach((e) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = e.emoji;
    td2.innerText = e.aliases;
    td3.innerText = e.description;

    row.append(td1, td2, td3);
    emodiv.append(row);
  });
}

function searchEmoji() {
  const currentTyped = document.getElementById("emojiName").value;
  if (currentTyped != "") filteredEmoji(currentTyped);
  else showEmoji();
}

function filteredEmoji(str) {
  const filtered = emojiList.filter((e) => {
    if (
      e.description.indexOf(str) != -1 ||
      e.aliases.some((e) => e.startsWith(str)) ||
      e.tags.some((e) => e.startsWith(str))
    ) {
      return true;
    }
  });
  emodiv.innerHTML = "";
  filtered.forEach((e) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = e.emoji;
    td2.innerText = e.aliases;
    td3.innerText = e.description;

    row.append(td1, td2, td3);
    emodiv.append(row);
  });
}

/*Emoji when Typed*/
typed.addEventListener("keyup", (e) => {
  searchEmoji();
});

/* Show All emoji at Start */
showEmoji();

/*when clicked on search Button, btw no use of this btn cause  event listner already added to key */

/* searchBtn.addEventListener("click", () => {
  searchEmoji();
}); */
