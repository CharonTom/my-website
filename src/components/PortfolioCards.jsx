function ProjetCard({ titre, img, description, techno, button }) {
  return (
    <div>
      <div
        className="min-w-[220px] rounded-xl  relative overflow-hidden
       bg-portfolio-cards transition-all p-4
       duration-1000 flex flex-col gap-y-4 group"
        data-aos="fade-left"
      >
        <h3 className="">{titre}</h3>
        <div className="transition-all duration-300 group-hover:scale-105">
          <img className="w-full object-cover h-full" src={img} alt="projet" />
        </div>
        <div className="relative flex flex-col gap-y-4 ">
          <p className="p-2 rounded-xl text-[14px] text-center border border-primary bg-portfolio-text  ">
            {description}
          </p>
          <div className="">
            <h4 className="">Techno utilisées</h4>
            <div className="">{techno}</div>
          </div>
          <div className="absolute bg-limpidBlue w-full h-full left-0 border border-2 border-gray-200 rounded-lg flex flex-col justify-center items-center -bottom-[calc(100%+16px)] group-hover:bottom-0 transition-all duration-300">
            <button className="third-btn">Voir le site web</button>
            <button className="third-btn">voir le site web</button>
            <button className="third-btn">3</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjetCard;
