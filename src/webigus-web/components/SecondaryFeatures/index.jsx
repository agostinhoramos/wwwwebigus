import { useId } from 'react'

const features = [
  {
    name: 'Designs exclusivos',
    description:
      'Oferecemos designs personalizados e exclusivos para os websites, garantindo uma aparência única e atraente para cada cliente.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Desenvolvimento responsivo',
    description:
      'Websites responsivos, ou seja, adaptáveis a diferentes dispositivos e tamanhos de tela, proporcionando uma ótima experiência de navegação tanto em computadores quanto em dispositivos móveis.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Integração de tecnologias modernas',
    description:
      'Implementamos tecnologias modernas, como Next.js, Tailwind CSS e Django, para garantir um desempenho rápido, eficiente e seguro dos websites e plugins.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Otimização de mecanismos de busca (SEO)',
    description:
      'Otimizamos os websites para mecanismos de busca, seguindo as práticas recomendadas de SEO, o que pode ajudar a melhorar a visibilidade e o posicionamento nos resultados de busca.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Personalização avançada',
    description:
      'Oferecemos recursos de personalização avançados para os websites e plugins, permitindo que os clientes ajustem e modifiquem os elementos de acordo com suas necessidades específicas.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Integração de mídias sociais',
    description:
      'Incorporamos recursos de integração com mídias sociais, permitindo que os visitantes compartilhem facilmente o conteúdo do website em plataformas como Facebook, Twitter, Instagram, entre outras.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Suporte técnico',
    description:
      'Oferecemos suporte técnico dedicado aos clientes, auxiliando na resolução de problemas técnicos, atualizações de software e outras questões relacionadas aos websites e plugins desenvolvidos.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Manutenção e atualizações regulares',
    description:
      'Oferecmos serviços de manutenção contínua e atualizações regulares para garantir que os websites e plugins permaneçam funcionais, seguros e atualizados com as últimas tecnologias.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Integração de sistemas e APIs',
    description:
      'Integramos sistemas e APIs de terceiros, como serviços de pagamento, sistemas de gerenciamento de conteúdo (CMS) ou plataformas de comércio eletrônico, para adicionar funcionalidades extras aos websites e plugins.',
    icon: DeviceArrowIcon,
  }
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-5 sm:py-10"
    >
      <div className='mx-auto max-w-7xl px-6 sm:px-8 xl:px-0' >
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-primary-950">
            Descubra os Benefícios Exclusivos da WebiGus!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {'Estamos comprometidos em proporcionar uma experiência excepcional aos nossos clientes. Através dos nossos serviços de desenvolvimento de websites e plugins, oferecemos uma variedade de incentivos exclusivos para impulsionar o sucesso dos seus projetos online.'}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8 mx-auto" />
              <h3 className="mt-6 font-bold text-xl text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}