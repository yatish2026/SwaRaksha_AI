
<div align="center">

  <img src="/public/assets/swasthya%20sampark%20readme.svg" alt="logo" width="auto" height="auto" />
  <h1>SwaRakshaAI</h1>

  <p>
    A Paradigm Shift in Healthcare
  </p>


## Introduction

SwaRakshaAI is a healthcare platform designed to connect patients with doctors for real-time symptom tracking, consultations, and AI-driven health advice. 

## Modules

1. **Smart Health Solutions (Symptom Triage)**
    - AI-powered symptom checker for real-time health insights.
    - Key Features: 24/7 symptom assessments, AI-driven care navigation, instant recommendations.

2. **Doctor Portal**
    - Manage appointments, view patient records, and perform consultations.
    - Key Features: Schedule management, access to patient records.

3. **HealthGPT (AI Chatbot)**
    - Interactive AI chatbot for health queries, symptoms, and treatments.
    - Key Features: Instant health answers, information on health conditions, medication guidance.

4. **Report Summary Generation**
    - Converts medical reports from images to text using ML algorithms and OCR technology.
    - Key Features: AI-driven report transformation, quick and precise conversion.

5. **Patient Portal**
    - Access health records, track medical history, and manage appointments.
    - Key Features: Health record access, appointment scheduling.

6. **Consultation Management**
    - Streamlines patient-doctor consultation processes.
    - Key Features: Manage consultation flow, real-time interaction through chat or video calls.

## Purpose and Function

The platform aims to simplify healthcare accessibility by providing AI-powered consultations and enabling patients to connect directly with doctors. The AI chatbot analyzes symptoms and suggests health advice, enhancing consultation efficiency and user engagement.

## Tools Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React
- **Security:** JWT for authentication
- **Real-time Communication:** socket.io
- **AI Engine:** Gemini LLM
- **Validation:** Zod for schema validation

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB
- Python 3.8+
- `pip` for installing Python dependencies

### Installation

Create a `.env` file in the `backend` directory with the following template. Replace the placeholders with your generated keys and URLs:

```env
# Environment Configuration for Swasthya-Sampark Backend

# Application Environment
NODE_ENV=development

# Server Configuration
PORT=3001

# Database Configuration
MONGODB_URI=<your_mongodb_connection_string>

# JWT Secret for Authentication
JWT_SECRET=<your_jwt_secret_key>

# AI Engine Configuration
GEMINI_API_KEY=<your_gemini_api_key>
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest
MODEL_NAME=gemini-1.5-pro

# Email Configuration
EMAIL=<your_email@example.com>
PASS=<your_email_password>
```

### Generating Required Keys and API URLs

1. **MongoDB URI**:
    - Create a MongoDB Atlas account and generate a connection string for your database.

2. **JWT Secret**:
    - Generate a secure secret string for JSON Web Token (JWT) authentication.

3. **Gemini API Key**:
    - Sign up for access to the Google Generative Language API and obtain your API key.

4. **Email and Password**:
    - Use a secure email service for transactional emails. If using Gmail, consider setting up an App Password if 2FA is enabled.

### Running the Application

1. Start the backend server:
   ```bash
   cd ./backend
   npm start
   ```
2. Start the frontend application:
   ```bash
   cd ./frontend
   npm run dev
   ```
3. Start the ML server
   ```bash
   cd ./6ml/6ml
   python server.py
   ```



---

