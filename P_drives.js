

function myFunction() {
    var date=document.getElementById("date").value;
    var company=document.getElementById("regby").value;
    var regby=document.getElementById("company").value;
    var job=document.getElementById("job").value;
    var eligi=document.getElementById("eligi").value;
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = date;
    cell2.innerHTML = company;
    cell3.innerHTML = regby;
    cell4.innerHTML = job;
    cell5.innerHTML = eligi;
  }



  