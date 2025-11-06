const aCharacter = {
    name: "Sniper Monkey",
    class: "Elite Ranger of the Monkey kingdom",
    image: "snipermonkey.jpg",
    level: 1,
    health: 100,
    Attack: function() {
        if (this.health > 0) {
            this.health -= 20;
            SetProperties(aCharacter);
        }
        else {
            alert("The character has died.")
        }
    },
    LevelUp: function() {
        this.level++;
        SetProperties(aCharacter);
    }
}

function SetProperties(character)
{
    const html = `<img src="${character.image}">
        <h2 class="name">${character.name}</h2>
        <div class="stats">
            <p><strong>Class</strong>: ${character.class}</p>
            <p><strong>Level</strong>: ${character.level}</p>
            <p><strong>Health</strong>: ${character.health}</p>
        </div>
        <button class="buttons" id="attack">Attack</button>
        <button class="buttons" id="levelUp">Level Up</button>`;
    document.querySelector(".card").innerHTML = html;
}

SetProperties(aCharacter);

document.querySelector(".card").addEventListener("click", (e) => {
    if (e.target.id === "attack") aCharacter.Attack();
    if (e.target.id === "levelUp") aCharacter.LevelUp();
});