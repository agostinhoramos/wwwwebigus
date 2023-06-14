import { Container } from '@/components/Container'

import FloatingLabel from '@/components/elementary/FloatingLabel'
import SmartButton from '@/components/elementary/SmartButton'

import { newsletter } from '@/staticdata'

const Newsletter = ({}) => {
    return (
        <>
            <Container className="pt-8 lg:flex lg:items-center lg:justify-between">
                <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    { newsletter.title }
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                    { newsletter.desc }
                </p>
                </div>
                <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                <div>
                    <FloatingLabel
                    type="email"
                    name="email"
                    placeholder={ newsletter.input.placeholder }
                    value={""}
                    onTextEvent={(e)=>{}}
                    />
                </div>
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <SmartButton
                        text = { newsletter.button.text }
                        onClick={()=>{}}
                        className="bg-slate-700 text-white px-3 py-[0.9rem]"
                        />
                </div>
                </form>
            </Container>
        </>
    )
}

export { Newsletter }