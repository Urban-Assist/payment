<div align="center">
  
# 💳 Payment Microservice

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/username/payment-service)
[![Node](https://img.shields.io/badge/node-%3E%3D%2018.0.0-green.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-red.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<img src="https://i.imgur.com/9Jz1SJs.gif" alt="Payment Service Logo" width="200"/>

*Effortlessly process payments and manage transactions for the Urban Assist platform.*

[Overview](#-overview) •
[Getting Started](#-getting-started) •
[Running the Microservice](#-running-the-microservice) •
[Docker & Kubernetes](#-docker--kubernetes) •
[API Endpoints](#-api-endpoints) •
[Tech Stack](#-tech-stack)

</div>

---

## 📚 Overview

The Payment Microservice is a robust and scalable solution for handling payment processing, customer management, and transaction tracking. Built with Node.js and Express, it integrates seamlessly with Stripe for secure payment handling and supports Kubernetes for high availability.

<details>
<summary>✨ Key Features</summary>

- **Stripe Integration** - Secure and reliable payment processing.
- **Customer Management** - Create and manage Stripe customers.
- **Transaction Tracking** - Store and retrieve payment details.
- **PDF Receipts** - Generate professional payment receipts.
- **JWT Authentication** - Secure API endpoints with token-based authentication.
- **Kubernetes Ready** - Auto-scaling, self-healing, and rolling updates.
- **Dockerized** - Lightweight and portable containerized deployment.
- **Developer-Friendly** - Clean, modular codebase with detailed logging.

</details>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher): [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js for dependency management.
- **Docker**: [Install Docker](https://www.docker.com/get-started) for containerization.
- **Kubernetes**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/) for cluster management.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd payment
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory with the following:

   ```plaintext
   STRIPE_SECRET_KEY=your-stripe-secret-key
   JWT_SECRET=your-jwt-secret
   DATABASE_HOST=mysql-service
   DATABASE_PORT=5151
   DATABASE_USER=root
   DATABASE_PASSWORD=admindevelopers
   DATABASE_NAME=payments
   PORT=8085
   MANAGEMENT_URI=http://user-management:8083
   ```

---

## 🏃‍♂️ Running the Microservice

### Development Mode

Run the service locally with hot-reloading:

```bash
npm run start
```

### Production Mode

Run the service in production:

```bash
node server.js
```

### Verify the Service

Visit `http://localhost:8085/payments` to ensure the service is running.

---

## 🐳 Docker & ☸️ Kubernetes

### Docker

1. **Build the Docker image**:

   ```bash
   docker build -t payment-service .
   ```

2. **Run the container**:

   ```bash
   docker run -p 8085:8085 --env-file .env payment-service
   ```

### Kubernetes

1. **Apply Kubernetes manifests**:

   ```bash
   kubectl apply -f k8s/
   ```

2. **Check deployment status**:

   ```bash
   kubectl get deployments
   ```

3. **Restart the deployment** (if needed):

   ```bash
   kubectl rollout restart deployment payment-service
   ```

---

## 📡 API Endpoints

| Endpoint                          | Method | Description                                   | Auth Required |
|-----------------------------------|--------|-----------------------------------------------|---------------|
| `/payments/card-pay`              | POST   | Process a card payment                       | ✅             |
| `/payments/create-customer`       | POST   | Create a new Stripe customer                 | ❌             |
| `/payments/:email`                | GET    | Fetch payments by customer/provider email    | ✅             |
| `/payments/receipt/:paymentId`    | GET    | Generate a PDF receipt for a payment         | ✅             |

### Example Request

```bash
curl -X POST http://localhost:8085/payments/card-pay \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "currency": "usd",
    "paymentMethodId": "pm_card_visa"
  }'
```

---

## 🛠 Tech Stack

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)

</div>

---

<div align="center">

**Urban Assist Payment Microservice** • Built with ❤️ by the Urban Assist Team

</div>
