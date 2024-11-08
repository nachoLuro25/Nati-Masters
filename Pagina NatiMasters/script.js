document.addEventListener('DOMContentLoaded', function () {
    const carritoMenu = document.getElementById("carritoMenu");
    const carritoItems = document.getElementById("carritoItems");
    const salirButton = document.getElementById("salirButton");
    const vaciar = document.getElementById("btn_vaciar");

    // Función para agregar productos al carrito
    window.agregarAlCarrito = function (nombre) {
        const item = document.createElement("li");
        item.classList.add("li_carrito");
        item.innerText = nombre;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText = 'eliminar';
        eliminarBtn.classList.add("btn_carrito");

        eliminarBtn.addEventListener('click', function () {
            item.remove();
        });

        item.appendChild(eliminarBtn);
        carritoItems.appendChild(item);
    };

    // Mostrar/ocultar carrito
    document.getElementById("carritoLink").addEventListener('click', function (event) {
        event.preventDefault();
        carritoMenu.style.display = 'block';
    });

    salirButton.addEventListener('click', function () {
        carritoMenu.style.display = 'none';
    });

    vaciar.addEventListener('click', function () {
        carritoItems.innerHTML = '';
    });
});
