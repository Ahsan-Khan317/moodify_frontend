  
  import {
  FaceLandmarker,
  FilesetResolver
} from "@mediapipe/tasks-vision";

  
  const loadModel = async (faceLandmarker) => {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );

    faceLandmarker.current = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
        },
        runningMode: "VIDEO",
        outputFaceBlendshapes: true
      }
    );

    
  };
export default loadModel