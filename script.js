const gridContainer = document.querySelector(".grid-container");
const gridSection = document.querySelector(".grid-section");

gridSectionHeigth = gridSection.clientHeight;
gridSectionWidth = gridSection.clientWidth;
gridSectionSize = Math.min(gridSectionHeigth, gridSectionWidth);

gridContainer.style.width = gridSectionSize + "px";
gridContainer.style.height = gridSectionSize + "px";

document.documentElement.style.setProperty("--tile-width-percentage", `${45}%`);