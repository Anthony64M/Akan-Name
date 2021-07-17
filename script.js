
function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myName = document.getElementById("myName").value;
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById("message").innerHTML = "<strong> Sorry!!!You Didn't Submit a Valid Date!</strong>";
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById("message").innerHTML = `Hey  ${myName},  You were born on a  ${days[dayOfTheWeek]}  So Your Akan Name is ${maleAkanNames[dayOfTheWeek]}`;
                }
                else {
                    document.getElementById("message").innerHTML = `Hey ${myName}, You were born on a ${days[dayOfTheWeek]} so Your Akan Name is ${femaleAkanNames[dayOfTheWeek]}`;
                }
                break;
            }    
            else {
                document.getElementById("message").innerHTML = "<strong>Sorry But Gender is Required.</strong>";
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById("message").innerHTML = "";
}