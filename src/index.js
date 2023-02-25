import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

const content = document.querySelector("#content")

//img container
const imgContainer = document.createElement("div")
imgContainer.classList.add("image-container");

content.appendChild(imgContainer)


//header img
const headerImg = document.createElement("img")
headerImg.setAttribute("id","header")
headerImg.setAttribute('src','icon.png');

imgContainer.appendChild(headerImg)


//buttons
const buttonContainer = document.createElement("div")
buttonContainer.classList.add("button-container");
content.appendChild(buttonContainer)


const homeBtn = document.createElement("button");
homeBtn.classList.add("contact");
homeBtn.innerHTML = "Home";


const menuBtn = document.createElement("button");
menuBtn.classList.add("menu")
menuBtn.innerHTML = "Menu";

const contactBtn = document.createElement("button");
contactBtn.classList.add("contact");
contactBtn.innerHTML = "Contact";


buttonContainer.appendChild(homeBtn)
buttonContainer.appendChild(menuBtn)
buttonContainer.appendChild(contactBtn);

const mainContent = document.createElement("div");
mainContent.classList.add("content");
content.appendChild(mainContent)

homePage();

homeBtn.onclick = homePage;
menuBtn.onclick = menuPage;
contactBtn.onclick = contactPage;

