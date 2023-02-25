export default function menuPage(){

    const content = document.querySelector(".content");
    content.innerHTML = "";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");

    p1.textContent = "Sahanda Yumurta"
    p2.textContent = "25 TL"
    p3.textContent = "Kahve"
    p4.textContent = "15 TL"
    p5.textContent = "Domates"
    p6.textContent = "10 TL"

    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);
    content.appendChild(p5);
    content.appendChild(p6);

}