import React from 'react'

const CompleteTask = ({data}) => {
  console.log()
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">{data.category}</h3>
          <h4 className="text-sm">2{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
         {data.taskDescription}
        </p>
        <div className=" mt-2">
        <button className=" bg-blue-400 rounded-sm px-3 flex justify-start mt-4">complete Task</button>
      </div>
      </div>
  )
}

export default CompleteTask
