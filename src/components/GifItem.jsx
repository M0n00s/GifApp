export const GifItem = ({ url, title }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body ">
          <p className="card-text ">{title}</p>
        </div>
      </div>
    </>
  );
};
