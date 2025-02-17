import React from 'react'

const ResturantCategory = (props) => {
  const data = props;
  console.log(data);
  return (
    <div className='flex justify-center'>
      {/* header */}
      <div className='w-6/12 bg-gray-50 p-4 shadow-md my-4 flex justify-between font-bold'>
        <span>
          {data.data.title}({data.data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
    </div>
  )
}

export default ResturantCategory;
