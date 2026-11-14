import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'freelancer.jpg'))

if img is None:
    print("Image not found!")
else:
    print(img.shape)

    img_resize = cv2.resize(img, (400, 400))
    print(img_resize.shape)

    k_size = 7
    img_blur = cv2.blur(img_resize, (k_size, k_size))
    img_gaussian = cv2.GaussianBlur(img_resize, (k_size, k_size), 5)
    img_median = cv2.medianBlur(img_resize, k_size)


    cv2.imshow('img_resize', img_resize)
    cv2.imshow('img_blur', img_blur)
    cv2.imshow('img_gaussian', img_gaussian)
    cv2.imshow('img_median', img_median)

    if cv2.waitKey(0) & 0xFF == ord('q'):
        cv2.destroyAllWindows()