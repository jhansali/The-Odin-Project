const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
content.appendChild(h3);

const div = document.createElement("div")
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);