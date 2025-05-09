# 🚗 Estaciona JS - Your Car Park Locator

## Author
**Adelino Masioli**
*Software Engineer*

✉️ adelinomasioli@gmail.com
🌐 adelinomasioli.com
📱 +351 932 992 170

## Professor
**José Joaquim Moreira**
*Project coordinator*

✉️ jose.moreira@islagaia.pt

---

Estaciona JS (adapted for Cordova as "Park JS") is a simple mobile application built with Apache Cordova, designed to help you remember where you parked your car! 🅿️ Whether you're in a crowded parking lot or a multi-story garage, this tool lets you save important details about your parking spot, including its color, section, and number. All data is stored locally on your device using LocalStorage, ensuring easy access every time you need it.

This application serves as a practical demonstration of building hybrid mobile apps using web technologies.

---


🎓 **Academic Context**
This project was developed as part of the Mobile Application Development course within the Master's Degree in Engineering of Web Technologies and Systems (METSW) at ISLA Gaia – Instituto Politécnico de Gestão e Tecnologia 🇵🇹.

*   **Institution:** ISLA Gaia – Instituto Politécnico de Gestão e Tecnologia
*   **Master's Degree:** Engenharia de Tecnologias e Sistemas Web (Engineering of Web Technologies and Systems)
*   **Course:** Master's Degree in Engineering of Web Technologies and Systems
*   **Student:** Adelino Masioli

---

✨ **Features**
*   **📝 Input Form:** Easily register your parking spot details (color, section, and number).
*   **💾 Persistent Storage:** Parking data is saved directly on the device's LocalStorage.
*   **👀 View Saved Spot:** Retrieve and display the details of your last saved parking spot.
*   **🎨 Dynamic Styling:** The background color of the "View Spot" details section dynamically changes to match the saved parking spot's color for a quick visual cue.
*   **📱 Mobile First Design:** Styled with Bootstrap 5 for a clean, responsive, and mobile-friendly interface.
*   **🧩 Component Reusability:** Utilizes jQuery's `.load()` to include common header and footer components across different pages, ensuring a consistent user experience.
*   **🔔 Native Dialogs:** Uses the `cordova-plugin-dialogs` for native alert notifications.
*   **📁 Organized Project Structure:** Clearly structured for a Cordova application, separating web assets (`www`) from native platform code.

---

🛠️ **Tech Stack**
This project utilizes the following technologies:

*   **Apache Cordova:** Framework for building native mobile applications using HTML, CSS, and JavaScript.
*   **HTML5:** For structuring the application's views.
*   **CSS3:** For custom styling.
*   **JavaScript (ES6+):** For application logic.
*   **Bootstrap 5:** For responsive design and UI components.
*   **jQuery:** For DOM manipulation and AJAX for loading includes.
*   **Font Awesome:** For icons.
*   **LocalStorage API:** For client-side data storage.
*   **Cordova Plugins:**
    *   `cordova-plugin-dialogs`: For native alert dialogs.

---

📂 **Project Structure (Key Directories)**

AppPark/ (or EstacionaJS if you renamed the Cordova project folder)
├── config.xml # Cordova configuration file (app ID, permissions, plugins, icons)
├── hooks/ # Scripts for Cordova build hooks
├── platforms/ # Native platform code (e.g., android/, ios/)
├── plugins/ # Installed Cordova plugins
├── www/ # Web assets (HTML, CSS, JS, images) - THE CORE OF YOUR APP
│ ├── css/
│ │ └── index.css
│ ├── img/
│ │ ├── logo.png
│ │ └── park.png
│ ├── includes/
│ │ ├── footer.html
│ │ └── header.html
│ ├── js/
│ │ └── index.js
│ ├── index.html (Home Page - Register Spot)
│ ├── place/
│ │ └── index.html (View Saved Spot Page)
│ └── about/
│ └── index.html (About Page)
├── res/ # Resources like icons and splash screens
│ └── icon/
│ └── android/ # Android specific icons
└── README.md



---

🚀 **Getting Started**

**Prerequisites:**
*   Node.js and npm
*   Apache Cordova CLI (`npm install -g cordova`)
*   Android SDK (for building Android apps)
*   Java JDK (for Android builds)
*   (Optional) An Android Emulator or a physical Android device for testing.

**Setup & Running:**

1.  **Clone the Repository:**
    ```bash
    git clone [URL_OF_YOUR_GITHUB_REPOSITORY]
    cd AppPark  # Or the name of your project folder
    ```

2.  **Add Platforms (if not already present):**
    Cordova needs to know which platforms you're targeting.
    ```bash
    cordova platform add android
    cordova platform add browser  # For quick testing in a web browser
    ```

3.  **Install Plugins (if not already listed in `config.xml` or `package.json`):**
    The `cordova-plugin-dialogs` should be listed in your `config.xml`. If you prepare the project, Cordova usually handles plugin installation during `cordova prepare` or `cordova build`.
    ```bash
    cordova plugin add cordova-plugin-dialogs
    ```
    You can check installed plugins with `cordova plugin ls`.

4.  **Prepare the Project:**
    This copies web assets to the native platforms.
    ```bash
    cordova prepare
    ```

5.  **Run on Browser (for quick UI/logic testing):**
    ```bash
    cordova run browser
    ```
    *Note: Some native device features (like specific plugin functionalities beyond basic dialogs) might not work fully in the browser emulation.*

6.  **Build for Android:**
    ```bash
    cordova build android
    ```
    This will generate an `.apk` file in `platforms/android/app/build/outputs/apk/debug/`.

7.  **Run on Android Emulator or Device:**
    *   **Emulator:**
        ```bash
        cordova emulate android
        ```
        *(Ensure you have an emulator configured in Android Studio's AVD Manager)*
    *   **Device:**
        Connect your Android device via USB (with USB Debugging enabled).
        ```bash
        cordova run android
        ```

**Usage:**
1.  Launch the application on your device/emulator or browser.
2.  Navigate using the top menu (Home, Show place, About) or bottom footer icons.
3.  On the "Home" page, fill in the parking spot's color, section, and number.
4.  Click "Save place". A confirmation dialog will appear.
5.  Navigate to "Show place" to view the details of the last saved parking spot. The background of the data display will change based on the saved color.
6.  Navigate to "About" for information about the application.

---

🙏 **Credits**
This application is based on an exercise specification provided by METS (2024-2025) and developed in the academic context mentioned above.