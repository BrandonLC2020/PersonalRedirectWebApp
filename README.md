# **Personal Redirect Web App**

A web application built with **React** and **Expo**, designed to integrate with **ngrok** and handle incoming API calls redirected through ngrok. This app serves as a user interface for monitoring and managing incoming API requests.

---

## **Table of Contents**

- [🚀 Getting Started](#getting-started)  
- [🛠️ Installation](#installation)  
- [🔗 Configuration](#configuration)  
- [💡 Features](#features)  
- [🎨 Screenshots](#screenshots) *(optional, if any)*  
- [📜 License](#license)  

---

## 🚀 **Getting Started**

This project allows you to:
- Connect to **ngrok** to handle API redirection.
- Monitor incoming API requests using a web interface.
- View details like HTTP method, endpoint, request body, and timestamp.

---

## 🛠️ **Installation**

### Prerequisites
Ensure you have these installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or npm
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

### 2. Install Dependencies

```bash
yarn install
```

---

### 3. Configure Ngrok
Set up ngrok to expose your local server.

1. Run ngrok:
   ```bash
   ngrok http <PORT>
   ```
2. Copy the generated **ngrok public URL** and save it to the `.env` file.

---

### 4. Start the Development Server

```bash
yarn expo start --web
```

---

### 5. Open the Application

After running the command above, the web app will open at:
[http://localhost:19006](http://localhost:19006)

If ngrok is configured properly, API requests sent to the ngrok public URL will be redirected to this app.

---

## 🔗 **Configuration**

### Environment Variables (`.env`)
You can configure your ngrok URL or server ports using a `.env` file. Example:

```plaintext
NGROK_URL=https://your-ngrok-url.ngrok.io
NGROK_PORT=3000
```

Make sure to include this file in your project root.

---

## 💡 **Features**

- ✅ **Connect with ngrok:** Monitor real-time API requests redirected via ngrok.
- ✅ **View API Call Logs:** Inspect details like endpoint, HTTP method, request body, and timestamps.
- ✅ **Simple UI with React and Expo:** Designed with simplicity and user experience in mind.
- ✅ **Clear Dev Logs:** Understand incoming traffic at a glance.

---

## 🎨 **Screenshots**

*(Add app screenshots here, if any)*

---

## 📜 **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

### **Acknowledgments**
- Thanks to [Expo](https://expo.dev/) and [ngrok](https://ngrok.com/) for their tools and resources.
