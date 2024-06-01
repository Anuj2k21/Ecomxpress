import React from 'react'
import { Link } from 'react-router-dom'


const Layout = ({ children }) => {

    const menu = [
        {
            label: "Home",
            href: '/'
        },
        {
            label: "Products",
            href: '/products'
        },
        {
            label: "Category",
            href: '/category'
        },
        {
            label: "Contact us",
            href: 'contact-us'
        },
    ]
    return (
        <div>
            {/* **************NavBar************** */}
            <nav className=' sticky top-0 left-0 shadow-lg bg-white'>
                <div className='w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/logo1.png" alt="" className='w-[100px] ' />
                    <ul className='flex gap-4 items-center'>
                        {
                            menu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}
                                        className='block py-8 text-center hover:bg-rose-600 hover:text-white w-[100px]' >{item.label}</Link>
                                </li>

                            ))
                        }
                        <Link className='block py-8 text-center hover:bg-rose-600 hover:text-white w-[100px]' to={'/login'}>Login</Link>

                        <Link className=' bg-rose-700 text-white block py-3  px-10 text-md  font-semibold text-center hover:bg-cyan-600 hover:text-white ' to={'/signup'}>Signup</Link>                   </ul>
                </div>

            </nav>
            {/* 
            ****** Footer ************ */}
            <footer className='bg-orange-500 py-16'>
                <div className=' w-10/12 max-auto  grid grid-cols-3  gap-8'>
                    <div>
                        <h1 className='text-white font-semibold text-2xl '>Brand Details</h1>
                        <p className='text-gray-100 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione error vitae doloribus accusantium. Ipsa numquam quisquam facilis sit tenetur fugit quos? Maiores aut fugiat repudiandae animi explicabo magni consequatur.

                        </p>
                        <img src="/images/logo1.png" alt="" className='w-[100]' />

                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-2xl '>Brand Details</h1>
                        <p className='text-gray-100 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione error vitae doloribus accusantium. Ipsa numquam quisquam facilis sit tenetur fugit quos? Maiores aut fugiat repudiandae animi explicabo magni consequatur.

                        </p>
                        <img src="/images/logo1.png" alt="" className='w-[100]' />

                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-2xl '>Brand Details</h1>
                        <p className='text-gray-100 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione error vitae doloribus accusantium. Ipsa numquam quisquam facilis sit tenetur fugit quos? Maiores aut fugiat repudiandae animi explicabo magni consequatur.

                        </p>
                        <img src="/images/logo1.png" alt="" className='w-[100]' />

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Layout
