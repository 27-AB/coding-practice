function getStudent() {
    return new Promise((resolve, reject) => {
        reject(new Error("Student not found"));
        });
    }


async function showStudent() {
   
try {
 const student = await getStudent();
 console.log(student.name.toUpperCase());
}
catch (error) {
    console.log(error.message);
}
}

showStudent();