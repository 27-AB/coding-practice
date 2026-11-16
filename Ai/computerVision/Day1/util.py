import cv2
import numpy as np

def get_limits(color):

    if np.all(np.array(color) == [255,255,255]):
        lowerLimit = np.array([0,0,180], dtype=np.uint8)

        upperLimit = np.array([179, 70, 255], dtype=np.uint8)

    else:
        c = np.array([[color]], dtype=np.uint8)

        hsvC = cv2.cvtColor(c, cv2.COLOR_BGR2HSV)

        lowerLimit = hsvC[0][0][0] - 10, 100, 100
        upperLimit = hsvC[0][0][0] + 10, 255, 255

        lowerLimit = np.array(lowerLimit, dtype = np.uint8)
        upperLimit = np.array(upperLimit, dtype = np.uint8)

    return lowerLimit, upperLimit