function Feature({data}) {
  const {image, title, description} = data;
  
  return (
    <div className="flex flex-col gap-2 text-center items-center
      x">
      <img 
        className="h-18 mb-4"
        src={image} alt={title} />
      <h2 className="text-xl text-white font-bold">
        {title}
      </h2>
      <p className="text-white text-sm w-[80%] lg:w-[60%]">
        {description}
      </p>
    </div>
  )
}

export default Feature;