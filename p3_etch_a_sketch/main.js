const main = document.querySelector(".input");
const stuff = document.querySelector(".area");

main.addEventListener("click", () => {
    const grid = prompt("How many cells do you want in your grid: ");
    const container = document.querySelector(".container");
    container.innerHTML = '';
    if(stuff.children.length>1)stuff.removeChild(stuff.children[1]);
    main.textContent = "Change Grid Size";
    const size = 920 / (parseInt(grid));
    for(let i=0; i<grid; i++){
        const row = document.createElement("div");
        row.classList.add(`row`);
        for(let j=0; j<grid; j++){
            const el = document.createElement("div");
            el.classList.add("element");
            el.textContent = '.';
            row.append(el);
        }
        container.append(row);
    }

    const element = document.querySelectorAll(".element");
    const b = document.createElement("div");
    b.className = "btn2";
    stuff.append(b);
    const btn = document.createElement("button");
    btn.textContent = "REFRESH";
    btn.style.height = "200px";
    btn.style.width = "400px";
    btn.setAttribute("style", "height: 150px; width: 400px; padding: 0; font-size: xxx-large; font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: 400px;")
    btn.addEventListener("click", () => {
        element.forEach((el) => {
            el.style.backgroundColor = "rgb(251, 233, 69)";
        })
    })
    b.appendChild(btn);

    element.forEach((el) => {
        el.style.height = `${size}px`;
        el.style.width = `${size}px`;
        el.style.alignContent = "center";
        el.style.textAlign = "center";
        el.style.padding = "0";
        el.addEventListener("mouseover", () => {
            el.style.backgroundColor = "red";
        })
        el.addEventListener("click", () => {
            el.style.backgroundColor = "rgb(251, 233, 69)";
        })
    })
})