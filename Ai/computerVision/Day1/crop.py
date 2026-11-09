import os

import cv2

img = cv2.imread(os.path.join('.', 'data','dog.jpg'))

print(img.shape)



cropped_img = img[40:310, 100:400]
cv2.imshow('img', img)
cv2.imshow('cropped_img', cropped_img)
cv2.waitKey(0)


cv2.destroyAllWindows()