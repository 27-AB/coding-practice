import os

import cv2

# read image 
image_path = os.path.join('.', 'data', 'bird.jpg')

img = cv2.imread(image_path)
#print(type(img))
#print(img.shape)

# write image

cv2.imwrite(os.path.join('.', 'data', 'bird_out.jpg'), img)

# visualize image 

cv2.imshow('image', img)
cv2.waitKey(0)

