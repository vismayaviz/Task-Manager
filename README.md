# 📝 Task Manager App

A simple and clean **Full Stack Task Manager** built using **React (Frontend)** and **Spring Boot (Backend)**.  
This application allows users to create, manage, search, and track tasks with real-time status updates.

---

## 🚀 Features

- Add new tasks with title and description  
- Start and complete tasks  
- Delete tasks  
- Filter tasks (All / Pending / Completed)  
- Search tasks instantly  
- Clean and modern UI design  

---

## 🛠️ Tech Stack

### **Frontend**
- React
- CSS
- Axios

### **Backend**
- Spring Boot
- Java
- REST API

### **Database**
- MySQL

---

## 📂 Project Structure

```
task-manager
 ┣ backend     # Spring Boot API
 ┣ frontend    # React UI
 ┗ assets      # Screenshots for README
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (Spring Boot)

```bash
# Open backend project in IntelliJ
# Configure MySQL in application.properties
# Run Spring Boot Application
```

Backend runs on:

```
http://localhost:8080
```

---

### 2️⃣ Frontend Setup (React)

```bash
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint           | Description        |
|--------|-------------------|--------------------|
| GET    | /tasks             | Get all tasks      |
| POST   | /tasks             | Create task        |
| DELETE | /tasks/{id}        | Delete task        |
| PUT    | /tasks/{id}/status | Update task status |

---

## ✨ UI Preview


### Main Page
![Main UI](/Screenshot-main.png)

### Task Creation
![Task Create](/Screenshot-taskcreating.png)

---

## 👩‍💻 Author

**Vismaya Vinodan**  
BTech Computer Science Graduate  

---

## 📄 License

This project is open source and available under the **MIT License**.


