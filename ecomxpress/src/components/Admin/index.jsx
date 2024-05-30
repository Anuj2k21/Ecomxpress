import React from 'react'


const Admin = () => {

    return (
        <div className='bg-gray-100 flex h-screen justify-center items-center'>
            <img src="/images/admin.svg" alt="" className='w-96 h-96' />
            <div>
                <h1 className='text-4xl font-semibold mb-4'>Admin Console !</h1>
                <form className='flex flex-col gap-4'>
                    <input type='text' required={false}
                        className='border p-4 bg-white rounded-md w-[450px]'
                        placeholder='Enter admin Secret' />
                    <button className='py-3 px-5 bg-violet-600 w-fit text-white font-semibold rounded-md'>Acess Now</button>
                </form>

            </div>

        </div>
    )
}

export default Admin
