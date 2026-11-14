import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'bear.jpg'))

if img is None:
    print("Image not found")
else:
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    ret, thresh = cv2.threshold(img_gray, 80, 255, cv2.THRESH_BINARY)
    thresh = cv2.blur(thresh, (10,10))
    ret, thresh = cv2.threshold(thresh, 80, 255, cv2.THRESH_BINARY)

    cv2.imshow('img_gray', img_gray)
    cv2.imshow('thresh', thresh)
    
    if cv2.waitKey(0) & 0XFF == ord('q'):
        cv2.destroyAllWindows()
    