async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    const video = document.getElementById("camera-feed");
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
}

function stopCamera() {
  const video = document.getElementById("camera-feed");
  const stream = video.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach((track) => track.stop());
  video.srcObject = null;
}

async function captureImage() {
  // Access the camera feed
  await startCamera();

  // Wait for a brief moment to allow the camera to start
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Capture a frame from the camera feed
  const video = document.getElementById("camera-feed");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Stop the camera stream
  stopCamera();

  // Decode the QR code from the captured frame
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height);

  if (code) {
    // QR code successfully decoded
    const qrCodeData = code.data;

    // Display the decoded QR code data on the page
    const qrCodeResultElement = document.getElementById("qr-code-result");
    qrCodeResultElement.innerHTML = "QR Code Data: " + qrCodeData;

    // Simulate sending a request to the backend for check-in
    // In a real-world scenario, this would be an AJAX request to your backend API
    console.log("Member Checked In - QR Code Data: " + qrCodeData);

    // Optionally, you can provide feedback to the user (e.g., display a success message)
  } else {
    // No QR code found in the captured frame
    console.log("No QR code found. Please try again.");
  }
}
