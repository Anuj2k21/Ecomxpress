import React, { useState } from 'react'
import Layout from './Layout'
import Product from './Product'

const Payments = () => {
    const [payments, setPayments] = useState([


        {

            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            amount: 5999,
            date: '28-05-2024 10:20:25 Am'

        },
        {

            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            amount: 5999,
            date: '28-05-2024 10:20:25 Am'

        },
        {

            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            amount: 5999,
            date: '28-05-2024 10:20:25 Am'

        },
        {

            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            amount: 5999,
            date: '28-05-2024 10:20:25 Am'

        },
        {

            customerName: 'Anuj Kashyap',
            email: 'anuj161999@gmail.com',
            mobile: '7317666526',
            amount: 5999,
            date: '28-05-2024 10:20:25 Am'

        },
    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Payments</h1>
                <div className='mt-6'>

                    <table className='w-full'>
                        <thead>
                            <tr className='bg-rose-500 text-white text-left'>

                                <th className='p-4'>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Amount</th>
                                <th>Date</th>




                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index) => (
                                    <tr key={index}
                                        style={{
                                            background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                        }}>

                                        <td className='capitalize px-3'>
                                            <div className='flex p-2 gap-3 items-center'>
                                                <img src="/images/image.jpeg " className='w-10 h-10 rounded-full' alt="" />
                                                <div className='flex flex-col justify-center '>
                                                    <span className='font-semibold'>{item.customerName}</span>
                                                    <small className='text-gray-500'>{item.date}</small>
                                                </div>
                                            </div>

                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>


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

export default Payments

