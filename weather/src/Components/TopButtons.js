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
        title:"Nakuru",
    },
    {
      id:4,
      title:"Accra",

    },
    {
    id:5,
    title:"Mombasa",

    }

]
  return (
    <div className='flex items-center my-6 justify-around'>
{cities.map((city) => (
    <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
))}

    </div>
  )
}

export default TopButtons