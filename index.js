let employees = [];

let count = 0;

let container = document.querySelector("#container");
let dltBtn = document.querySelectorAll(".dltBtn");
let addBtn = document.querySelector("#addBtn");
let msg = document.querySelector("#msg");
let form = document.querySelector("form");

if (employees.length == 0)
  container.innerHTML = `
<h3>Added Employees</h3>
<h3 style="text-align: center; width: 50%">Data not found</h3>`;

function renderItems() {
  container.innerHTML = "<h3>Added Employees</h3>";
  employees.forEach((i, index) => {
    container.innerHTML += `
        <div class="row">
                <div id="data">
                    <p>${i.name}</p>
                    <p>${i.profession}</p>
                    <p>${i.age}</p>
                </div>
            <button class="dltBtn" data-index="${index}">Delete</button>
        </div>
        `;
  });

  if (employees.length == 0)
    container.innerHTML = `
<h3>Added Employees</h3>
<h3 style="text-align: center; width: 50%">Data not found</h3>`;
}

function submitUser() {
  let fname = document.querySelector("#fname").value;
  let profession = document.querySelector("#profession").value;
  let age = document.querySelector("#age").value;

  if (fname === "" || profession === "" || age === "") {
    msg.textContent =
      "Error :Please Make sure All the field before adding in an emplyee";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  employees.push({
    id: count++,
    name: fname,
    profession: profession,
    age: age,
  });
  renderItems();
  msg.textContent = "Success : Message Added";
  msg.style.color = "green";
  msg.style.display = "block";

  form.reset();
  document.querySelector("#fname").focus();
  console.log(employees);
}

addBtn.addEventListener("click", () => submitUser());

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("dltBtn")) {
    console.log("clicked");
    let index = event.target.getAttribute("data-index");
    employees.splice(index, 1);
    renderItems();
  }
});

form.addEventListener("keypress", (e) => {
  if (e.target.name === "fname" && e.key === "Enter")
    document.querySelector("#profession").focus();
  else if (e.target.name === "profession" && e.key === "Enter")
    document.querySelector("#age").focus();
  // console.log(e.target.name)
  else if (e.target.name === "age" && e.key === "Enter") {
    e.preventDefault();
    submitUser();
  }
});
