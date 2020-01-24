// objects and arrays
const employees = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      salary: "$120000"
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
      salary: "$80000"
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
      salary: "$75000"
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
      salary: "$130000"
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
      salary: "$100000"
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
      salary: "$100000"
    }
  ]
};

const chars = employees.data;
// console.log(chars);
let arr = [];
for (let i = 0; i < chars.length; i++) {
  for (let key in chars[i]) {
    if (arr.indexOf(key) === -1) {
      arr.push(key);
    }
  }
}
console.log(arr);
var sortArr = [];
function myTableFunc() {
  const maintable = document.createElement("TABLE");
  maintable.setAttribute("id", "myTable");
  maintable.className = "table table-striped";
  document.getElementById("second").appendChild(maintable);

  //console.log(theKeys);
  const tableHead = document.createElement("thead");
  tableHead.className = "thead-dark";

  const headerRow = document.createElement("tr");
  for (let i = 0; i < chars.length; i++) {
    const th = document.createElement("th");
    th.innerHTML = arr[i];
    headerRow.appendChild(th);
  }
  tableHead.appendChild(headerRow);
  maintable.appendChild(tableHead);

  // CREATE TABLE BODY .
  const tableBody = document.createElement("tbody");

  for (let x = 0; x < chars.length; x++) {
    const y = document.createElement("TR");
    y.id = "r" + x;
    document.getElementById("myTable").appendChild(y);
    for (let j = 0; j < arr.length; j++) {
      const td = document.createElement("td");
      //td.id="d"+j;
      td.innerHTML = chars[x][arr[j]];
      y.appendChild(td);
    }
    tableBody.appendChild(y);
  }

  maintable.appendChild(tableBody);
}
myTableFunc();

//Sort Alphabetically
const btn = document.createElement("button");
btn.id = "btn1";
btn.className = "btn btn-primary";
const t = document.createTextNode("Alphabetically");
btn.appendChild(t);
btn.addEventListener("click", sortByName);
btn.addEventListener("click", function() {
  switchButton(1, 2);
});

const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.className = "btn btn-primary ml-2";
const s = document.createTextNode("Salary");
btn2.appendChild(s);
//btn2.addEventListener('click',sortBySalary);
btn2.addEventListener("click", function() {
  switchButton(2, 1);
});
//btn2.addEventListener('click',switchButton(2,1));

document.getElementById("forButtons").appendChild(btn);
document.getElementById("forButtons").appendChild(btn2);

function switchButton(button1, button2) {
  // alert('hey');
  var button1 = document.getElementById("btn" + button1);
  var button2 = document.getElementById("btn" + button2);
  button1.disabled = true;
  button2.disabled = false;
}

function sortByName() {
  //sorting the objects alphabetically of ffirst_name
  function compare(a, b) {
    const bandA = a.first_name;
    const bandB = b.first_name;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  sortArr = [];
  sortArr = [...chars].sort(compare);
  nameFunc();
  console.log(sortArr);
}

function sortBySalary() {
  // alert("hey");
  var employeeSalary = [];
  for (var n = 0; n < chars.length; n++) {
    var y = chars[n].salary;
    employeeSalary.push(y);
  }
  console.log(employeeSalary);

  //const chars = ["$120000", "$80000", "$75000", "$130000", "$100000", "$100000"];
  var sortArr = [];
  for (var i = 0; i < employeeSalary.length; i++) {
    var x = Number(employeeSalary[i].replace(/(^\$|,)/g, ""));
    sortArr.push(x);
  }
  function compare(a, b) {
    return a - b;
  }
  sortArr.sort(compare);
  nameFunc();
  console.log(sortArr);
}

//create table after sorting
function nameFunc() {
  const maintable = document.createElement("TABLE");
  maintable.setAttribute("id", "myNameTable");
  maintable.className = "table table-striped";
  document.getElementById("sortByName").appendChild(maintable);

  const tableHead = document.createElement("thead");
  tableHead.className = "thead-dark";

  const headerRow = document.createElement("tr");
  for (let i = 0; i < chars.length; i++) {
    const th = document.createElement("th");
    th.innerHTML = arr[i];
    headerRow.appendChild(th);
  }
  tableHead.appendChild(headerRow);
  maintable.appendChild(tableHead);

  // CREATE TABLE BODY .
  const tableBody = document.createElement("tbody");

  for (let x = 0; x < chars.length; x++) {
    const y = document.createElement("TR");
    //y.id="r"+x;
    document.getElementById("myNameTable").appendChild(y);
    for (let j = 0; j < sortArr.length; j++) {
      const td = document.createElement("td");
      //td.id="d"+j;

      td.innerHTML = sortArr[x][arr[j]];
      y.appendChild(td);
    }
    tableBody.appendChild(y);
  }

  maintable.appendChild(tableBody);
}
