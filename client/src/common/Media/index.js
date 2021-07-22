const Media = ({ src, width, height }) => (
  <img src={`/img/media/${src}`} alt={src} with={width} height={height} />
);

export default Media;
