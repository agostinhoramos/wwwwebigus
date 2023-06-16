import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';

const FloatingLabel = ({type, name, value, message, label, placeholder, className, status, onTextEvent, keyboardEvent}) => {

    const [floatingId, setFloatingId] = useState('');
    const [inputDescriptionId, setInputDescriptionId] = useState('');
    
    const [inputStyle, setInputStyle] = useState('');
    const [placeholderStyle, setPlaceholderStyle] = useState('');
    const [messageStyle, setMessagetStyle] = useState('');

    const [inputText, setInputText] = useState('');
    const [labelText, setLabelText] = useState('');

    useEffect(() => {
        // Set value
        setLabelText(label)

        // Set uuid
        if (typeof window !== 'undefined') {
            setFloatingId(`floating_${uuidv4()}`);
            setInputDescriptionId(`describedby_${uuidv4()}`);
        }

    }, []);


    useEffect(() => {

        // Normal style
        setInputStyle('text-gray-600 border-gray-300 focus:border-gray-400')
        setPlaceholderStyle('text-gray-600 ')
        setMessagetStyle('text-gray-500')
        
        // Success style
        if( status == 'success' ){
            setInputStyle('text-green-600 border-green-600 focus:border-green-600')
            setPlaceholderStyle('text-green-500 ')
            setMessagetStyle('text-green-600')
        }

        // Error style
        if( status == 'error' ){
            setInputStyle('text-red-600 border-red-600 focus:border-red-600')
            setPlaceholderStyle('text-red-600 ')
            setMessagetStyle('text-red-600')
        }
        
    }, [status]);


    return (
        <>
            <div >

                { labelText ?
                    <label htmlFor={floatingId} className="block mb-2 text-sm font-medium text-gray-900">{ labelText }</label>
                :''}

                <div className={classNames("relative", className)}>
                    
                    {/* INPUT */}
                    <input type={type} id={floatingId} aria-describedby={inputDescriptionId} className={classNames("block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer", inputStyle)} value={value?value:inputText} name={name} placeholder=" " 
                    onChange={onTextEvent?onTextEvent:(e)=>{setInputText(e.target.value)}}
                    onKeyUp={onTextEvent?onTextEvent:(e)=>{setInputText(e.target.value)}}
                    />
                    
                    {/* PLACEHOLDER */}
                    <label htmlFor={floatingId} className={classNames("absolute text-sm duration-300 select-none transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 bg-white peer-focus:-translate-y-4 left-1", placeholderStyle)}>{ placeholder }</label>
                </div>

                {/* MESSAGE */}
                { message ?
                    <div id={inputDescriptionId} className={classNames("mt-2 text-xs", messageStyle)} >{ message }</div> 
                :''}
            </div>
        </>
    )
}

export default FloatingLabel;