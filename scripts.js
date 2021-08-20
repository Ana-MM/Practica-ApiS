function empezar() {
    zonaDatos = document.getElementById("zonaDatos");
    let archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);
}


function procesar(e) {
    let archivos = e.target.files;
    zonaDatos.innerHTML = "";
    let mi_archivo = archivos[0];
        alert(mi_archivo.type);
    if (!mi_archivo.type.match(/video/)) {
        alert("El archivo seleccionado no es un video");
    } else {
        let zonaDatos = new FileReader();
        zonaDatos.readAsDataURL(mi_archivo);
        zonaDatos.addEventListener("load", mostrar_en_pantalla, false);
        alert("Cargando video...")
    }
}

function mostrar_en_pantalla(e) {
    let archivos = document.getElementById('archivos');
    zonaDatos.innerHTML = "";
    let mi_video = archivos.value;
    let extValidas = /(.mp4)$/i;

    if (!extValidas.exec(mi_video)) {
        archivos.value = '';
        return false;
    }
    let resultado = e.target.result;
    zonaDatos.innerHTML += "<video id='mi_video' src='" + resultado + "'width='500'>";
}

window.addEventListener("load", empezar, false);

// VALIDAR EXTENSION

function validarExt() {
        if (archivos.files && archivos.files[0]) {
            let zonaDatos = new FileReader();
            zonaDatos.onload = function (e) {
                document.getElementById('zonaDatos').innerHTML = e.target.result;
            };
            zonaDatos.readAsDataURL(archivos.files[0]);
        }
    }