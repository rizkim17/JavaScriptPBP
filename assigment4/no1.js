let studentsScore = [
    { name: 'Andi', score: 90 },
    { name: 'Rudi', score: 80 },
    { name: 'Dira', score: 100 }
  ];
  
  function getTopStudent(students) {
    let topStudent = students[0];
  
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > topStudent.score) {
        topStudent = students[i];
      }
    }
  
    return `${topStudent.name}: ${topStudent.score}`;
  }
  
  console.log(getTopStudent(studentsScore));