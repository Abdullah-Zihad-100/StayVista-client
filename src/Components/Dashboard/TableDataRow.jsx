import { format } from "date-fns";
import DeleteModal from "./Menu/DeleteModal";
import { useState } from "react";
import toast from "react-hot-toast"
import { deleteBooking, updateStatus } from "../../Apis/bookings";
const TableRow = ({ booking,refetch }) => {
    console.log(booking);
    const [isOpen,setIsOpen]=useState(false);

    const closeModal=()=>{
      setIsOpen(false);
    }
    const modalHandler=async(id)=>{
// console.log("Clicked");
try{
  await deleteBooking(id)
  await updateStatus(booking.roomId,false)
  refetch();
  toast.success("Booking Cenceled")
  
}
catch (err){
  toast.error(err.message);
}finally{
  closeModal();
}
    }
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative ">
              <img
                alt="image booking"
                src={booking?.image}
                className="mx-auto object-cover rounded w-[60px] h-[40px]"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={booking?.guest?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {booking?.guest?.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${booking?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(booking?.from), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(booking?.to), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Cancel</span>
        </span>
      </td>
      <DeleteModal
        id={booking?._id}
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </tr>
  );
};

export default TableRow;
