import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'dog.jpg'))
resized_img = cv2.resize(img, (237, 158))


print(img.shape)
print(resized_img.shape)


cv2.imshow('img', img)
cv2.imshow('resized_img', resized_img)
cv2.waitKey(0)