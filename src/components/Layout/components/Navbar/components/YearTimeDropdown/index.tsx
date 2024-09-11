import * as React from "react"
import {
  DropdownMenuTrigger, DropdownMenu, DropdownMenuRadioGroup, DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"

const YearDropdown = () => {
  const [position, setPosition] = React.useState("2024/2025")
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="border border-slate-500 btn py-[14px]">Academic Year : {position}</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 pt-4 ">
          <DropdownMenuLabel>Select academic Year</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="2024/2025">Academic Year : 2024 / 2025</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2023/2024">Academic Year : 2023 / 2024</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2022/2023">Academic Year : 2022 / 2023</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2021/2022">Academic Year : 2021 / 2022</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default YearDropdown







// import { clsx } from "clsx";
// import useStore from "../../../../../../store";
// import cn from "./style.module.scss";
// interface YearDropdownProps {
//   style?: Object;
//   className?: String;
// }
// const YearDropdown: React.FC<YearDropdownProps> = ({ className, style }) => {
//   const { yearDropdown, openYearDropdown, closeYearDropdown } = useStore();
//   return (
//     <div style={style} className={clsx(cn.YearDropdown, className)}>
//       <div
//         className={cn.year_chosen}
//         onClick={() => {
//           openYearDropdown();
//         }}
//       >
//         <i className="fa-solid fa-calendar-days"></i>
//         <span>Academic Year : 2024 / 2025</span>
//       </div>
//       <ul
//         style={yearDropdown ? { height: "fit-content" } : { height: "0" }}
//         className={cn.dropdown}
//       >
//         <li
//           onClick={() => {
//             closeYearDropdown();
//           }}
//         >
//           <span>Academic Year : 2024 / 2025</span>
//         </li>
//         <li
//           onClick={() => {
//             closeYearDropdown();
//           }}
//         >
//           <span>Academic Year : 2024 / 2025</span>
//         </li>
//         <li
//           onClick={() => {
//             closeYearDropdown();
//           }}
//         >
//           <span>Academic Year : 2024 / 2025</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default YearDropdown;
