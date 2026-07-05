//COMPONENTE DE NOTIFICACION TOAST CREADO POR GOMEZ ROBLERO ANGEL JAHIR.
//TODOS LOS CAMPOS SON PERSONALIZABLES PARA QUE SE PUEDA REUTILIZAR DE UNA MEJOR MANERA.
//YA INCORPORAMOS CSS POR LO QUE NO ES NECESARIO CREAR UN ARCHIVO CSS SEPARADO.
function notificacionToast(
  titulo,
  mensaje,
  tipo,
  duracion,
  icono,
  colorDeFondo,
  colorDeTitulo,
  colorMensaje,
  colorIcono,
) {
  // Valores por defecto por si no se mandan parámetros o si alguno se escribe mal.
  titulo = titulo || "Notificación";
  mensaje = mensaje || "Este es un mensaje de notificación.";
  tipo = tipo || "exito";
  duracion = duracion || 4000;

  // Estilos dependiendo del tipo de toast.
  const estilosPorTipo = {
    exito: {
      icono: "img/flechitaDeListo.svg",
      fondo: "#f0fdf4",
      titulo: "#006b29ff",
      mensaje: "#15803d",
      iconoColor: "#006b29ff",
    },
    error: {
      icono: "img/exclamacion.svg",
      fondo: "#fef2f2",
      titulo: "#991b1b",
      mensaje: "#b91c1c",
      iconoColor: "#991b1b",
    },
    advertencia: {
      icono: "img/peligro.svg",
      fondo: "#fffbeb",
      titulo: "#92400e",
      mensaje: "#b45309",
      iconoColor: "#92400e",
    },
    informacion: {
      icono: "img/informacion.svg",
      fondo: "#eff6ff",
      titulo: "#1d4ed8",
      mensaje: "#2563eb",
      iconoColor: "#1d4ed8",
    },
  };

  // Se obtiene el estilo según el tipo elegido si no se escoge alguno por defecto es el de exito.
  const estilo = estilosPorTipo[tipo] || estilosPorTipo.exito;

  // Si no se mandan colores o icono, se usan los del tipo.
  icono = icono || estilo.icono;
  colorDeFondo = colorDeFondo || estilo.fondo;
  colorDeTitulo = colorDeTitulo || estilo.titulo;
  colorMensaje = colorMensaje || estilo.mensaje;
  colorIcono = colorIcono || estilo.iconoColor;

  // Busca si ya existe el contenedor de los toast, esto evita errores si existe algun contenedor creado desde el html.
  let contenedor = document.getElementById("toast-contenedor");

  // Si no existe, lo crea.
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.id = "toast-contenedor";
    document.body.appendChild(contenedor);
  }

  // Estilos del contenedor principal.
  contenedor.style.position = "fixed";
  contenedor.style.top = "20px";
  contenedor.style.right = "20px";
  contenedor.style.zIndex = "9999";
  contenedor.style.display = "flex";
  contenedor.style.flexDirection = "column";
  contenedor.style.alignItems = "flex-end";
  contenedor.style.gap = "12px";

  // Se crea el toast.
  let toast = document.createElement("div");
  toast.className = "toast";

  // Estilos del toast.
  toast.style.width = "fit-content";
  toast.style.minWidth = "250px";
  toast.style.maxWidth = "300px";
  toast.style.boxSizing = "border-box";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "14px";
  toast.style.padding = "14px 16px";
  toast.style.borderRadius = "9px";
  toast.style.background = colorDeFondo;
  toast.style.position = "relative";
  toast.style.overflow = "hidden";
  toast.style.pointerEvents = "auto";
  toast.style.fontFamily = "sans-serif";
  toast.style.boxShadow = "0 9px 15px rgba(0, 0, 0, 0.05)";

  // Se crea un div donde va el icono.
  let cajaIcono = document.createElement("div");

  cajaIcono.style.width = "36px";
  cajaIcono.style.height = "36px";
  cajaIcono.style.display = "flex";
  cajaIcono.style.alignItems = "center";
  cajaIcono.style.justifyContent = "center";
  cajaIcono.style.color = colorIcono;

  // Si el icono es SVG, se usa como máscara para poder cambiarle el color.
  if (icono.includes(".svg")) {
    let imagenIcono = document.createElement("div");

    imagenIcono.style.width = "20px";
    imagenIcono.style.height = "20px";
    imagenIcono.style.backgroundColor = colorIcono;
    imagenIcono.style.maskImage = "url(" + icono + ")";
    imagenIcono.style.maskRepeat = "no-repeat";
    imagenIcono.style.maskPosition = "center";
    imagenIcono.style.maskSize = "contain";

    cajaIcono.appendChild(imagenIcono);
  }

  // Si el icono es imagen normal, se agrega como img.
  else if (
    icono.includes(".png") ||
    icono.includes(".jpg") ||
    icono.includes(".jpeg") ||
    icono.includes(".webp")
  ) {
    let imagenIcono = document.createElement("img");
    imagenIcono.src = icono;
    imagenIcono.alt = tipo;
    imagenIcono.style.width = "20px";
    imagenIcono.style.height = "20px";
    imagenIcono.style.objectFit = "contain";

    cajaIcono.appendChild(imagenIcono);
  }

  // Si no es imagen, se muestra como texto.
  else {
    cajaIcono.textContent = icono;
  }

  // Contenedor del texto.
  let contenido = document.createElement("div");

  // Título del toast-
  let tituloElemento = document.createElement("strong");
  tituloElemento.textContent = titulo;
  tituloElemento.style.display = "block";
  tituloElemento.style.fontSize = "1rem";
  tituloElemento.style.marginBottom = "3px";
  tituloElemento.style.color = colorDeTitulo;

  // Mensaje del toast.
  let mensajeElemento = document.createElement("span");
  mensajeElemento.textContent = mensaje;
  mensajeElemento.style.fontSize = "0.90rem";
  mensajeElemento.style.opacity = "0.9";
  mensajeElemento.style.color = colorMensaje;

  // Se agregan título y mensaje al contenido.
  contenido.appendChild(tituloElemento);
  contenido.appendChild(mensajeElemento);

  // Se agregan el icono y el contenido al toast.
  toast.appendChild(cajaIcono);
  toast.appendChild(contenido);

  // Se muestra el toast en pantalla.
  contenedor.appendChild(toast);

  // Después de la duración indicada, se elimina el toast.
  setTimeout(function () {
    toast.remove();

    // Si ya no hay toasts, se elimina el contenedor.
    if (contenedor.children.length === 0) {
      contenedor.remove();
    }
  }, duracion);
}
