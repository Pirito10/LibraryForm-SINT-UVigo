function enviar() {

    //Comprobamos que el formato del campo "Login" sea correcto
    var cloginInput = document.getElementById("clogin");
    var cloginValue = cloginInput.value;
    var cloginPattern = /^[a-z0-9]{4,8}$/;

    if (cloginValue && !cloginPattern.test(cloginValue)) {
        alert("El formato del campo \"Login\" es incorrecto. Debe contener entre 4 y 8 caracteres alfanuméricos en minúscula");
        return false;
    }

    //Comprobamos que el formato del campo "Contraseña" sea correcto
    var cpasswdInput = document.getElementById("cpasswd");
    var cpasswdValue = cpasswdInput.value;
    var cpasswdPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[+\-*/])[A-Za-z0-9+\-*/]{6,12}$/;

    if (cpasswdValue && !cpasswdPattern.test(cpasswdValue)) {
        alert("El formato del campo \"Contraseña\" es incorrecto. Debe contener entre 6 y 12 caracteres, al menos una mayúscula y una minúscula (sin acentos), un número y un símbolo de operación aritmética");
        return false;
    }

    //Comprobamos que el formato del campo "DNI" sea correcto
    var cdniInput = document.getElementById("cdni");
    var cdniValue = cdniInput.value;
    var cdniPattern = /^[0-7][0-9]{7}[A-Z]$/;

    if (cdniValue && !cdniPattern.test(cdniValue)) {
        alert("El formato del campo \"DNI\" es incorrecto. Debe contener 8 dígitos, comenzando por un número entre 0 y 7, y una letra mayúscula");
        return false;
    }

    //Rellenamos el campo "hidden" con información del navegador usado
    var cbrowserInput = document.getElementById("cbrowser");
    cbrowserInput.value = navigator.userAgent;

    //Obtenemos el método de envío y la codificación
    var cmethodInput = document.getElementById("cmethod");
    var cmethodValue = cmethodInput.value;
    var cencodingInput = document.getElementById("cencoding");
    var cencodingValue = cencodingInput.value;

    //Cambiamos el método de envío y la codificación
    var form = document.querySelector("form");
    form.method = cmethodValue;
    form.enctype = cencodingValue;

    return true;
}

//Función que marca todos los géneros literarios al hacer click en la casilla de marcar todos
function marcarTodos(marcarCheckbox) {

    //Comprobamos si se ha marcado o desmarcado la casilla
    if (marcarCheckbox.checked == true) {
        var checkboxes = document.getElementsByName("cgenre[]");

        //Recorremos la lista de los checkboxes marcando cada uno
        for (checkbox of checkboxes) {
            checkbox.checked = true;
        }

        //Desmarcamos la casilla de desmarcar todos
        var desmarcarCheckbox = document.getElementById("desmarcar");
        desmarcarCheckbox.checked = false;
    }
}

//Función que desmarca todos los géneros literarios al hacer click en la casilla de desmarcar todos
function desmarcarTodos(desmarcarCheckbox) {

    //Comprobamos si se ha marcado o desmarcado la casilla
    if (desmarcarCheckbox.checked == true) {
        var checkboxes = document.getElementsByName("cgenre[]");

        //Recorremos la lista de los checkboxes desmarcando cada uno
        for (checkbox of checkboxes) {
            checkbox.checked = false;
        }

        //Desmarcamos la casilla de marcar todos
        var marcarCheckbox = document.getElementById("marcar");
        marcarCheckbox.checked = false;
    }
}