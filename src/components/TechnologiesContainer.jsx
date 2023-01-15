import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
    {
        id: "html",
        name: "HTML5",
        decription:"HTML5 é a quinta versão do Hypertext Markup Language (HTML), que é utilizado para criar estrutura e conteúdo de páginas da web. Ele é composto de marcações, ou tags, que são usadas para dar formato ao conteúdo, como títulos, parágrafos, links, imagens e tabelas. ",
        icon: <DiHtml5 />,
    },
    {
        id: "css",
        name: "CSS3",
        decription:"CSS3 (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação de documentos escritos em HTML ou XML. Ele é usado para controlar a cor, fonte, tamanho, layout e outros aspectos visuais de elementos na página web.",
        icon: <DiCss3 />,
    },
    {
        id: "js",
        name: "JavaScript",
        decription:"JavaScript é uma linguagem de programação interpretada, de alto nível e dinâmica. Ela é utilizada principalmente para criar aplicações web interativas, como formulários, jogos, animações e interação com o usuário.",
        icon: <DiJsBadge />,
    },
    {
        id: "react",
        name: "React",
        decription:"React é uma biblioteca JavaScript de código aberto desenvolvida pela Facebook. Ela é utilizada para construir aplicações web de uma única página (SPA) e interfaces de usuário (UI) complexas. React se concentra em gerenciar o estado dos componentes e como eles se relacionam entre si, tornando-o uma escolha popular para aplicativos de alta performance.",
        icon: <DiReact />,
    },
];

const TechnologiesContainer = () => {
    return (
        <section className="tecknologies-container">
            <h2>Tecnologias</h2>
            <div className="tecknologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.decription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default TechnologiesContainer;
