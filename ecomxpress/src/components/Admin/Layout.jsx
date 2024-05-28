import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {

    const [size, setSize] = useState(280)
    const [mobilesize, setMobileSize] = useState(0)

    const [accountMenu, setaccountMenu] = useState(false)
    const location = useLocation()


    const menus = [
        {
            label: 'Dashboard',
            icon: <i className='ri-dashboard-3-line mr-2'></i>,
            link: '/admin/dashboard'
        },
        {
            label: 'Products',
            icon: <i className='ri-shopping-cart-line mr-2'></i>,
            link: '/admin/products'

        },
        {
            label: 'Orders',
            icon: <i className='ri-shape-line mr-2'></i>,
            link: '/admin/orders'
        },
        {
            label: 'Payments',
            icon: <i className='ri-money-dollar-circle-line mr-2'></i>,
            link: '/admin/payments'
        },

        {
            label: 'Settings',
            icon: <i className='ri-settings-3-line mr-2'></i>,
            link: '/admin/settings'
        },
        {
            label: 'Logout',
            icon: <i className='ri-logout-circle-r-line mr-2'></i>,
            link: '/admin/logout'
        },
    ]

    return (
        <>
            {/* Layout design  for Desktop */}
            <div className='md:block hidden'>

                {/* ============= Menu Bar ============ */}
                <aside
                    className='bg-indigo-500 fixed top-0 left-0 h-full overflow-hidden'
                    style={{
                        width: size,
                        transition: '0.3s'
                    }}
                >
                    <div className=' flex flex-col'>

                        {
                            menus.map((item, index) => (
                                <Link key={index}
                                    to={item.link}
                                    className='text-gray-50 text-[17.5] px-4 py-2 hover:bg-rose-500 hover:text-white'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}

                                >
                                    {item.icon}
                                    {item.label}

                                </Link>
                            ))
                        }
                    </div>




                </aside>
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

            {/* Layout Design for Mobile */}
            <div className='md:hidden block'>

                {/* ============= Menu Bar ============ */}
                <aside
                    className='bg-indigo-500 fixed  z-50 top-0 left-0 h-full overflow-hidden'
                    style={{
                        width: mobilesize,
                        transition: '0.3s'
                    }}
                >
                    <div className=' flex flex-col'>
                        <button onClick={() => setMobileSize(mobilesize === 0 ? 280 : 0)} className='text-left mx-4 mt-4'>
                            <i className="ri-menu-fold-fill text-white text-xl"></i>
                        </button>

                        {
                            menus.map((item, index) => (
                                <Link key={index}
                                    to={item.link}
                                    className='text-gray-50 text-[17.5] px-4 py-2 hover:bg-rose-500 hover:text-white'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}

                                >
                                    {item.icon}
                                    {item.label}

                                </Link>
                            ))
                        }
                    </div>




                </aside>
                <section className='bg-gray-100 h-screen '>


                    {/* navbar */}
                    <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                        <div className='flex gap-4 items-center'>
                            <button className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 border'
                                onClick={() => setMobileSize(mobilesize === 0 ? 280 : 0)}>
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

        </>
    )
}

export default Layout
