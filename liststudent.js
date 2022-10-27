
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function change1() // no ';' here
{
  var elem = document.getElementById("mybut1");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change2() // no ';' here
{
  var elem = document.getElementById("mybut2");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change3() // no ';' here
{
  var elem = document.getElementById("mybut3");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change4() // no ';' here
{
  var elem = document.getElementById("mybut4");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change5() // no ';' here
{
  var elem = document.getElementById("mybut5");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change6() // no ';' here
{
  var elem = document.getElementById("mybut6");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

function change7() // no ';' here
{
  var elem = document.getElementById("mybut7");
  if (elem.value == "unblock") elem.value = "block";
  else elem.value = "unblock";
}

