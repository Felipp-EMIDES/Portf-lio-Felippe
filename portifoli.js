document.addEventListener('DOMContentLoaded', function () {
    // Funções de Navegação
    const navInicio = document.querySelector('nav.menu-desktop ul li:nth-child(1) a');
    const navEspecialidades = document.querySelector('nav.menu-desktop ul li:nth-child(2) a');
    const navSobre = document.querySelector('nav.menu-desktop ul li:nth-child(3) a');
    const navProjetos = document.querySelector('nav.menu-desktop ul li:nth-child(4) a');

    if (navInicio) {
        navInicio.addEventListener('click', function () {
            window.scrollTo(0, 0);
        });
    }

    if (navEspecialidades) {
        navEspecialidades.addEventListener('click', function () {
            document.querySelector('.especialidades').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (navSobre) {
        navSobre.addEventListener('click', function () {
            document.querySelector('.sobre').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (navProjetos) {
        navProjetos.addEventListener('click', function () {
            document.querySelector('.portifolio').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botões de Contato
    const btnContatoTopo = document.querySelector('.topo-do-site .btn-contato button');
    const btnContatoMenu = document.querySelector('.btn-contato button');

    if (btnContatoTopo) {
        btnContatoTopo.addEventListener('click', function () {
            window.location.href = 'mailto:megaplusms2@gmail.com.br';
        });
    }

    if (btnContatoMenu) {
        btnContatoMenu.addEventListener('click', function () {
            window.location.href = 'mailto:megaplusms2@gmail.com.br';
        });
    }

    // Links de Redes Sociais
    const btnInstagram = document.querySelectorAll('.btn-social a:nth-child(1)');
    const btnYouTube = document.querySelectorAll('.btn-social a:nth-child(2)');
    const btnLinkedIn = document.querySelectorAll('.btn-social a:nth-child(3)');

    btnInstagram.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://instagram.com/_lippe14', '_blank');
        });
    });

    btnYouTube.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://youtube.com/sFelippe_Matheus', '_blank');
        });
    });

    btnLinkedIn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://linkedin.com/in/_lippe14', '_blank');
        });
    });

    // Portfólio - Projetos
    const projetoCalculadora = document.querySelector('.portifolio .img-port:nth-child(1)');
    const projetoMercadinho = document.querySelector('.portifolio .img-port:nth-child(2)');

    if (projetoCalculadora) {
        projetoCalculadora.addEventListener('click', function () {
            window.open('Projetos para o portifolio/calculadora.html', '_blank');
        });
    }

    if (projetoMercadinho) {
        projetoMercadinho.addEventListener('click', function () {
            window.open('Projetos para o portifolio/Mercadinho.html', '_blank');
        });
    }

    // Formulário de Envio de Mensagem
    const form = document.querySelector('.formulario form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = form.querySelector('input[placeholder="Seu nome completo:"]').value;
            const mensagem = form.querySelector('textarea').value;
            const email = 'megaplusms2@gmail.com.br';
            window.location.href = `mailto:${email}?subject=Contato de ${nome}&body=${mensagem}`;
        });
    }
});
