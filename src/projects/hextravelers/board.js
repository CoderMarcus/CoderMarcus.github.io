const svgObject = document.getElementById("map");

// Wait for the SVG object to load
svgObject.addEventListener("load", () => {
  // Get the SVG document
  const svgDoc = svgObject.contentDocument;
  if (!svgDoc) {
    console.error("Error: unable to get SVG document");
    return;
  }

  // Select all the shapes in the SVG document
  const shapes = svgDoc.querySelectorAll(
    "circle, rect, ellipse, polygon, path"
  );
  if (shapes.length === 0) {
    console.error("Error: no shapes found in SVG document");
    return;
  }

  // Set a random color for each shape
  shapes.forEach((shape) => {
    const colors = ["green", "blue", "gray", "white"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    shape.setAttribute("fill", randomColor);
  });
});

// Handle case where SVG object fails to load
svgObject.addEventListener("error", () => {
  console.error("Error: failed to load SVG object");
});
