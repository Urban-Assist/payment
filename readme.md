<div align="center">
  
# 💳 Payment Microservice

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/username/payment-service)
[![Node](https://img.shields.io/badge/node-%3E%3D%2018.0.0-green.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-red.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<img src="https://as2.ftcdn.net/v2/jpg/12/67/19/85/1000_F_1267198544_7rYprM9xYUCmN3tGxxaaqqntLcZlyLLb.jpg" alt="Payment Service Logo" width="200"/>

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

<div align="center">

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjg3eHd5ZWtjN2tzMWcxaWVoYXo1dW5rMHR6amo5YnZqMTRtaXVtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif" alt="Secure Payments" width="400"  />

</div>

### 🔐 Security & Best Practices

Our payment processing implementation follows industry-standard security practices:

- **PCI DSS Compliance**: Through Stripe integration, we maintain PCI compliance without handling sensitive card data directly
- **Tokenization**: Card details are tokenized by Stripe before reaching our servers
- **End-to-End Encryption**: All communications with Stripe use TLS 1.2+
- **Zero Card Storage**: We never store raw card details on our servers
- **Automated Fraud Detection**: Leveraging Stripe's Radar system for fraud prevention
- **Webhook Signatures**: All webhook endpoints verify Stripe signatures
- **Rate Limiting**: API endpoints are protected against brute force attacks
- **Regular Security Audits**: Automated and manual security testing

### 💪 Stripe Integration Benefits

<div align="center">

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNleW1reWRzcWtiaDRzZG1hYmxvbHg5dWpycm1mdDE0YnFwcW9vNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTndGMuJFfKHas2Q/giphy.gif" alt="Integration Benefits" width="400"/>

</div>

Our Stripe integration provides:

1. **Global Payment Methods**
   - Support for 135+ currencies
   - Local payment methods across 40+ countries
   - Automatic currency conversion

2. **Smart Optimization**
   - Machine learning for fraud prevention
   - Adaptive acceptance rates
   - Smart retry logic for failed payments

3. **Compliance & Reporting**
   - Automated tax calculation and reporting
   - GDPR and PCI compliance handling
   - Detailed financial reports and reconciliation

4. **Developer Experience**
   - Comprehensive testing environment
   - Detailed error messages
   - Extensive API documentation

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

<div align="center">

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGhleDZiaG9rc28yZWV0Y3g2dWZsZG55MTNqd3o5c3V6NWxkeDV6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4H3Ii5eLChYul9p7NL/giphy.gif" alt="Service Deployment" width="400"/>

</div>


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

> **Authentication Note**: For authenticated endpoints, include the JWT token in the Authorization header:
> ```
> Authorization: Bearer <your-jwt-token>
> ```


| Endpoint                          | Method | Description                                   | Auth Required |
|-----------------------------------|--------|-----------------------------------------------|---------------|
| `/payments/card-pay`              | POST   | Process a card payment                       | ✅     |
`/payments/:email`                | GET    | Fetch payments by customer/provider email    | ✅             |
| `/payments/receipt/:paymentId`    | GET    | Generate a PDF receipt for a payment         | ✅             |


<details>

<summary>📕Exaple Request Responses </summary>



#### Make a card payment for your bookings

```http
Request
PORT /payments/card-pay
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
 "userEmail": req.consumer?.sub,
                "userName": "John Doe",
                "providerEmail": abc@gmail.com,
                "providerName":  full name of the provider
                "providerPhoneNumber": +19999999999,
                "service": "plumbing",
                "pricePaid": 120,
                
                "slotData": {
                  "_id": user's id,
                  "date": date ,
                  "startTime": user selected start time,
                  "endTime": user selected end time,
                  "providerEmail": manoj@smail.com,
                  "service": "plumbing",
                  "originalStartTime": start time in UTC format,
                  "originalEndTime": End time in UTC format,
                }
                
Response:
{

    message:"Payment successful and slot booked",
    transaction : cus_23t4X24,
    payment : pay_823794uj,
    bookingResponse : Booking data
}
    
```

```http
GET /payments/receipt/:paymentId
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

Response:

-- A PDF file with the bill copy and a certified digital urban assist organization's unique stamp.
```


</details>
 

---

## 📡 API Security Layers

Our API implements multiple security layers:

1. **Authentication**
   - JWT-based token authentication
   - Token expiration and rotation
   - Role-based access control

2. **Request Validation**
   - Input sanitization
   - Schema validation
   - Request rate limiting

3. **Response Security**
   - CORS protection
   - HTTP Security Headers
   - Response data filtering

---

## 🛡️ Production Security Checklist

Before deploying to production:

✅ Configure Stripe webhook endpoints with proper signatures  
✅ Set up error monitoring and alerting  
✅ Enable audit logging for all transactions  
✅ Configure proper CORS settings  
✅ Set up rate limiting and request throttling  
✅ Enable network security groups  
✅ Configure SSL/TLS certificates  
✅ Set up database encryption at rest  

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
