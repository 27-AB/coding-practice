const students = new Map();
students.set("001", {name: "Abebe"});
students.set("002", {name: "Sara"});

function getStudentName(studentId) {
    const student = students.get(studentId);

    if(!student) 
        return "Student not found";

    return student.name.toUpperCase();
}