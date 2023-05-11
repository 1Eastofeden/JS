var bodyDOM = document.querySelector("#body");
var headerbuttonDOM = document.querySelector("#headerbutton");
var isDark = true;

headerbuttonDOM.addEventListener("mouseenter", function() {
  if (isDark) {
    headerbuttonDOM.innerHTML = "🌚";
    headerbuttonDOM.style.background = "#292929";
    headerbuttonDOM.style.borderColor = "#292929";
    bodyDOM.style.background = "#292929";
  } else {
    headerbuttonDOM.innerHTML = "🌞";
    headerbuttonDOM.style.background = "white";
    headerbuttonDOM.style.borderColor = "white";
    bodyDOM.style.background = "white";
  }
});

headerbuttonDOM.addEventListener("mouseleave", function() {
  if (isDark) {
    headerbuttonDOM.innerHTML = "🌚";
    headerbuttonDOM.style.background = "#292929";
    headerbuttonDOM.style.borderColor = "#292929";
    bodyDOM.style.background = "#292929";
  } else {
    headerbuttonDOM.innerHTML = "🌞";
    headerbuttonDOM.style.background = "white";
    headerbuttonDOM.style.borderColor = "white";
    bodyDOM.style.background = "white";
  }
});

headerbuttonDOM.addEventListener("mouseleave", function() {
  isDark = !isDark;
});

var headerparagraphDOM = document.querySelector("#headerparagraph")

headerbuttonDOM.addEventListener("mouseenter", function () {
    if (isDark) {
        headerparagraphDOM.style.color = "white"
    } else {
        headerparagraphDOM.style.color = "rgb(63, 63, 63)"
    }
}) 

var sectionparagraphDOM = document.querySelector("#sectionparagraph")

headerbuttonDOM.addEventListener("mouseenter", function() {
    if (isDark) {
        sectionparagraphDOM.style.color = "white"
    }  else {
        sectionparagraphDOM.style.color = "rgb(63, 63, 63)"
    }
})