let noOfVisitors = document.querySelector(".num"); //getting element containing no of vivitors value
let interval = 5000;
let startVal = 0;
let endVal = parseInt(noOfVisitors.getAttribute("data-val")); //getting the attribute value to which the counting must happen
let duration = interval / endVal;
let counter = setInterval(() => {
    startVal += 1;
    noOfVisitors.textContent = startVal;
    if (startVal == endVal) {
        clearInterval(counter);
        noOfVisitors.style.color = "black";
    }
}, duration);