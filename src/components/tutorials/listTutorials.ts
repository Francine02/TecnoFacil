export interface Tutorials {
    name: string;
    description: string;
    site: string;
    img: string;
}

export const listTutorials: Tutorials[] = [
    {
        name: "Curso Rápido",
        description: "É canal que ensina na prática desde como mexer no celular, android ou apple, até sobre Excel e mais.",
        img: "https://res.infoq.com/articles/como-aprender-novas-tecnologias/pt/headerimage/image6-1595353128650.jpg",
        site: "https://www.youtube.com/c/CursoR%C3%A1pido/playlists"
    },
    {
        name: "Vivo",
        description: "No canal da Vivo se encontra playlists ensinando uma variedade de coisas. Recomendo as playlists: Descomplicando a Tecnologia Online e demais acerca de segurança.",
        img: "https://solucaosistemas.net/wp-content/uploads/2023/03/tecnologia-tablet-computador-internet-geral.jpg",
        site: "https://www.youtube.com/@Vivo/playlists"
    },
    {
        name: "Expert Cursos",
        description: "É possível encontrar diversos vídeos ensinando desde Word até informática.",
        img: "https://img.odcdn.com.br/wp-content/uploads/2024/04/imagem_curso_436.png",
        site: "https://www.youtube.com/@ExpertCursos/playlists"
    },
    {
        name: "Informática Descomplicada - Profº Jan Souza",
        description: "Possui diversos vídeos ensinando informática, junto com divesos programas.",
        img: "https://img-c.udemycdn.com/course/480x270/3626914_f165.jpg",
        site: "https://www.youtube.com/@Informatica-JanSouza/playlists"
    },
];
