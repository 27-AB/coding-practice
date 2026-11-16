import cv2

from PIL import Image
from util import get_limits


blue = [255, 0, 0]

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()

    if not ret:
        break

    hsvImage = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    limits = get_limits(color=blue)
    if limits is None:
        continue
    lowerLimit, upperLimit = limits

    mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)

    mask_ = Image.fromarray(mask)

    bbox = mask_.getbbox()

    if bbox is not None:
        x1, y1, x2, y2 = bbox

        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 5)

    print("Mask shape:", mask.shape)
    print("Detected pixels:", cv2.countNonZero(mask))

    cv2.imshow('frame', frame)
    #cv2.imshow('mask', mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()