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