export default function homePage(){

    const content = document.querySelector(".content");

    content.innerHTML = ""

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.textContent = "Dünyanın en iyi restorantına hoş geldiniz."
    p2.textContent = "Burada Müşterilerimize harikulade şekilde hizmet vererek çeşitli zevkler sunuyoruz."
    p3.textContent = "Dünyanın hiçbir yerinde bulamayacağınz sahanda yumurta,Muğla yöresinden gelen domates,taze çekilmiş kahve ve daha nicesi."

    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
}