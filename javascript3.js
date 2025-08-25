<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive SVG Drawing Tool with Mouse Event Handlers</title>
  <style>
    #drawingArea {
      border: 2px solid black;
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>

  <h2>SVG Drawing Tool</h2>
  <svg id="drawingArea" width="600" height="400"></svg>

  <script>
    const svg = document.getElementById("drawingArea");
    let isDrawing = false;
    let currentPath = null;

    svg.addEventListener("mousedown", (e) => {
      isDrawing = true;
      const point = getMousePosition(e);
      currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      currentPath.setAttribute("fill", "none");
      currentPath.setAttribute("stroke", "blue");
      currentPath.setAttribute("stroke-width", 2);
      currentPath.setAttribute("d", `M ${point.x} ${point.y}`);
      svg.appendChild(currentPath);
    });

    svg.addEventListener("mousemove", (e) => {
      if (!isDrawing) return;
      const point = getMousePosition(e);
      let d = currentPath.getAttribute("d");
      d += ` L ${point.x} ${point.y}`;
      currentPath.setAttribute("d", d);
    });

    svg.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    svg.addEventListener("mouseleave", () => {
      isDrawing = false;
    });

    function getMousePosition(evt) {
      const CTM = svg.getScreenCTM();
      return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
    }
  </script>

</body>
</html>
