$(document).ready(function () {

    let nameReg = "";
    let passwpodReg = "";
    let emailReg = "";
    let idReferidoReg = "";
    var expresionRegular = /^[a-z\s]+$/i;
    errorClass = "border-red";
    let todoBien = false;
    let perrito = false;
    let cristianScript = false;
    let ok = "border-success";
    let passwordRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    let eightchar = /(?=.{8,})/;
    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let sdfsdf = false;

    function validation(id, msg, who, regexp) {
        $(id).focusout(() => {
            let store = $.trim($(id).val());
            if (store.length == "") {
                $(msg).html(`
                <p class="animated fadeInDown faster">
                ${who} es requerido 
                </p>                    `);
                $(id).addClass(errorClass);
                nameReg = "";
            } else if (regexp.test(store)) {
                $(msg).html('');
                $(id).removeClass(errorClass);
                $(id).addClass(ok);
                console.log('correo correcto');
                console.log($(id).val());
                todoBien = !false;
            } else {
                $(msg).html(`
                <p class="animated fadeInDown">Formato incorrecto para ${who} </p>   
                `);
                $(id).addClass(errorClass);
            }
        });
    };

    function pwdValidation(id, msgDiv, who) {
        $(id).focusout(() => {
            let bool = !($(id).val() === '');
            if (!(!!bool)) {
                $(msgDiv).html(`
            <p class=animated fadeInDown> Contraseña Requerida </p>
            `);
            } else {
                let message = `
                <p class=position-static display-inline-block> </p>
                `;
                let temp = message;
                if (!(passwordRegExp.test($(id).val()))) {
                    message = `<p class=position-static display-inline-block> La contraseña debe tener al menos un numero y una Mayuscula</p>`;
                }
                if (!(eightchar.test($(id).val()))) {
                    message = `<p class=position-static display-inline-block> La contraseña debe tener al menos 8 caracteres</p>`;
                }

                if (message === temp) sdfsdf = !false;
                $(".name-error3").html(message);
            }
        });
    }

    $("#pwdreg2").focusout(() => {
        console.log(sdfsdf);

        let msg = $("#pwdreg").val() + $("#pwdreg2").val();


        if (sdfsdf) {
            // xd jajaja

            if (!(($("#pwdreg").val()) !== ($('#pwdreg2')))) {
                let message = `<p class=position-static display-inline-block> Las contraseñas no coinciden </p>`;
                $(".name-error3").html(message);
                $('#pwdreg').val("");
                $('#pwdreg2').val("");

            } else {
                let message = `<p class="animated bounceIn text-center ok"><b>Perfecto</b></p>`;
                $(".name-error4").html(message);
                console.log(msg);
                sdfsdf = !sdfsdf;
                perrito = !false;
            }
        } else {
            let message = ``;
            $(".name-error4").html(message);

        }
    });
    validation("#emailreg", ".name-error2", "El Correo", emailRegExp);
    validation("#userreg", ".name-error", "El usuario", expresionRegular);
    pwdValidation("#pwdreg", ".name-error3", "La contraseña");

    $(".submitreg").hover(() => {
        cristianScript = true;
        if (todoBien && perrito && cristianScript) {
            nameReg = $("#userreg").val();
            passwpodReg = $("#pwdreg").val();
            emailReg = $("#emailreg").val();
            idReferidoReg = $("#idrefreg").val();
            let objeto = {};
            objeto.nameReg = nameReg;
            objeto.passwpodReg = passwpodReg;
            objeto.emailReg = emailReg;
            objeto.idReferidoReg = idReferidoReg;
            if (objeto) console.log(objeto);
            $.ajax({
                type: 'POST',
                url: 'ajax/signup.php',
                data: objeto,
                success: function (feedback) {
                    console.log('FROM BACKEND');
                    console.log(feedback);
                    let response = JSON.parse(feedback);
                    if (feedback.success) {
                        Swal.fire({
                            type: "success",
                            title: feedback["msg"]
                        });
                    } else {
                        Swal.fire({
                            type: "error",
                            title: feedback["msg"]
                        });
                    }
                    if (!feedback) {
                        Swal.fire({
                            type: "error",
                            title: "No hay conexion con php"
                        });
                    }
                }
            });
        }
    });


})