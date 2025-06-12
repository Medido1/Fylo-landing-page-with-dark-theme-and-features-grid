function Testimonial({data}) {
  const {text, avatar, name, jobTitle} = data
  return (
    <div className="px-4 py-8 bg-[#212733] max-w-[330px]">
      <p className="text-gray-200 text-sm mb-4">
        {text}
      </p>
      <div className="flex gap-4 items-center">
        <img 
          className="h-8 rounded-[50%]"
          src={avatar} alt="avatar" 
          />
        <div className="flex flex-col text-sm">
          <p className="text-white font-bold">{name}</p>
          <p className="text-gray-200">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;