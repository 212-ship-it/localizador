function updateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

// Geolocalización
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            document.getElementById('location').textContent =
                `📍 Lat: ${lat}, Lon: ${lon}`;
        },
        () => {
            document.getElementById('location').textContent =
                '📍 Ubicación no permitida';
        }
    );
} else {
    document.getElementById('location').textContent =
        '📍 Geolocalización no soportada';
}
