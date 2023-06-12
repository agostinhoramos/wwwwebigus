import Link from 'next/link'

const faqs = [
  [
    {
      question: 'Quais serviços o Webigus oferece?',
      answer:
        'O Webigus oferece serviços de criação de websites e plugins personalizados, utilizando tecnologias como Next.js, Tailwind CSS e Django.',
    },
    {
      question: 'Quanto tempo leva para desenvolver um website ou plugin?',
      answer:
        'O tempo de desenvolvimento pode variar dependendo da complexidade do projeto. O Webigus trabalhará em estreita colaboração com você para estabelecer prazos realistas e entregar o projeto dentro do período acordado.',
    },
    {
      question: 'Posso ter um design personalizado para o meu website?',
      answer:
        'Sim, o Webigus oferece designs personalizados para atender às necessidades exclusivas de cada cliente. Eles podem criar um design exclusivo que reflita sua identidade e objetivos de negócios.',
    },
  ],
  [
    {
      question: 'Os websites desenvolvidos pelo Webigus são responsivos?',
      answer:
        'Sim, o Webigus desenvolve websites responsivos, que se adaptam a diferentes dispositivos e tamanhos de tela, proporcionando uma experiência de navegação consistente e agradável em qualquer dispositivo.',
    },
    {
      question: 'O Webigus oferece suporte técnico após o lançamento do projeto?',
      answer:
        'Sim, o Webigus fornece suporte técnico contínuo para resolver quaisquer problemas técnicos, realizar atualizações de software e responder a perguntas relacionadas aos websites e plugins desenvolvidos.',
    },
    {
      question: 'Posso personalizar meu website ou plugin no futuro?',
      answer:
        'Sim, o Webigus oferece recursos de personalização avançados. Eles podem fornecer um painel de controle intuitivo que permite ajustar e modificar elementos do website ou plugin de acordo com suas necessidades em qualquer momento.',
    },
  ],
  [
    {
      question: 'O Webigus otimiza os websites para mecanismos de busca (SEO)?',
      answer:
        'Sim, o Webigus pode otimizar seus websites seguindo as práticas recomendadas de SEO. Isso ajuda a melhorar a visibilidade e o posicionamento nos resultados de pesquisa, aumentando as chances de ser encontrado pelos usuários.',
    },
    {
      question: 'Como são feitas as integrações com mídias sociais?',
      answer:
        'O Webigus pode integrar recursos de mídias sociais em seus websites, permitindo que os visitantes compartilhem facilmente o conteúdo em plataformas como Facebook, Twitter, Instagram e outras.',
    },
    {
      question: 'O Webigus oferece serviços de manutenção e atualizações regulares?',
      answer:
        'Sim, o Webigus pode fornecer serviços de manutenção contínua e atualizações regulares para garantir que seus websites e plugins permaneçam funcionais, seguros e atualizados com as últimas tecnologias.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <div className='mx-auto max-w-7xl px-6 sm:px-8 xl:px-0'>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Se tiver mais alguma pergunta,{' '}
            <Link
              href="mailto:info@webigus.com"
              className="text-secondary-950 transition-colors hover:text-secondary-700 underline"
            >
              deixe-nos a sua mensagem
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
