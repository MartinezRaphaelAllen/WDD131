const newParagraph = document.createElement("p");
const newImage = document.createElement("img");
const newDiv = document.createElement("div");
const newSection =document.createElement("Section");

newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

newImage.setAttribute("src", "https://picsum.photos/200");
document.body.appendChild(newImage);

newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>"
document.body.appendChild(newSection)