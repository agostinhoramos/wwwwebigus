import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import FloatingLabel from '@/components/elementary/FloatingLabel'
import SmartButton from '@/components/elementary/SmartButton';

const Recover = ({ textUserId, setTextUserId, setDisplayView, actionEvent }) => {

    const [ enableReturn, setEnableReturn ] = useState();

    const [ statusUserId, setStatusUserId ] = useState({});

    const handleWithRecoverButton = async () => {
        const timestamp = Date.now();
        const arg = {
            from : 'recover',
            actionType: 'recover',
            ts: timestamp,
            data : {
                textUserId: textUserId
            }
        }
        
        const response = await actionEvent(arg)

        if( response.data?.success ){
            setStatusUserId({
                status: 'success',
                message: 'E-mail enviado com sucesso.'
            })
        }else{
            setStatusUserId({
                status: 'error',
                message: 'Houve um erro durante o envio do e-mail.'
            })
        }

        // Auto clean after 15 seconds
        setTimeout(() => {
            setStatusUserId({status:null, message:null})
        }, 1000 * 15);
    }

    useEffect(() => {
        setEnableReturn(true)
    }, []);

    return (
        <>
            {/* CARD HEADER */}
            <div className="w-full flex flex-row mb-3 pb-2 border-b" >
                { enableReturn ?
                    <div className="basis-8 shadow cursor-pointer p-2" onClick={()=>{setDisplayView(null)}}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className="h-4 w-4 text-gray-600" fill="currentColor" aria-hidden="true" ><path d="M 34.960938 2.980469 C 34.441406 2.996094 33.949219 3.214844 33.585938 3.585938 L 13.585938 23.585938 C 12.804688 24.367188 12.804688 25.632813 13.585938 26.414063 L 33.585938 46.414063 C 34.085938 46.9375 34.832031 47.148438 35.535156 46.964844 C 36.234375 46.78125 36.78125 46.234375 36.964844 45.535156 C 37.148438 44.832031 36.9375 44.085938 36.414063 43.585938 L 17.828125 25 L 36.414063 6.414063 C 37.003906 5.839844 37.183594 4.960938 36.863281 4.199219 C 36.539063 3.441406 35.785156 2.957031 34.960938 2.980469 Z"/></svg>
                    </div> 
                :''}
                <div className={classNames("text-center py-1 font-medium text-base truncate", (enableReturn?'basis-11/12':'basis-full'))} >
                    Esqueceu-se da palavra-passe?
                </div>
                { enableReturn ?
                    <div className="basis-8" >
                        <div className="h-6 w-6 m-1"></div>
                    </div> 
                :''}
            </div>

            {/* CARD BODY */}
            <div className="w-full flex flex-col">

                <div className='text-left text-sm mb-3 text-gray-500'>
                    Introduza o endereço de e-mail ligado à sua conta e nós enviaremos-lhe um link para redefinir a sua palavra-passe.
                </div>

                <div className='' >
                    <FloatingLabel
                        type="text"
                        name="email"
                        placeholder={"Email ou número de telemóvel"}
                        value={textUserId}
                        status={statusUserId?.status}
                        message={statusUserId?.message}
                        />
                </div>

                <div className='mt-3' >
                    <SmartButton 
                        text = {"Enviar link de redefinição"}
                        onClick={()=>{handleWithRecoverButton()}}
                        className="text-white"
                        />
                </div>

                <div className='mt-5 mb-4'>
                    <hr />
                </div>

                <div className="text-center mb-2 text-sm text-gray-500">
                    Não tem uma conta?{' '}
                    <div className="font-semibold inline cursor-pointer text-primary-900 hover:text-primary-800"
                        onClick={()=>{setDisplayView('signup')}}
                        >
                        Registe-se
                    </div>
                </div>

            </div>
        </>
    )
}

export default Recover;