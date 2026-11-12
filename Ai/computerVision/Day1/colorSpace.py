import os

import cv2

img  = cv2.imread(os.path.join('.', 'data', 'bird.jpg'))

cv2.imshow('img_new', img)
cv2.waitKey(0)