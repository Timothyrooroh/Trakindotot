import React from 'react'
import { Link } from 'react-router-dom'

const KelolaInvoice = () => {
 
  return (
    <div className='p-2 w-full h-[100vh]'>
      <div className="grid grid-cols-4 gap-x-24 gap-y-6 w-full">
        <Link to={"/tambah-tahun/januari"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Januari</Link>
        <Link to={"/tambah-tahun/febuari"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Febuari</Link>
        <Link to={"/tambah-tahun/maret"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Maret</Link>
        <Link to={"/tambah-tahun/april"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>April</Link>
        <Link to={"/tambah-tahun/mei"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Mei</Link>
        <Link to={"/tambah-tahun/juni"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Juni</Link>
        <Link to={"/tambah-tahun/juli"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Juli</Link>
        <Link to={"/tambah-tahun/agustus"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Agustus</Link>
        <Link to={"/tambah-tahun/september"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>September</Link>
        <Link to={"/tambah-tahun/oktober"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Oktober</Link>
        <Link to={"/tambah-tahun/november"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>November</Link>
        <Link to={"/tambah-tahun/desember"} className='px-4 py-5 bg-white  shadow-lg border border-gray-200 border-t-2 border-t-[#FFAF10] text-center rounded-md'>Desember</Link>
      </div>
    </div>
  )
}

export default KelolaInvoice
