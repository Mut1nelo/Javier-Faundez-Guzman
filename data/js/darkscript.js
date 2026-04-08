window.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle + API color preference
    const btn = document.getElementById('btnToggle');
    const elementos = document.querySelectorAll('.darkmode');
    const STORAGE_KEY = "darkmode-activo";
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function setDarkOn() {
        elementos.forEach(el => el.classList.add('invertido'));
    }
    function setDarkOff() {
        elementos.forEach(el => el.classList.remove('invertido'));
    }

    function applyPreference(pref) {
        if (pref === 'dark') setDarkOn();
        else setDarkOff();
    }

    function toggleDarkMode() {
        if (!elementos.length) return;
        const activo = elementos[0].classList.contains("invertido");
        if (activo) {
            setDarkOff();
            localStorage.setItem(STORAGE_KEY, "no");
        } else {
            setDarkOn();
            localStorage.setItem(STORAGE_KEY, "sí");
        }
    }

    if (btn) btn.addEventListener('click', toggleDarkMode);

    // Inicialización:
    // 1) Si el usuario ya eligió (localStorage) -> respetar
    // 2) Si no, usar la preferencia del sistema
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "sí") {
        applyPreference('dark');
    } else if (stored === "no") {
        applyPreference('light');
    } else {
        applyPreference(prefersDark.matches ? 'dark' : 'light');
    }

    // Si el usuario no seleccionó manualmente, actualizar según cambios del sistema
    prefersDark.addEventListener('change', (e) => {
        const storedNow = localStorage.getItem(STORAGE_KEY);
        if (!storedNow) {
            applyPreference(e.matches ? 'dark' : 'light');
        }
    });
});