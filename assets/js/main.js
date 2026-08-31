window.addEventListener('DOMContentLoaded', () => {
    // Scroll a una sección
    document.getElementById('inicio')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('scroll1')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('scroll1')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-scroll2')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('scroll2')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-scroll3')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('scroll3')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-scroll4')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('scroll3')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('link-changelog')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('changes')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Nav toggle responsive Mobile
    document.getElementById('nav-toggle')?.addEventListener('click', function() {
        document.getElementById('nav-links')?.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            // altura de la barra fija
            const nav = document.getElementById('nav-bar');
            const navHeight = nav ? nav.getBoundingClientRect().height : 0;

            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8; // pequeño margen

            window.scrollTo({
                top: Math.max(0, top),
                behavior: 'smooth'
            });

            // accesibilidad: mover foco al elemento destino
            const prevTab = target.getAttribute('tabindex');
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            if (prevTab === null) target.removeAttribute('tabindex');
            else target.setAttribute('tabindex', prevTab);

            // si el menú móvil está abierto, ciérralo
            document.getElementById('nav-links')?.classList.remove('active');
        });
    });
});