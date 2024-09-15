import { FaqItem } from "./FaqItem";

interface FaqDataItem {
  question: string;
  answer: string;
}

const faqData: FaqDataItem[] = [
  {
    question: "O que é inclusão digital?",
    answer: "Inclusão digital é garantir que pessoas de diferentes idades e origens tenham acesso e saibam usar a tecnologia de forma eficaz.",
  },
  {
    question: "Por que a inclusão digital é importante?",
    answer: "Com o avanço da tecnologia, estar conectado se tornou essencial para diversas atividades do cotidiano. Para os idosos, a inclusão digital é uma forma de manter-se informado, em contato com amigos e familiares, além de facilitar o acesso a serviços importantes, como bancos e consultas médicas online. ",
  },
  {
    question: "Como posso aumentar minha confiança ao usar a internet?",
    answer: "Você pode aumentar sua confiança praticando o uso de ferramentas digitais, aprendendo com tutoriais e buscando dicas sobre navegação segura.",
  },
  {
    question: "Como a TecnoFácil pode ajudar?",
    answer: "A TecnoFácil facilita o acesso a recursos digitais ao curar e compartilhar recomendações de ferramentas e canais do YouTube de terceiros. Com a TecnoFácil, você pode facilmente descobrir recursos confiáveis para aprimorar suas habilidades digitais e navegar pela tecnologia com mais confiança e eficiência.",
  },
  {
    question: "Como ter uma navegação segura?",
    answer: "Navegar na internet pode parecer complicado à primeira vista, mas com algumas dicas simples, é possível garantir uma experiência segura e tranquila. Mantenha seu dispositivo atualizado, utilize senhas fortes, evite clicar em links desconhecidos e sempre busque ajuda se tiver dúvidas.",
  },
  {
    question: "* Contato e Suporte *",
    answer: "Se você tiver alguma dúvida ou precisar de ajuda, estamos à disposição para oferecer suporte. Entre em contato conosco através da aba Suporte ou pelos canais indicados. Queremos garantir que você tenha uma experiência tranquila e agradável enquanto navega no mundo digital. Não hesite em nos procurar!",
  },
]

export function Faq() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4 pb-32 sm:pb-44 lg:pb-24 2xl:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-emerald-700 mb-4 text-center">Perguntas Frequentes</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
