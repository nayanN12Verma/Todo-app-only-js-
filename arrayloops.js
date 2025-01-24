let student = [["nayan" ,90],["shradha",85],["rajat" ,80]];

for(let i=0; i<student.length; i++){
   console.log(`info of student ${i+1}`);
   for(let j=0; j<student[i].length; j++){
      console.log(student[i][j]);
   }
}