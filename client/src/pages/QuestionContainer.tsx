const QuestionContainer = () => {
  return (
  <div className="w-full h-[30vh] bg-black bg-opacity-70">  
    <div className="flex justify-center items-center w-1/2 rounded-xl mx-auto py-6 border-4 border-sky-400">
      <p className="text-white text-4xl text-center font-serif font-bold">What is the capital of France?</p>
    </div>
    <div className="grid grid-cols-2 justify-center  px-64 gap-x-8 gap-y-4 pt-6">
    <div className="cursor-pointernpm run dev  py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider">
        <p className="">A:</p>
        <div className="text-white ">Question Option 1</div>
      </div>
      <div className="cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider">
        <p className=" ">B:</p>
        <div className="text-white ">Question Option 2</div>
      </div>
      <div className="cursor-pointer  py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider">
        <p className="">C:</p>
        <div className="text-white ">Question Option 3</div>
      </div>
      <div className="cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider">
        <p className="">D:</p>
        <div className="text-white">Question Option 4</div>
      </div>
    </div>
  </div>
  )
}

export default QuestionContainer