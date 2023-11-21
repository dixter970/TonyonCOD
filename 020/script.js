var students = [];

function addStudent() {
  var inputName = document.getElementById('studentName').value;

  if (students.includes(inputName)) {
    alert('Tento žák již existuje ve třídě.');
    return;
  }

  students.push(inputName);

  document.getElementById('studentName').value = '';

  displayStudentList();
}


function deleteStudent(index) {
  students.splice(index, 1);

  displayStudentList();
}

function displayStudentList() {
  var studentList = document.getElementById('studentList');
  studentList.innerHTML = ''; 

  
  for (var i = 0; i < students.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = students[i];

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat';
    deleteButton.onclick = function() {
      deleteStudent(i);
    };

    listItem.appendChild(deleteButton);
    studentList.appendChild(listItem);
  }
}