const MySVGComponent = ({ path, width, height, viewBox, style }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      {path}
    </svg>
  );
};

export default MySVGComponent;
