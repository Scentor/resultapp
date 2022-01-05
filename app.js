var srch = document.getElementById("search");
var Tble = document.getElementById("tble");
var tbdy = Tble.getElementsByTagName("tbody")[0];
var Table = document.getElementById("Tble");
var tobdy = Table.getElementsByTagName("tbody")[0];
console.log(tbdy);
var studenta = {
  name: "Hassan",
  father: "Azeem",
  age: 15,
  result: "pass",
};
var studentb = {
  name: "Bilal",
  father: "Sohail",
  age: 13,
  result: "pass",
};
var studentc = {
  name: "Taha",
  father: "Zafar",
  age: 12,
  result: "pass",
};
var studentd = {
  name: "Mahad",
  father: "Arshad",
  age: 19,
  result: "Fail",
};
var studente = {
  name: "Hassan",
  father: "Azeem",
  age: 18,
  result: "Fail",
};
var c = [studenta, studentb, studentc, studentd, studente];

for (var i = 0; i < c.length; i++) {
  c[i].id = i+1;
}
console.log(studenta, studentb, studentc, studentd, studente);
var shown = false
function All(){
    if (shown == true){
        
        tobdy.innerHTML=" "
    }
  for (var i = 0; i < c.length; i++) {
    var row = tobdy.insertRow();
    var ID = row.insertCell();
    var Name = row.insertCell();
    var f_name = row.insertCell();
    var Result = row.insertCell();
    f_name.innerHTML = c[i].father
    ID.innerHTML = i+1;
    Name.innerHTML = c[i].name;
    Result.innerHTML = c[i].result;
  }
  shown = true

}
  var element = false

  function search() {
    
    if (element == true){
        tbdy.innerHTML=" "
    }
  for (var i = 0; i < c.length; i++) {
   
    if (c[i].id == srch.value) {
        element = true
      console.log(c[i].result);
      var row = tbdy.insertRow();
      var ID = row.insertCell();
      var Name = row.insertCell();
      var F_name = row.insertCell();
      var Result = row.insertCell();
      ID.innerHTML = i+1;
      Name.innerHTML = c[i].name;
      F_name.innerHTML = c[i].father
      Result.innerHTML = c[i].result;
      if (c[i].result == "pass") {
        row.setAttribute("class", "table-success");
      } else {
        row.setAttribute("class", "table-danger");
      }
    }
  }
}
