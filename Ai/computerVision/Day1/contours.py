import os
import cv2

img = cv2.imread(os.path.join('.', 'data', 'birds.jpg'))

if img is None:
    print("Img is not found")

else:
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    ret, thresh = cv2.threshold(
        img_gray, 127, 255, cv2.THRESH_BINARY_INV
    )

    contours, hierarchy = cv2.findContours(
        thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE
    )

    print("Total contours:", len(contours))

    for cnt in contours:
        area = cv2.contourArea(cnt)

        if area > 50:
            cv2.drawContours(img, [cnt], -1, (0, 255, 0), 2)

            x1, y1, w, h = cv2.boundingRect(cnt)

            cv2.rectangle(img, (x1, y1), (x1 + w, y1 + h), (0, 255, 0), 2)


        

    cv2.imshow('Original with contours', img)
    cv2.imshow('Grayscale', img_gray)
    cv2.imshow('Threshold', thresh)

    cv2.waitKey(0)
    cv2.destroyAllWindows()