/* eslint-disable no-unused-vars */

import { formatDistance } from "date-fns";
import Button from "./Button/Button";
import DatePicker from "./DatePicker";
import { useState } from "react";
const RoomReservation = ({roomData}) => {
const days=formatDistance(new Date(roomData?.to),new Date(roomData?.from)).split(" ")[0];

const totalPrice= days * roomData?.price;


const [value,setValue]=useState({
  startDate:new Date(roomData?.from),
  endDate:new Date(roomData?.to),
  key:"selcetion"
})

    return (
      <div className="rounded-xl border-[1px] border-neutral-200 bg-white overflow-hidden">
        <div className="flex items-center gap-1 p-4">
          <div className="text-2xl font-semibold">$ {roomData?.price}</div>
          <div className="font-light text-neutral-600 ">night</div>
        </div>
        <div className="flex justify-center">
          <DatePicker value={value} />
        </div>
        <hr />
        <div className="p-4">
          <Button label={"Reserve"} />
          <hr />
          <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <p>Total</p>
            <p>$ {totalPrice}</p>
          </div>
        </div>
      </div>
    );
      
    
}
export default RoomReservation;