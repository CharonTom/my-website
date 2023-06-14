function Stars({ score }) {
  const fullStar = <i className="fa-solid fa-star"></i>;
  const emptyStar = <i className="fa-regular fa-star"></i>;

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex text-sm lg:text-base">
      {stars.map((level) =>
        score >= level ? (
          <div key={level.toString()}>{fullStar}</div>
        ) : (
          <div key={level.toString()}>{emptyStar}</div>
        )
      )}
    </div>
  );
}

export default Stars;
