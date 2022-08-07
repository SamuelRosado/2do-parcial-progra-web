function login(){
    var user, pass;

    user = document.getElementById("username").value; 
    pass = document.getElementById("password").value;

    if(user == "samuel" && pass == "1234"){

        window.location= "contact.html";
    }
    else{
        alert("Datos Incorrectos.");
    }
}

var selectedRow = null;
function onformsubmit(e){
    event.preventDefault();
    var formdata = readformdata();
    if (selectedRow == null) {
        insertNewRecord(formdata);
    } else {
        updateRecord(formdata);
    }
    resetForm();

}


function readformdata() {
    var formdata = {};
    formdata["firstname"] = document.getElementById("firstname").value;
    formdata["lastname"] = document.getElementById("lastname").value;
    formdata["email"] = document.getElementById("email").value;
    return formdata;
}

//Insertar datos
function insertNewRecord(data) {
    var table = document.getElementById("contactlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
//Eliminar contactos
function onDelete(td) {
    if (confirm('Quiere eliminar su contacto ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('contactlist').deleteRow(row.rowIndex);
        resetForm();
    }
}
//Resetear formulario
function resetForm() {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
    selectedRow = null;
}
//Editar contactos
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}
//ACtualizar
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.email;
    
}


function enviarmsg(){

    var name, email, sendmsg;

    name = document.getElementById("nombre").value; 
    email = document.getElementById("correo").value; 
    sendmsg = document.getElementById("ingresamensaje").value; 

    if(name == "" || email == "" && sendmsg == ""){

        alert("Debes llenar los campos vacios para poder enviar el mensaje.");

    }
    else{
        alert("Mensaje enviado.")
        document.getElementById("nombre").value = '';
        document.getElementById("correo").value = '';
        document.getElementById("ingresamensaje").value = '';
    }
}