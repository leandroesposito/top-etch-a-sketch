const gridContainer = document.querySelector(".grid-container");
const gridSection = document.querySelector(".grid-section");
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
    //ADD EVENT LISTENER

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
    document.documentElement.style.setProperty("--tile-width-percentage", `${(100 / numColumns) - 1}%`);
}


generateGrid(20);

