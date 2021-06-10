// 1) Написать функцию, которая выводит список всех сотрудников в список <ul>.

function clearEmployeesPlaceholder() {
    const PLACEHOLDER = employeesPlaceholder;
    document.getElementById(PLACEHOLDER).innerHTML = "";

}


function showEmployees(employees) {
    clearEmployeesPlaceholder();
    const ul = document.createElement("ul");

    for (let employee of employees) {
        const li = document.createElement("li");
        ul.appendChild(li);

        li.innerHTML = employee.name+" "+employee.surname;

    }
    document.getElementById(PLACEHOLDER).appendChild(ul);
}

// 2) Запускать функцию показа списка сотрудников при открытии страницы.

// function runUI() {
//     showEmployees(DATA.employees);
// }

// 3) Создать форму с возможностью добавить нового сотрудника и полями name и surname.

function addEmployeeUI() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const id = addEmployee(name, surname);
    showEmployees(DATA.employees);
}

// Если name или surname не заполнены, должно показываться сообщение об ошибке.

function addEmployeeUI() {
    let errorHTML = "";

    const name = document.getElementById("name").value;
    if (name=="") {
        errorHTML += "- Имя сотрудника должно быть задано<br>";
    }
    const surname = document.getElementById("surname").value;
    if (surname=="") {
        errorHTML += "- Фамилия сотрудника должна быть задана<br>";
    }
    document.getElementById("addEmployeeFormErrorMessage")
        .innerHTML = errorHTML;
    if (errorHTML.length != 0) return;



    addEmployee(name, surname);
    // showEmployees(DATA.employees);

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
}

