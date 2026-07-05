function pruebaToastExito() {
  notificacionToast(
    "Diste click exitosamente",
    "Ejemplo de Toast de exito.",
    "exito",
    4000,
  );
}

function pruebaToastError() {
  notificacionToast("Error", "Ejemplo de Toast de error.", "error", 4000);
}

function pruebaToastInformacion() {
  notificacionToast(
    "Información",
    "La información esque el toast no informa nada.",
    "informacion",
    4000,
  );
}

function pruebaToastAdvertencia() {
  notificacionToast("Advertencia", "Vas bien :D.", "advertencia", 4000);
}

function toastOscuro() {
  notificacionToast(
    "Ejemplo de modo oscuro",
    "cambiamos el color",
    "informacion",
    4000,
    "img/informacion.svg",
    "#111827",
    "#ffffff",
    "#d1d5db",
    "#38bdf8",
  );
}

function toastMorado() {
  notificacionToast(
    "Morado",
    "Ejemplo de color morado.",
    "informacion",
    4000,
    "img/informacion.svg",
    "#f3e8ff",
    "#6b21a8",
    "#7e22ce",
    "#9333ea",
  );
}

function toastAzul() {
  notificacionToast(
    "Ejemplo de color azul",
    "Cambiamos a color azul",
    "exito",
    4000,
    "img/flechitaDeListo.svg",
    "#e0f2fe",
    "#075985",
    "#0369a1",
    "#0284c7",
  );
}

function toastRojo() {
  notificacionToast(
    "Ejempolo color rojo oscuro",
    "Podemos personalizar todos.",
    "error",
    4000,
    "img/exclamacion.svg",
    "#450a0a",
    "#ffffff",
    "#fecaca",
    "#ef4444",
  );
}
