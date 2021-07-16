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

