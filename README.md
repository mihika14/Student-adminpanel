# Student Admin Panel - MERN CRUD App
The Student Admin Panel is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack, which includes React for the frontend, Node.js with Express for the backend, and MongoDB as the database.<br/> This application allows administrators to manage student records . <br/>It also includes authentication with login and signup functionality  for administrators to access the admin panel securely.

## Features
View a list of all students with their details.<br/>
Add a new student to the database.<br/>
Edit student information (name, roll number, section.)<br/>
Delete a student from Database.<br/>
Sort Students By Roll Number. <br/>
Search Students by Name. <br/>
Secure login and signup functionality for administrators using JSON Web Tokens (JWT).

## Technologies And Dependencies
### Frontend
React.js<br/>
axios<br/>
react-icons<br/>
sweetalert2<br/>

### Backend
Node.js<br/>
mongodb<br/>
cors<br/>
bcrypt<br/>
express<br/>
jsonwebtoken<br/>
mongoose<br/>
swagger-jsdoc<br/>
swagger-ui-express

## Installation and Setup
### Clone The Repository
git clone https://github.com/mihika14/Student-adminpanel
### Install the dependencies
cd frontend<br/>
npm i axios react-icons sweetalert2<br/>
cd ../backend<br/>
npm i mongodb cors bcrypt express jsonwebtoken mongoose mongodb swagger-jsdoc swagger-ui-express<br/>
cd ../<br/>
npm start

## Usage
Open your web browser and navigate to localhost to access the Student Admin Panel.

## SignUp and Login
API for SignUp and Login Page.<br/>
![credentialapi](images/credentialapi.png)<br/>
Before accessing the admin panel, administrators need to sign up for an account. Click on the "Sign Up" Button and fill in the required information to create an account. After signing up, you can login through login form.<br/>
![mainpage](images/mainpage.png)

## Sorting
Click on the "Filter by Roll Number" button to sort the students by their roll number. 
![filter](images/filter.png)

## Searching Students
Use the search bar at the top to search for students by their name. As you type, the list of students will be filtered to show only the students whose names match the search query.
![search](images/search.png)

## CRUD API (CREATING , READING , UPDATING , DELETING STUDENT'S DETAILS)
![crudapi](images/crudapi.png)
## Adding a New Student 
Click on the "Add Student" button above to open this form where you can enter the details of the new student. After filling in the required information, click the "Add Student details" button to add the student to the database.
![addstudent](images/addstudent.png)
![addstudent2](images/addstudent2.png)
## Updating and Deleting Student Details
Click on the "pencil" icon in actions column to edit the student inthe database. <br/>
Click on the "cross" icon in actions column to delete the student from the database.
![homepage](images/homepage.png)

## API DOCUMENTATION
To Access Documentation of thr CRUD API's click on this link:- https://drive.google.com/file/d/1udwtoj48Vst_vnKbjK3-3RcQ6i2c7S7d/view?usp=sharing. <br/>
or While Running Locally you can redirect to http://localhost:5000/api-docs/ to access documentation.



