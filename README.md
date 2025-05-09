# 🚗 Estaciona JS – Your Car Park Locator

Estaciona JS (adapted for Cordova as **Park JS**) is a simple mobile application built with Apache Cordova, designed to help you remember where you parked your car! 🅿️

Whether you're in a crowded parking lot or a multi-story garage, you can save important details like color, section, and spot number. All data is stored locally on your device via LocalStorage, ensuring quick and offline access.

This project serves as a practical demonstration of building hybrid apps using web technologies.

---

## 👤 Author

**Adelino Masioli**  
*Software Engineer*  
✉️ adelinomasioli@gmail.com  
🌐 [adelinomasioli.com](https://adelinomasioli.com)  
📱 +351 932 992 170  

---

## 🎓 Academic Supervisor

**José Joaquim Moreira**  
*Project Coordinator*  
✉️ jose.moreira@islagaia.pt  

---

## 🏫 Academic Context

This project was developed as part of the **Mobile Application Development** course within the framework of:

- **Master's Degree in Engineering of Web Technologies and Systems (METSW)**  
- **Institution:** ISLA Gaia – Instituto Politécnico de Gestão e Tecnologia 🇵🇹  
- **Student:** Adelino Masioli

---

## ✨ Features

- 📝 **Registration Form:** Easily register your parking spot details (color, section, and number).  
- 💾 **Persistent Storage:** Data is saved directly to the device's LocalStorage.  
- 👀 **View Saved Spot:** Displays the details of the last saved parking spot.  
- 🎨 **Dynamic Styling:** The background color of the "View Spot" section reflects the saved color of the spot.  
- 📱 **Mobile-First Design:** Responsive interface styled with Bootstrap 5.  
- 🧩 **Reusable Components:** Common headers and footers are loaded via jQuery `.load()` for a consistent user experience.  
- 🔔 **Native Alerts:** Native dialog alerts using `cordova-plugin-dialogs`.  
- 📁 **Organized Structure:** Clear separation between web assets (`www`) and Cordova native code.

---

## 🛠️ Tech Stack

- **Apache Cordova:** Framework for building hybrid mobile apps.  
- **HTML5, CSS3, JavaScript (ES6+):** Structure, styling, and logic.  
- **Bootstrap 5:** Modern and responsive styling.  
- **jQuery:** DOM manipulation and AJAX for includes.  
- **Font Awesome:** Icons.  
- **LocalStorage API:** Client-side storage.  
- **Cordova Plugins:**
  - `cordova-plugin-dialogs`: Native dialog alerts.

---

## 📂 Project Structure (Key Directories)

```
AppPark/ (or EstacionaJS/)
├── config.xml              # Cordova configuration (ID, plugins, icons)
├── hooks/                  # Cordova build scripts
├── platforms/              # Native platform code (android/, ios/)
├── plugins/                # Installed plugins
├── www/                    # Web assets (core of the app)
│   ├── css/
│   │   └── index.css
│   ├── img/
│   │   ├── logo.png
│   │   └── park.png
│   ├── includes/
│   │   ├── footer.html
│   │   └── header.html
│   ├── js/
│   │   └── index.js
│   ├── index.html          # Home Page (Register Spot)
│   ├── place/
│   │   └── index.html      # View Saved Spot Page
│   └── about/
│       └── index.html      # About Page
└── res/                    # Resources like icons and splash
    └── icon/
        └── android/
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm  
- Cordova CLI (`npm install -g cordova`)  
- Android SDK + Java JDK  
- (Optional) Android Emulator or physical device

### ⚙️ Installation and Running

1. **Clone the repository:**
    ```bash
    git clone [REPOSITORY_URL]
    cd AppPark
    ```

2. **Add platforms:**
    ```bash
    cordova platform add android
    cordova platform add browser
    ```

3. **Install the dialogs plugin (if needed):**
    ```bash
    cordova plugin add cordova-plugin-dialogs
    ```

4. **Prepare the project:**
    ```bash
    cordova prepare
    ```

5. **Run in the browser:**
    ```bash
    cordova run browser
    ```

6. **Build for Android:**
    ```bash
    cordova build android
    ```

7. **Run on emulator or device:**
    - **Emulator:**
      ```bash
      cordova emulate android
      ```
    - **Device:**
      ```bash
      cordova run android
      ```

---

## 📲 How to Use

1. Open the app in the browser or on your device.
2. Use the top menu or footer to navigate.
3. On the "Home" page, fill in the parking spot details.
4. Click "Save Spot" and confirm in the dialog.
5. Go to "View Spot" to see the saved details.
6. Go to "About" for more information.

---

## 🙏 Acknowledgments

This project was developed based on an exercise specification provided by METSW (2024–2025), as part of the academic training at ISLA Gaia.
