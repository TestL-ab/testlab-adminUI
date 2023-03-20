export default function CustomBarPattern (props) {
  const {    
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    value,
    fill
  } = props;
  
  let x = oX;
  let y = oHeight < 0 ? oY + oHeight : oY;
  let width = oWidth;
  let height = Math.abs(oHeight);

  return (
   <rect fill={fill}
       mask='url(#mask-stripe)'
          x={x}
          y={y}
          width={width}
          height={height} />
    );
};