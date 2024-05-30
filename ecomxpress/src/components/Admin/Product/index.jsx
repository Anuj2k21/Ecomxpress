import React, { useState } from 'react'
import Layout from '../Layout'


const Product = () => {
    const [products, setProducts] = useState([
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/b.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/a.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/c.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/b1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/d.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/a1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/e.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/c1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/d1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/e1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/f1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/g1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/j1.jpg'

        },
        {
            tile: "Men'Fathion Bels",
            price: 450,
            discount: 20,
            description: ' This Is emns Fathionable Bels By Cuirhide',
            image: '/products/k1.jpg'

        },

    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold' mb-4> Products </h1>
                <div className='grid grid-cols-4 gap-8'>
                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white shadow-lg rounded-md'>

                                <img src={item.image} className='rounded-t-md h-[250px] w-full object-cover' />
                                <div className='p-4'>
                                    <h1 className='text-md capitalize font-semibold'>{item.tile}</h1>
                                    <p className='text-gray-500'>{item.description.slice(0, 50)}</p>
                                    <div className='flex gap-2'>
                                        <p className='font-semibold text-green-700'> ₹{(item.price * item.discount) / 100}</p>
                                        <del >₹{item.price}</del>
                                        <label className='font-semibold text-gray-600'>({item.discount}% Off)</label>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>

            </div>

        </Layout>
    )
}

export default Product