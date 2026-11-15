import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'whiteboard.jpg'))

if img is None:
    print("Img is not found")
else:
    img_resize = cv2.resize(img, (800, 500))
    print(img_resize.shape)
    cv2.imshow('img_resize', img_resize)
    
    #line
    img_line = cv2.line(img_resize, (100,150),(200, 300),(0, 0,0), 3)
    cv2.rectangle(img_resize, (300, 200), (500, 300), (255, 0, 0), -1)
    #circle
    cv2.circle(img_resize, (600, 300), 70, (0, 0, 255),5)
    # text
    cv2.putText(img_resize, 'Hey Birhane!', (300, 100), cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 0, 255))
    cv2.imshow('img_resize', img_resize)
    if cv2.waitKey(0) & 0XFF == ord('q'):
            cv2.destroyAllWindows()
