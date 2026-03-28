

 const detect = async (videoRef, setEmotion, faceLandmarker,get_allsong,getmoodysong,songs) => {
  const video = videoRef;



  if (!video || !faceLandmarker) return;

  let emotions = [];

  const startTime = Date.now();
  const detectionDuration = 1200; // 3 seconds

  const detectLoop = () => {
    const result = faceLandmarker.detectForVideo(video, Date.now());

    if (result.faceBlendshapes.length > 0) {
      const shapes = result.faceBlendshapes[0].categories;

      const smile =
        shapes.find((s) => s.categoryName === "mouthSmileLeft")?.score || 0;

      const mouthOpen =
        shapes.find((s) => s.categoryName === "jawOpen")?.score || 0;

      const browRaise =
        shapes.find((s) => s.categoryName === "browInnerUp")?.score || 0;

      let detectedEmotion = "Unknown";

      if (smile > 0.4) {
        detectedEmotion = "happy";
      } else if (mouthOpen > 0.4 && browRaise > 0.4) {
        detectedEmotion = "surprise";
      } else if (browRaise < 0.2 && smile < 0.2) {
        detectedEmotion = "sad";
      } else {
        detectedEmotion = "neutral";
      }

      emotions.push(detectedEmotion);
    }

    if (Date.now() - startTime < detectionDuration) {
      requestAnimationFrame(detectLoop);
    } else {
      // stop detection and choose most frequent emotion
      const counts = {};
      emotions.forEach((e) => {
        counts[e] = (counts[e] || 0) + 1;
      });

      const finalEmotion = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      get_allsong()

      setEmotion(finalEmotion);
      console.log(setEmotion)
       getmoodysong(finalEmotion,songs);

    }
  };

  detectLoop();
};

export default detect;