from selenium import webdriver
from selenium.common.exceptions import *
# import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

def allUnique(x):
    seen = set()
    return not any(i in seen or seen.add(i) for i in x)

def homeScreenTest():
    print("\n--Home screen test--\n")
    try:
        for i in range(1,6):
            # print("x"+str(i))
            item = driver.find_element_by_id("x"+str(i))
            item.click()
            # time.sleep(1)
            WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".itemsTitle")))
            driver.execute_script("window.history.go(-1)")
            # time.sleep(1)
        return print("✔ Each element is clickable")
    except NoSuchElementException:
        return print("✖ Couldn't find an element");

def algebraShopUniqueTest():
    print("\n--Algebra Shop unique elements test--\n")
    try:
        driver.find_element_by_css_selector("a[href*='/shop']").click()
        itemNames = driver.find_elements_by_class_name("itemTexts")
        textList = []
        for texts in itemNames:
            textList.append(texts.text.split("\n")[0])
        if allUnique(textList):
            return print("✔ All elemets are unique")
        else:
            return print("✖ Not all elements are unique")
        
    except NoSuchElementException:
        return print("✖ Couldn't find an element");

def algebraShopIncrementTest():
    print("\n--Does cart counter work--\n")
    try:
        driver.find_element_by_css_selector("a[href*='/shop']").click()
        btns = driver.find_elements_by_class_name("addToCardText")
        bag = 0
        for btn in btns:
            # btn.click()
            driver.execute_script("arguments[0].click();", btn)
            bagInt = int(driver.find_element_by_class_name("itemCount").text)
            bag += 1
            if bag != bagInt:
                return print("✖ There is an increment issue")
        return print("✔ Increment on all buttons works fine")
    except NoSuchElementException:
        return print("✖ Couldn't find an element");

def signInTest():
    print("\n--Signin test--\n")
    try:
        driver.find_element_by_css_selector("a[href*='/signin']").click()
        email = driver.find_element_by_id("signinEmail")
        password = driver.find_element_by_id("signinPassword")
        btn = driver.find_element_by_id("signin")
        inputEmail = "test@test.test"
        inputPass = "test123"
        email.send_keys(inputEmail)
        password.send_keys(inputPass)
        btn.click()
        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".items")))
        signInOutText = driver.find_elements_by_class_name("rightText")[1].text

        if signInOutText == "SIGN OUT":
            return print("✔ Successful sign in")
        return print("✖ Couldn't sign in")
    except NoSuchElementException:
        return print("✖ Couldn't find an element");

def checkoutTest():
    print("\n--Checkout total price test with hats--\n")
    try:
        driver.execute_script("window.localStorage.clear();");
        driver.get("http://localhost:3000/shop/hats")
        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".itemsTitle")))
        btns = driver.find_elements_by_class_name("addToCardText")
        totalPrice = 0
        for btn in btns:
            # btn.click()
            driver.execute_script("arguments[0].click();", btn)
        driver.execute_script("document.querySelector('.checkoutText').click();")

        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".tableHead")))
        prices = driver.find_elements_by_css_selector(".price > .productInner")
        totalPriceOnPage = driver.find_element_by_class_name("tableTail").text.split(": ")[1]

        for price in prices:
            price = int(price.text.split("€")[0])
            totalPrice += price
        if str(totalPrice)+"€" == totalPriceOnPage:
            return print("✔ Price calculation is true")
        return print("✖ Price calculation is false")
    except NoSuchElementException:
        return print("✖ Couldn't find an element");
                


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://localhost:3000")

homeScreenTest()
algebraShopUniqueTest()
algebraShopIncrementTest()
signInTest()
checkoutTest()

driver.quit()