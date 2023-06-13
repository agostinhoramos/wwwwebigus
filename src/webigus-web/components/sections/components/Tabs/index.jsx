import Link from 'next/link'

const SectionTab = ({ title, desc, link }) => {
  return (
    <>
      <h2 className="mt-8 font-semibold text-primary-950">{title}</h2>
      <p className="mt-4 max-w-3xl space-y-6 ">{desc}</p>
      <div className="mt-4">
        <Link
          className="text-base font-semibold text-secondary-950 hover:text-secondary-700"
          href={link}
        >
          {`Explore all ${title.toLowerCase()}`}{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  )
}

export { SectionTab }