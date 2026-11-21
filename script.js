
// TASK 1: Change paragraph text when button is clicked

function changeText() {
    document.getElementById("message").textContent =
        "The paragraph text has changed successfully!";
}


// TASK 2, 3 AND 4: Student Registration Form

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    // Prevent automatic form submission
    event.preventDefault();

    // Capture student information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;

    // TASK 4: Check required fields
    if (name === "" || email === "" || age === "") {
        alert("Please fill in all required fields!");
        return;
    }

    // TASK 3: Display submitted student information
    const studentDetails = document.getElementById("studentDetails");

    const student = document.createElement("div");

    student.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;

    studentDetails.appendChild(student);

    // Clear form after successful submission
    studentForm.reset();

});


// TASK 5: Create an array containing five student objects

const students = [
    {
        name: "Cynthia",
        marks: 85,
        course: "Python",
        age: 21
    },

    {
        name: "Mary",
        marks: 78,
        course: "Java",
        age: 20
    },

    {
        name: "John",
        marks: 90,
        course: "Python",
        age: 19
    },

    {
        name: "Peter",
        marks: 65,
        course: "JavaScript",
        age: 22
    },

    {
        name: "Ann",
        marks: 88,
        course: "Python",
        age: 18
    }
];


// A. Use map() to display all student names

const studentNames = students.map(function(student) {
    return student.name;
});

document.getElementById("studentNames").innerHTML =
    studentNames.map(name => `<div>${name}</div>`).join("");


// B. Use map() to display student names and marks

const studentMarks = students.map(function(student) {
    return student.name + " - " + student.marks + " marks";
});

document.getElementById("studentMarks").innerHTML =
    studentMarks.map(item => `<div>${item}</div>`).join("");


// C. Use filter() to find students taking Python

const pythonStudents = students.filter(function(student) {
    return student.course === "Python";
});

document.getElementById("pythonStudents").innerHTML =
    pythonStudents.map(student =>
        `<div>${student.name} - ${student.course}</div>`
    ).join("");


// D. Use filter() to find students below 21 years

const youngStudents = students.filter(function(student) {
    return student.age < 21;
});

document.getElementById("youngStudents").innerHTML =
    youngStudents.map(student =>
        `<div>${student.name} - ${student.age} years</div>`
    ).join("");

    