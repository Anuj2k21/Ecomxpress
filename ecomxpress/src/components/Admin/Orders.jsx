import React, { useState } from 'react'
import Layout from './Layout'
import Product from './Product'

const Orders = () => {
    const [orders, setOrders] = useState([
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
        {
            orderId: "Cb010182",
            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            Product: "Men's fanc cy Belts ",
            amount: 599,
            date: '27-05-2024 06:50:15',
            status: "pending"
        },
    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <div className='mt-6'>

                    <table className='w-full'>
                        <thead>
                            <tr className='bg-rose-500 text-white'>
                                <th className='py-4'>Order Id</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index) => (
                                    <tr className='text-center' key={index}
                                        style={{
                                            background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                        }}>
                                        <td className='py-4'>{item.orderId}</td>
                                        <td className='capitalize'>{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className='capitalize'>{item.Product}</td>
                                        <td>{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
                                        <td className='capitalize'>
                                            <select className='border p-1 border-gray-200'>
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="delivered">Delivered</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>

    )
}

export default Orders
