import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'whiteboard.jpg'))

if img is None:
    print("Img is not found")
else:
    img_resize = cv2.resize(img, (800, 500))
    cv2.imshow('img_resize', img_resize)
    
    #line
    img_line = cv2.line(img_resize, (100,150),(200, 300),(0, 0,0), 3)
    cv2.rectangle(img_resize, (400, 200), (600, 350), (255, 0, 0), -1)
    cv2.imshow('img_resize', img_resize)
    if cv2.waitKey(0) & 0XFF == ord('q'):
            cv2.destroyAllWindows()
