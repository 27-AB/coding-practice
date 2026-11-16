import cv2
from pathlib import Path

img_path = Path(__file__).resolve().parent / 'data' / 'testImg.jpg'
img = cv2.imread(str(img_path))
if img is None:
    raise FileNotFoundError(f"Image not found: {img_path}")

face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 
    'haarcascade_frontalface_default.xml'
)

if face_cascade.empty():
    raise RuntimeError("Could not load OpenCV's face detection model")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors = 5,
    minSize = (30,30)
)

for x,y, width, height, in faces:
    face = img[y:y + height, x:x + width]
    img[y:y + height, x:x + width] = cv2.GaussianBlur(
        face, (0,0), sigmaX = 20
    )

    print(f"Detected {len(faces)} face(s)")
    cv2.imshow('Face anonymizer', img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()