import axiosSecure from ".";



export const createPaymentIntent = async (price)=>{
// axiosSecure
const { data } = await axiosSecure.post("/create-stripe-payment", price);
return data
} 


export const saveBookingInfo = async (paymentInfo)=>{
// axiosSecure
const { data } = await axiosSecure.post("/booking", paymentInfo);
return data
}


export const updateStatus = async (id,status)=>{
// axiosSecure
const { data } = await axiosSecure.patch(`/rooms/status/${id}`, {status});
return data
} 



export const getBookings = async (email) => {
  const { data } = await axiosSecure.get(`bookings?email=${email}`);
  return data;
}; 


export const getHostBookings = async (email) => {
  const { data } = await axiosSecure.get(`bookings/host?email=${email}`);
  return data;
}; 

// save booking info in data base


// update room status booking in data base




// delete a booking
export const deleteBooking = async id => {
  const { data } = await axiosSecure.delete(`/bookings/${id}`)
  return data
}