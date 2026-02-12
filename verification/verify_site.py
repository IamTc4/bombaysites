from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Home Page
        print("Navigating to Home...")
        page.goto("http://localhost:3000")
        # Wait for content to load
        page.wait_for_timeout(5000)
        page.screenshot(path="verification/home.png", full_page=True)
        print("Home screenshot taken.")

        # Properties Page
        print("Navigating to Properties...")
        page.goto("http://localhost:3000/properties")
        page.wait_for_timeout(5000)
        page.screenshot(path="verification/properties.png", full_page=True)
        print("Properties screenshot taken.")

        # Admin Page
        print("Navigating to Admin...")
        page.goto("http://localhost:3000/admin")
        page.wait_for_timeout(5000)
        page.screenshot(path="verification/admin.png", full_page=True)
        print("Admin screenshot taken.")

        browser.close()

if __name__ == "__main__":
    try:
        run()
    except Exception as e:
        print(f"Error: {e}")
