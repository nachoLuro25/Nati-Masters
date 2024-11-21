document.addEventListener('DOMContentLoaded', function () {
    const carritoMenu = document.getElementById("carritoMenu");
    const carritoItems = document.getElementById("carritoItems");
    const salirButton = document.getElementById("salirButton");
    const vaciar = document.getElementById("btn_vaciar");

    window.agregarAlCarrito = function (nombre) {
        const maxItems = 8;

        if (carritoItems.children.length >= maxItems) {
            alert("No se puede agregar más de 8 productos al carrito.");
            return;
        }

        const item = document.createElement("li");
        item.classList.add("li_carrito");
        item.innerText = nombre;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText = 'Eliminar';
        eliminarBtn.classList.add("btn_carrito");

        eliminarBtn.addEventListener('click', function () {
            item.remove();
        });

        item.appendChild(eliminarBtn);
        carritoItems.appendChild(item);
    };

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
