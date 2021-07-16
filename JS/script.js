var akan = function(y, d, m, g){
    var maleNames = ["Kwasi", "Kudwo" "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var d = new Date(y, d, --m);
    if (g === "Male") {
        return d && maleNames[d.getDay()];
    }
    else{
        return d && femaleNames[d.getDay()];
    }
}

$(document).ready(function() {
    $("form#form").submit(function(event)  {
        var y = parseInt($("#year").val());
        var d = parseInt($("#date").val());
        var m = parseInt($("#month").val());
        var g = parseInt($("input:radio[name=gender]:checked").val());
        var result = akan(y, d, m, g);
        alert("Your Akan-Name is: " + result);

        document.getElementById("form").requestFullscreen();
    });
});