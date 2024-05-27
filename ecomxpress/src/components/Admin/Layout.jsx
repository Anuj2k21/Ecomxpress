import { useState } from 'react'

const Layout = ({ children }) => {

    const [size, setSize] = useState(280)

    const [accountMenu, setaccountMenu] = useState(false)
    return (
        <div>

            <aside
                className='bg-indigo-500 fixed top-0 left-0 h-full'
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            ></aside>
            <section className='bg-gray-100 h-screen '
                style={{
                    marginLeft: size,
                    transition: '0.3s'

                }}>


                {/* navbar */}
                <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 border'
                            onClick={() => setSize(size === 280 ? 0 : 280)}>
                            <i class="ri-menu-line text-xl"></i>
                        </button>

                        <h1 className='text-md font-semibold '>EcomXpress</h1>
                    </div>
                    <div>
                        <button className='relative'>
                            <img src="/images/image.jpeg" alt="" className='w-12 h-12 rounded-full'
                                onClick={() => setaccountMenu(!accountMenu)} />

                            {
                                accountMenu &&

                                <div className='absolute top-18 right-0 bg-white p-6 w-[200px] shadow-lg'>
                                    <div>
                                        <h1 className='text-lg font-semibold'>Naurin </h1>
                                        <p className='text-gray-2000'> Naurin@gamil.com</p>
                                        <div className='h-px bg-gray-200 my-4'>
                                            <button>
                                                <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout</button>

                                        </div>
                                    </div>

                                </div>
                            }
                        </button>
                    </div>
                </nav>
                <div className='p-6'>
                    {children}
                </div>
            </section>
        </div>
    )
}

export default Layout
