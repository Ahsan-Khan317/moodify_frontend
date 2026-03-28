const setupCamera = async (videoRef) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user"
      }
    });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
    }
  } catch (error) {
    console.error("Camera error:", error);
  }
};

export default setupCamera;