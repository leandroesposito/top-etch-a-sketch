const gridContainer = document.querySelector(".grid-container");
const gridSection = document.querySelector(".grid-section");
const newGridBtn = document.querySelector(".new-grid");

function generateGrid(numColumns) {
    const totalTiles = numColumns * numColumns;
    const tilesFragment = generateTilesFragment(totalTiles);

    setSquareElementSize(gridContainer, getMinDimensionElement(gridSection));
    setTileWidthCssProperty(numColumns);
    replaceElementContent(gridContainer, tilesFragment)
}

function generateTilesFragment(numTiles) {
    const fragment = new DocumentFragment();
    for (let i = 0; i < numTiles; i++) {
        const tileElement = generateTileElement();
        fragment.appendChild(tileElement);
    }

    return fragment;
}

function generateTileElement() {
    const tileElement = document.createElement("div");
    tileElement.classList.add("tile");
    tileElement.style.opacity = "0";
    tileElement.style.backgroundColor = "black";
    return tileElement;
}

function replaceElementContent(element, newContent) {
    element.innerHTML = "";
    element.appendChild(newContent);
}

function setSquareElementSize(element, width) {
    element.style.width = width + "px";
    element.style.height = width + "px";
}

function getMinDimensionElement(element) {
    let height = element.clientHeight;
    let width = element.clientWidth;

    return Math.min(height, width);
}

function setTileWidthCssProperty(numColumns) {
    document.documentElement.style.setProperty("--tile-width-percentage", `${(100 / numColumns)}%`);
}

newGridBtn.addEventListener("click", () => {
    let newGridNumColums = null;
    do {
        newGridNumColums = +prompt("Insert new number of columns for the square grid", 10);

    } while (!Number.isInteger(newGridNumColums));

    generateGrid(newGridNumColums);
});

gridContainer.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (!target.classList.contains("tile")) {
        return;
    }
    increaseElementOpacity(target, 0.1);
    randomizeElementColor(target)
});

function increaseElementOpacity(element, amount) {
    let opacity = Number.parseFloat(element.style.opacity);
    opacity += amount;
    element.style.opacity = opacity;
}

function randomizeElementColor(element) {
    element.style.backgroundColor = getRandomHslColor();
}

function getRandomHslColor() {
    let hue = getRandomNumber(360);

    return `hsl(${hue}, 100%, 50%)`;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

generateGrid(20);