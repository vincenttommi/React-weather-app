import React from 'react'

const TopButtons = () => {

const cities = [
    {
        id:1,
        title:"Nairobi",
    },
    {
        id:2,
        title:"London",

    },
    {
        id:3,
        title:"Neywork",
    },
    {
      id:4,
      title:"Las-Vegas",

    },
    {
    id:5,
    title:"Mombasas",

    }

]
  return (
    <div className='flex items-center justify-center my-6'>
{cities.map((city) => (
    <button className='text-white text-lg font-medium'>{city.title}</button>
))}






https://vercel.com/
    </div>
  )
}

export default TopButtons