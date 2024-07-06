// define an object that represent a student's information including name,age, and grade. implement a method to update the student's grade.


const student={
    name:"raman",
    age:18,
    grade:"C",
};
function updateGrade(newGrade){
student.grade=newGrade;
   
}

updateGrade("B");


console.log(student);