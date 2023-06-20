import { Fragment, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Menu } from '@/components/elementary/Menu'

const Profile = ({ name, avatar, userNavigation, handleWithListMenuClick }) => {

    const [shortName, setShortName] = useState(name.split(" ")[0][0] + name.split(" ")[1][0]);
    const handleWithClickEvent = () => {

    }

    return (
        <>
            <Menu onClick={() => { handleWithClickEvent() }} className='w-10 h-10' 
                userNavigation={userNavigation}
                handleWithListMenuClick={handleWithListMenuClick}
                >
                {avatar ?
                    <div className="inline-flex select-none items-center justify-center relative overflow-hidden ">
                        <img width={40} height={40} className="w-10 h-10 rounded-full" src={avatar.url} alt={name} />
                    </div>
                    :
                    <div className="relative inline-flex select-none items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                        <span className="font-medium text-lg text-gray-600" >{shortName}</span>
                    </div>
                }
            </Menu>
        </>
    )
}

export { Profile }