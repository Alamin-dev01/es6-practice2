class Student{
 constructor(sId,sNAme){
   this.id =sId;
   this.name =sNAme;
   this.school ='Kolimunnesa School'
 }
}
const student1 = new Student(12,"shuvo");
const student2= new Student(22,"Mahiya");
const student3= new Student(23,"bappi");


console.log(student1.name,student2.name,student3.name);