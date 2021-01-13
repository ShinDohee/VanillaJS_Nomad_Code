// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const target = document.querySelector("h2");
const superEventHandler = {
    handleMouseOver: function(event) {
        target.style.color = colors[0];
        target.innerHTML = "The mouse is here!";
    },
    handleMouseLeave: function(event) {
        target.style.color = colors[1];
        target.innerHTML = "The mouse is gone!";
    },
    handleMouseClick: function(event) {
        target.style.color = colors[3];
        target.innerHTML = "that was a right click!";
    },
    handleMouseResize: function(event) {
        target.style.color = colors[4];
        target.innerHTML = "you just resized!";
    }
};

target.addEventListener("mouseover", superEventHandler.handleMouseOver);
target.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("click", superEventHandler.handleMouseClick);
window.addEventListener("resize", superEventHandler.handleMouseResize);