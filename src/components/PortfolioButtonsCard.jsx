function PortfolioButtonsCard({ link, text }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="third-btn"
      >
        {text}
      </a>
    </>
  );
}
export default PortfolioButtonsCard;
