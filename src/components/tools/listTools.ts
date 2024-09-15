export interface Tool {
    name: string;
    description: string;
    site: string;
    img: string;
}

export const listTools: Tool[] = [
    {
        name: "NVDA",
        description: "É um leitor de tela utilizado principalmente por deficientes visuais, ajuda trazendo a descrição da tela.",
        img: "https://images.prismic.io/audioeye-web/0086d376-1064-4d45-966e-36e228fcb181_nvda-screen-reader-and-web-accessibility_cover_1%20(1).jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1247&h=655",
        site: "https://www.nvaccess.org/download/"
    },
    {
        name: "Be My Eyes",
        description: "Aplicativo que conecta deficientes visuais a voluntários para assistência por vídeo, ajudando na descrição de objetos e leitura de textos.",
        img: "https://cdn.prod.website-files.com/5a5decba6b273e0001a4c1bb/5da42fb8ab57bdb110bba274_New_logo_cover.png",
        site: "https://www.bemyeyes.com/language/portuguese-brazil"
    },
    {
        name: "Virtual Magnifying Glass",
        description: "Amplia textos e imagens em tela ao mover o cursor do mouse, funcionando como uma lupa virtual.",
        img: "https://magnifier.sourceforge.net/screenshot_linux.jpeg",
        site: "https://magnifier.sourceforge.net/"
    },
    {
        name: "Adblock",
        description: "É uma extensão de código aberto, para a filtragem de conteúdo e anúncios.",
        img: "https://getadblock.com/images/platforms/chrome/hero_image_exportable.svg",
        site: "https://chromewebstore.google.com/detail/adblock-bloquear-an%C3%BAncios/gighmmpiobklfepjocnamgkkbiglidom?hl=pt-BR&pli=1"
    },
    {
        name: "Bitwarden",
        description: "Gerenciador de senhas gratuito e de código aberto, permitindo o armazenamento seguro de senhas e dados pessoais.",
        img: "https://i.pcmag.com/imagery/reviews/05JPSXpKxx9c5oL8wwZMAkX-27.fit_scale.size_1028x578.v1622837895.png",
        site: "https://play.google.com/store/apps/details?id=com.x8bit.bitwarden&hl=pt_BR"
    },
    {
        name: "Jitsi Meet",
        description: "Plataforma de videoconferência gratuita e de código aberto, que permite realizar reuniões online sem a necessidade de criar contas.",
        img: "https://blog.4linux.com.br/wp-content/uploads/2021/03/banner.png",
        site: "https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=pt_BR"
    },
    {
        name: "Google Keep",
        description: "Uma ferramenta de anotações simples que pode ajudar idosos a organizar tarefas e lembretes com facilidade. Oferece suporte a notas de voz e imagem.",
        img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*e7x00YNhzAc2akGV.jpg",
        site: "https://keep.google.com/"
    },
    {
        name: "Google Assistant",
        description: "Assistente virtual gratuito da Google, que pode ajudar usuários a navegar na internet, enviar mensagens e configurar lembretes apenas com comandos de voz.",
        img: "https://sempreupdate.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=904&height=508&format=.png&quality=91&imagick=/wp-content/uploads/2020/04/google-assistente-agora-disponibiliza-conteudo-de-noticias-sobre-o-novo-coronavirus.png",
        site: "https://play.google.com/store/apps/details?id=com.google.android.apps.googleassistant&hl=en_US"
    },
];
