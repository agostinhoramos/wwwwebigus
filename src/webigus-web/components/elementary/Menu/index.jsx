import { useState, useEffect } from 'react'
import classNames from 'classnames'

const Menu = ({ userNavigation, handleWithListMenuClick, children, className, ...props }) => {

    const [show, setShow] = useState(false)

    const handleWithShow = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={classNames("relative cursor-pointer", className)} {...props}
                onClick={() => { handleWithShow() }}
            >
                {children}
                {show ?
                    <div className="absolute normal-case right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        {userNavigation?.map((item, index) => (
                            <div key={index} onClick={() => { handleWithListMenuClick(index) }} className="block px-4 py-2  mx-1 rounded text-sm text-gray-700 hover:bg-gray-300" role="menuitem" tabIndex="-1" >{item.name}</div>
                        ))}
                    </div>
                    : null}
            </div>
        </>
    )
}

export { Menu }