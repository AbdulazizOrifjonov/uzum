// import React, { useState } from 'react';

// const DropdownMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="menu-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button className="menu-button">Hover me</button>
//       {isHovered && (
//         <div className="dropdown-menu">
//           {[...Array(10)].map((_, index) => (
//             <div key={index} className="dropdown-item">
//               Item {index + 1}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;