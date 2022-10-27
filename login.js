function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="user"&& password=="user"){
        // alert("admin login sucessfully");
        // window.open("student.html","_self");
        window.location ="student_summary.html";
        return false;
        

    }

    else if(username=="admin" && password=="admin"){
        window.location ="placementoff.html";
    }

    else{
        alert("login failed | Invalid credentials");
    }
}
