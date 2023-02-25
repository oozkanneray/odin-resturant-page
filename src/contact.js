export default function contactPage(){

    const content = document.querySelector(".content");

    content.innerHTML = ""

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.textContent = "Telefon Numarası : 05061233108"
    p2.textContent = "Mail : deneme123@zart.com"

    content.appendChild(p1);
    content.appendChild(p2);


}