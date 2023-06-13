
export function AuthLayout({ children }){
    return (
        <>
            <div className="mx-auto bg-gray-50 flex flex-col justify-center h-screen sm:px-6 lg:px-8">
                <div className="mx-auto xl:grid 2xl:grid-cols-7 xl:grid-cols-6 xl:gap-4 sm:px-6 sm:w-10/12 w-full px-2">
                    <div className="2xl:col-start-3 2xl:col-span-3 xl:col-start-2 xl:col-span-4 w-full" >
                        <div className='shadow-sm bg-white border p-4 border-gray-200 h-auto rounded' >
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}