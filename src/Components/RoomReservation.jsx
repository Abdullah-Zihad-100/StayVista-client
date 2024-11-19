/* eslint-disable no-unused-vars */

import { formatDistance, set } from "date-fns";
import Button from "./Button/Button";
import DatePicker from "./DatePicker";
import { useState } from "react";
import BookingModal from "./Modal/BookingModal";
import useAuth from "../hooks/useAuth";

const RoomReservation = ({roomData}) => {
  const {user}=useAuth()
const days=formatDistance(new Date(roomData?.to),new Date(roomData?.from)).split(" ")[0];

const totalPrice= days * roomData?.price;


const [value,setValue]=useState({
  startDate:new Date(roomData?.from),
  endDate:new Date(roomData?.to),
  key:"selcetion"
})
const handleCalanderChange=(ranages)=>{

setValue(value);
}

const [isOpen,setIsOpen] = useState(false);

const closeModal =()=>{
  setIsOpen(false)
}


const [bookingInfo,setBookingInfo]=useState({
   guest : {
    name:user?.displayName,
    email:user?.email,
    image:user?.photoURL,
   },
   host:roomData?.host?.email,
   location:roomData?.location,
   price:totalPrice,
   to:value?.endDate,
   from:value?.startDate,
   title:roomData?.title,
   image:roomData?.image,
   roomId:roomData?._id
}); 

    return (
      <div className="rounded-xl border-[1px] border-neutral-200 bg-white overflow-hidden">
        <div className="flex items-center gap-1 p-4">
          <div className="text-2xl font-semibold">$ {roomData?.price}</div>
          <div className="font-light text-neutral-600 ">night</div>
        </div>
        <div className="flex justify-center">
          <DatePicker
            handleCalanderChange={handleCalanderChange}
            value={value}
          />
        </div>
        <hr />
        <div className="p-4">
          <Button
            disabled={roomData?.host?.email === user?.email || roomData?.booked}
            onClick={() => setIsOpen(true)}
            label={"Reserve"}
          />
          <hr />
          <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <p>Total</p>
            <p>$ {totalPrice}</p>
          </div>
        </div>
        <BookingModal
          isOpen={isOpen}
          closeModal={closeModal}
          bookingInfo={bookingInfo}
        />
      </div>
    );
      
    
}
export default RoomReservation;