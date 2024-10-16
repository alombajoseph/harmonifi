
# HarmoniFi

HarmoniFi is a personal finance management application designed to help users track their expenses, manage budgets, and gain insights into their financial habits. This project focuses on building a robust and scalable backend using Django and Django REST Framework.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Challenges and Lessons Learned](#challenges-and-lessons-learned)
- [Future Improvements](#future-improvements)
- [Contributors](#contributors)
- [License](#license)

## Project Description

HarmoniFi is a backend application that provides API endpoints for managing personal finances. Users can create and manage budgets, track expenses, and analyze their financial data. The application leverages JWT authentication for secure access and ensures that users can only access their own financial data.

## Features

- **User Authentication**: Secure user registration and login with JWT tokens.
- **Budget Management**: Create, view, update, and delete budgets.
- **Expense Tracking**: Log expenses against budgets, view expense details, and manage expense records.
- **Financial Reporting**: Summarize financial data to help users understand their spending habits (planned for future versions).

## Technologies Used

- **Django**: Web framework used for building the backend.
- **Django REST Framework (DRF)**: Provides a powerful toolkit for building Web APIs.
- **PostgreSQL**: Relational database for storing user data, budgets, and expenses.
- **JWT (JSON Web Tokens)**: For secure user authentication.

## Setup and Installation

To set up the HarmoniFi project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alombajoseph/harmonifi.git
   cd harmonifi
   ```

2. **Create a virtual environment and install dependencies:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Set up the PostgreSQL database:**

   Ensure that you have PostgreSQL installed and create a database for the project. Update the `DATABASES` setting in `harmonifi/settings.py` with your database credentials.

4. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

6. **Access the application:**

   Open your web browser and go to `http://localhost:8000/`.

## API Endpoints

Here are some of the main API endpoints provided by HarmoniFi:

- **User Authentication**
  - `POST /api/token/`: Obtain a JWT token.
  - `POST /api/token/refresh/`: Refresh the JWT token.

- **Budget Management**
  - `GET /api/budgets/`: List all budgets.
  - `POST /api/budgets/`: Create a new budget.
  - `GET /api/budgets/{id}/`: Retrieve a specific budget.
  - `PUT /api/budgets/{id}/`: Update a budget.
  - `DELETE /api/budgets/{id}/`: Delete a budget.

- **Expense Tracking**
  - `GET /api/expenses/`: List all expenses.
  - `POST /api/expenses/`: Create a new expense.
  - `GET /api/expenses/{id}/`: Retrieve a specific expense.
  - `PUT /api/expenses/{id}/`: Update an expense.
  - `DELETE /api/expenses/{id}/`: Delete an expense.

## Challenges and Lessons Learned

During the development of HarmoniFi, several challenges were encountered, including:

- **Database Design**: Structuring the relationships between users, budgets, and expenses to ensure efficient data retrieval.
- **Authentication**: Implementing secure JWT authentication and ensuring that users can only access their own data.
- **API Design**: Creating a clean and intuitive API that aligns with REST principles.

Lessons learned include the importance of planning the data model early, the benefits of using Django REST Framework for rapid API development, and the necessity of thorough testing for security and data integrity.

## Future Improvements

Planned enhancements for HarmoniFi include:

- **Financial Reporting**: Adding features for generating reports and visualizing spending data.
- **Recurring Expenses**: Supporting recurring expenses that automatically log themselves at set intervals.
- **User Notifications**: Implementing email or SMS notifications for budget limits and upcoming expenses.

## Contributors

This project was developed by **Joseph Alomba** as part of a portfolio project. Contributions and feedback are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
``.
