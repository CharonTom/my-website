function ProjetCard({ titre, img, description, techno, button }) {
  return (
    <div
      className="min-w-[220px] rounded-xl p-5 relative overflow-hidden
       bg-portfolio-cards transition-all
       duration-1000 flex flex-col gap-y-4"
      data-aos="fade-left"
    >
      <h3 className="">{titre}</h3>
      <div className="transition-all duration-500">
        <img className="w-full object-cover h-full" src={img} alt="projet" />
      </div>
      <div className="relative flex flex-col gap-y-4">
        <p className="p-2 rounded-xl text-[14px] text-center border border-primary bg-portfolio-text ">
          {description}
        </p>
        <div className="">
          <h4>Techno utilisées</h4>
          <div className="">{techno}</div>
        </div>
        {/* <div className="link-out">{button}</div> */}
      </div>
    </div>
  );
}
export default ProjetCard;
