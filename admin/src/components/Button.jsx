import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';


const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;








// interface Button {
//   icon?: String,
//   bgColor?: String,
//   color?: String,
//   bgHoverColor?: String,
//   size?: Number,
//   text?: Number,
//   borderRadius?: String,
//   width?: Number,
//   children: React.ReactNode;
// }

// const Button = (props:Button) => {
//   const { setIsClicked, initialState } = useStateContext();
//   return (
//     <button
//       type="button"
//       onClick={() => setIsClicked(initialState)}
//       className={`bg-${props.bgColor} ${props.color} ${props.borderRadius} text-${props.size} p-3 w-${props.width} hover:drop-shadow-xl hover:bg-${props.bgHoverColor}`}
//     >
//       {props.icon} {props.text}
//     </button>
//   );
// };

// export default Button;
