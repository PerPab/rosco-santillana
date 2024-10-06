let lastAngle = 0; // Ángulo acumulado
const sectors = ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Sector 7"];
const totalSectors = sectors.length;
const degreesPerSector = 360 / totalSectors; // Grados por cada sector

// Esperar a que el DOM esté completamente cargado
window.onload = function () {
    const spinButton = document.getElementById('boton');
    spinButton.addEventListener('click', spin);
};

function spin() {
    const needle = document.getElementById('hoja');

    // Generar un número aleatorio de vueltas entre 2 y 6
    const spins = Math.floor(Math.random() * 5) + 2; // Valor entre 2 y 6 vueltas

    // Elegir un sector aleatorio
    const randomSector = Math.floor(Math.random() * totalSectors);

    // Calcular el ángulo final (mínimo 2 vueltas más el sector aleatorio)
    const finalAngle = lastAngle + spins * 360 + randomSector * degreesPerSector;

    // Aplicar animación de rotación
    needle.style.transition = "transform 4s ease-out";
    needle.style.transform = `rotate(${finalAngle}deg)`;

    // Calcular el sector seleccionado basado en el ángulo final mod 360
    setTimeout(() => {
        const normalizedAngle = finalAngle % 360; // Tomamos solo la parte de los grados en una vuelta completa
        const selectedSector = Math.floor(normalizedAngle / degreesPerSector); // Mapeamos el ángulo al sector correspondiente
        //document.getElementById('result').innerHTML = "Resultado: " + sectors[selectedSector];
        alert("Resultado: " + sectors[selectedSector])

        // Volver la aguja a la posición inicial sin animación después de 1 segundo
        setTimeout(() => {
            needle.style.transition = "none"; // Sin transición, para evitar la animación
            needle.style.transform = "rotate(0deg)"; // Colocar la aguja en la posición inicial
            lastAngle = 0; // Resetear el ángulo acumulado
        }, 1000); // Después de 1 segundo (después de que se muestre el resultado)

    }, 4000); // Tiempo que coincide con la duración de la animación (4s)
}
