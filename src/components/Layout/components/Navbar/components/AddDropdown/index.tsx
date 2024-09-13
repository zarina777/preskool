import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FaUsers } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { PiInvoice } from "react-icons/pi";

const AddDropdown = () => {
  return (
    <Popover>
      <PopoverTrigger className="w-[50px] h-[38px] mr-1" asChild>
        <button className="btn flex justify-center items-center btn-outline-light bg-white "><FiPlusSquare className="w-full fs-4" /></button>
      </PopoverTrigger>
      <PopoverContent className=" dropdown-menu show right-[-100px] dropdown-menu-right border shadow-sm dropdown-md">
        <div className="p-3 border-bottom">
          <h5>Add New</h5>
        </div>
        <div className="p-3 pb-0">
          <div className="row gx-2">
            <div className="col-6">
              <a href="add-student.html" className="d-block bg-primary-transparent ronded p-2 text-center mb-3 className-hover">
                <div className="avatar avatar-lg mb-2">
                  <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle"> <IoSchoolOutline /> </span>
                </div>
                <p className=" text-black">Students</p>
              </a>
            </div>
            <div className="col-6">
              <a href="add-teacher.html" className="d-block bg-success-transparent ronded p-2 text-center mb-3 className-hover">
                <div className="avatar avatar-lg mb-2">
                  <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle"><GiTeacher /></span>
                </div>
                <p className=" text-black">Teachers</p>
              </a>
            </div>
            <div className="col-6">
              <a href="add-staff.html" className="d-block bg-warning-transparent ronded p-2 text-center mb-3 className-hover">
                <div className="avatar avatar-lg rounded-circle mb-2">
                  <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle"> <FaUsers /> </span>
                </div>
                <p className=" text-black">Staffs</p>
              </a>
            </div>
            <div className="col-6">
              <a href="add-invoice.html" className="d-block bg-info-transparent ronded p-2 text-center mb-3 className-hover">
                <div className="avatar avatar-lg mb-2">
                  <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-info rounded-circle"><PiInvoice /></span>
                </div>
                <p className=" text-black">Invoice</p>
              </a>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AddDropdown;
