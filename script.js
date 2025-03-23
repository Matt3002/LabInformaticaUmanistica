
        const menuToggle = document.getElementById('menuToggle');
        const sidebarMenu = document.getElementById('sidebarMenu');
        const body = document.body;
    
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            body.classList.toggle('menu-open');
        });
    
        document.addEventListener('click', (e) => {
            if(body.classList.contains('menu-open')) {
                body.classList.remove('menu-open');
            }
        });
    
        sidebarMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
