import axios from "axios";
const head = document.getElementsByTagName("HEAD")[0];
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../src/css/index.css";
head.appendChild(link);
{
  /* <link href="../src/css/index.css" rel="stylesheet" /> */
}

// How to create an HTML Element with JS
const jokeToTell = document.createElement("h3");
const circleButton = document.createElement("button");

// How to append/display your html element to the body tag on the HTML document
document.body.appendChild(circleButton);
circleButton.className = "test-button";
circleButton.innerHTML = "click me";

// const getJoke = async () => {
//   const res = await axios.get(
//     "https://v2.jokeapi.dev/joke/Programming?type=twopart"
//   );
//   console.log(res.data);

//   jokeToTell.innerHTML = res.data.setup;
//   document.body.appendChild(jokeToTell);
//   jokeToTell.className = "joke-to-tell";
// };

//convert this function get a getJoke function that renders the set up and the delivery on the screen

const getSetup = async () => {
  let res = await axios.get(
    "https://v2.jokeapi.dev/joke/Programming?type=twopart"
  );
  console.log(res.data);
  jokeToTell.innerHTML = res.data.setup;
  document.body.appendChild(jokeToTell);

  // This function is where you would style the delivery to be
  //  hidden when the page loads = Set Opacity to 0
};

getSetup();

// Make the page look presentable.
// Style the background
// center the text/buttons
// add a card with borders and more styles

//create a function that toggles the visibility of the delivery when clicked.

const showDelivery = () => {
  // set opacity of delivery to 100
};

circleButton.addEventListener("click", showDelivery);
