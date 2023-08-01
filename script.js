var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
    arrowIcon.classList.toggle("rotate");
    list.classList.toggle("hide");
}

for(option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
        }
    }