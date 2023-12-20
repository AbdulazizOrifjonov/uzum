// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
// import "./DropdownMenu.css"
// export default function CategoryDropdown(props) {
//   let { title } = props;

//   let [isOverButton, setIsOverButton] = useState(false);
//   let [isOverList, setIsOverList] = useState(false);
//   let [isOpen, setIsOpen] = useState();
//   let [isTouchInput, setIsTouchInput] = useState();
//   let [hasClicked, setHasClicked] = useState();
//   let button = useRef(null);

//   useLayoutEffect(() => {
//     if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
//       button.current.click();
//       setIsOpen(false);
//     } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
//       button.current.click();
//       setIsOpen(true);
//     }
//   }, [isOverButton, isOverList]);

//   useEffect(() => {
//     setIsTouchInput(false);
//     setHasClicked(false);
//   }, [hasClicked]);

//   return (
//     <Menu>
//       <MenuButton
//         ref={button}
//         onTouchStart={() => {
//           setIsTouchInput(true);
//         }}
//         onMouseEnter={event => {
//           setIsOverButton(true);
//         }}
//         onMouseLeave={event => {
//           setIsOverButton(false);
//         }}
//         onClick={() => {
//           setHasClicked(true);
//           setIsOpen(!isOpen);
//         }}
//         onKeyDown={() => {
//           setIsOpen(!isOpen);
//         }}
//       >
//         <span>{title}</span> <span aria-hidden>▾</span>
//       </MenuButton>
//       <MenuList
//         onMouseEnter={event => {
//           setIsOverList(true);
//         }}
//         onMouseLeave={event => {
//           setIsOverList(false);
//         }}
//       >
//         <MenuItem
//           onSelect={() => {
//             setIsOpen(false);
//           }}
//         >
//           Action 1
//         </MenuItem>
//         <MenuItem
//           onSelect={() => {
//             setIsOpen(false);
//           }}
//         >
//           Action 2
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// }

 
import React from 'react'
import "./DropdownMenu.css"

function DropdownMenu() {
  return (
    <div className="dropdown-menu">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quibusdam perferendis facere aspernatur quia non ratione quidem odit veniam. Labore vitae voluptatibus explicabo. Rem iure laborum veritatis ex, commodi doloremque.
    </div>
  )
}

export default DropdownMenu
