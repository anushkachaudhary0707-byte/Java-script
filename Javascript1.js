<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Character Counter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      border: 2px solid #000;
      padding: 15px;
      margin-bottom: 20px;
      width: 400px;
    }
    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      font-size: 16px;
      resize: none;
    }
    p {
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div class="container">
    <h3>Live Character Counter</h3>
    <textarea id="textInput" placeholder="Start typing..."></textarea>
    <p>Characters: <span id="charCount">0</span></p>
  </div>

  <script>
    const textarea = document.getElementById("textInput");
    const counter = document.getElementById("charCount");

    textarea.addEventListener("input", function() {
      counter.textContent = textarea.value.length;
    });
  </script>

</body>
</html>
