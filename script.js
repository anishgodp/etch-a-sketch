// Create a webpage with a 16x16 grid of square divs using javascript.
// It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
// Use Flexbox to make the divs appear as a grid (versus just one on each line).
// Be careful with borders and margins, as they can adjust the size of the squares!

function createGrid(size = 16) {
	// Clear existing grid
	const container = document.querySelector(".container");
	container.innerHTML = "";

	// Calculate new square size
	const squareSize = 960 / size; // 960px is container width and height

	// Create size x size grid
	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div");
		square.classList.add("grid-square");
		// Set dynamic size for squares
		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;
		square.style.flexBasis = `${squareSize}px`;

		// Add mouseover event listener to each square
		square.addEventListener("mouseover", function (e) {
			// Add colored class to create permanent trail
			square.classList.add("colored");
		});

		container.appendChild(square);
	}
}

function changeSize() {
	let newSize = prompt("Enter the number of squares per side (max 100):");

	// Convert to number and validate input
	if (newSize === null || isNaN(newSize)) {
		alert("Please enter a valid number!");
		return;
	}
	if (newSize > 100) {
		alert("Maximum size is 100!");
		return;
	}
	if (newSize < 1) {
		alert("Size must be at least 1!");
		return;
	}

	createGrid(newSize);
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	createGrid();
});
