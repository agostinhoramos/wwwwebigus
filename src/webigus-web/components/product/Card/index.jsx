import Link from 'next/link';
import Image from 'next/image';

const Card = ({ id, datetime, status, productName, productDesc, link, downloads, imageSrc, imageAlt }) => {

    return (
        <>
            <div key={id} className="group border transition-colors hover:border-gray-300 hover:group-hover rounded-md overflow-hidden relative">
                <Link className={"rounded-md"} href={link} >
                    <div className={"bg-gray-50 relative flex h-48"} >
                        <Image
                            fill
                            src={imageSrc}
                            alt="Picture of the author"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover bg-cover absolute"
                            />
                    </div>
                    <div className="absolute bottom-20 left-3 p-1 -space-x-2 overflow-hidden">
                            <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-transparent"
                            src="/img/django.jpg"
                            alt=""
                            />
                            <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="/img/nextjs.png"
                            alt=""
                            />
                            <img
                            className="inline-block h-10 w-10 rounded-full ring-2 bg-white ring-white"
                            src="/img/python.png"
                            alt=""
                            />
                            <img
                            className="inline-block h-10 w-10 rounded-full ring-2 bg-white ring-white"
                            src="/img/wordpress.png"
                            alt=""
                            />
                        </div>
                    <div className='relative flex flex-col h-28 p-3' >
                        <div className='flex flex-row text-gray-600' >
                            <div className='text-base basis-1/2' ></div>
                            <div className='text-base basis-1/2' ></div>
                            <div className='text-base basis-1/4 text-right' >
                            <svg className='inline mb-1 fill-gray-600' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="12px" height="12px"><path d="M 11 0 C 9.34375 0 8 1.34375 8 3 L 8 11 L 4.75 11 C 3.339844 11 3.042969 11.226563 4.25 12.4375 L 10.84375 19.03125 C 13.042969 21.230469 13.015625 21.238281 15.21875 19.03125 L 21.78125 12.4375 C 22.988281 11.226563 22.585938 11 21.3125 11 L 18 11 L 18 3 C 18 1.34375 16.65625 0 15 0 Z M 0 19 L 0 23 C 0 24.65625 1.34375 26 3 26 L 23 26 C 24.65625 26 26 24.65625 26 23 L 26 19 L 24 19 L 24 23 C 24 23.550781 23.550781 24 23 24 L 3 24 C 2.449219 24 2 23.550781 2 23 L 2 19 Z"/></svg>
                            <span className='pl-2 text-sm'>{ downloads }</span>
                            </div>
                        </div>
                        <div className='text-lg font-medium transition-colors group-hover:text-primary-950' >
                            { productName }
                        </div>
                        <div className='h-full line-clamp-2 leading-tight text-sm text-gray-600' >
                            { productDesc }
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card;