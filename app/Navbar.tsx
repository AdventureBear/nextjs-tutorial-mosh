import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className='flex p-5 bg-slate-200'>
            <Link className='mr-5'  href='/'>Next.js</Link>
            <ul>
                <Link href='/'>Dashboard</Link>
                <Link href='/users'>Users</Link>
            </ul>

        </div>
    )
}
export default Navbar
