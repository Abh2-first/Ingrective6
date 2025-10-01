async function analyzeImage() {
  const fileInput = document.getElementById("fileInput");
  const resultBox = document.getElementById("ocrResult");

  if (!fileInput.files.length) {
    resultBox.textContent = "⚠️ Please upload an image first.";
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  resultBox.textContent = "⏳ Analyzing...";

  try {
    const response = await fetch(
      "https://huggingface.co/spaces/Tigerabhay/Ingrective5/api/predict",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    resultBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultBox.textContent = "❌ Error: " + err.message;
  }
}
