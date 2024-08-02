import React from 'react'

const AlbumItem = ({image,desc,name,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img src={image} alt=''/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200'>{desc}</p>
    </div>
  )
}

export default AlbumItem
