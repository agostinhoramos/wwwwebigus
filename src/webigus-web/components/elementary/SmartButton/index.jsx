import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';

const SmartButton = ({ text, disabled, onClick, className }) => {

    const [buttonStyle, setButtonStyle] = useState('');

    useEffect(() => {

        if( disabled == true ){
            setButtonStyle("bg-gray-200 text-white cursor-default")
        }else{
            setButtonStyle("bg-primary-900 text-white hover:opacity-90 focus:ring-primary-300 cursor-pointer")
        }

    }, [disabled]);

    return (
        <>
            <div className=''>
                <button 
                    type="button" 
                    className={classNames("w-full focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none", buttonStyle, className)}
                    onClick={onClick}
                    disabled={disabled}
                    >{ text }</button>
            </div>
        </>
    )
}

export default SmartButton;