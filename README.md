<!-- Aleksandr Ainidinov -->
<!-- 8905450 -->
<!-- 2025-04-17 -->


# Small Business Solution Final

## Developer

- **Name**: Aleksandr Ainidinov  
- **Student ID**: 8905450
- **Class**: PROG2390 - Small Business Solutions - Sec4
- **Date**: 2025-04-17
- **Time**: 4:30 AM
- **GitHub Repository**: [Customer Orders Management System](https://github.com/AleksandrAinidinov/small_business_solutions_final)

---

Basic Customer Orders Management System application using Next.js. This version of the system allows adding new orders and viewing all the previous orders on one page.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AleksandrAinidinov/small_business_solutions_final.git
   cd my-app
   ```
2. **Set up Neon.Tech Database**:
   Go to neon.tech website and click 'New Project'. Then click 'Connect' and you will see the connection string, you need to copy it and create a new file called:
   ```bash
   .env.local
   ```
   Add this line to this file:
   ```bash
   DATABASE_URL=your_neon_tech_connection_string
   ```

3. **Install dependencies**:
   Ensure you have Next.js and pg library installed, then run:
   ```bash
   npm install
   npm install pg
   ```

3. **Start the application**:
   Launch the application locally:
   ```bash
   npm run dev
   ```

4. **.env File creation**:
   Just in case, here's my connection string:

   DATABASE_URL=postgresql://neondb_owner:npg_eIRHSktsl7Q1@ep-odd-dust-a4vesg5c-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
---

## Usage

After starting the server, you can access the following pages:

- **Home Page**: `http://localhost:3000`  
  The main landing page of the application, which has a Form that allows adding a new order and a Table which contains all the orders in the system.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as permitted under this license.
