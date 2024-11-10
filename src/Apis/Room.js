import axiosSecure from ".";



// fatch all rooms form data base
export const getAllRooms = async () => {
  const { data } = await axiosSecure.get("/rooms");
  return data;
};



// fatch single room form data base
export const singleRooms = async (id) => {
  const { data } = await axiosSecure.get(`/room/${id}`);
  return data;
};


// fatch all room for host 
export const getHostRoom = async (email) => {
  const { data } = await axiosSecure.get(`/rooms/${email}`)
  return data;
};



// save room data in database
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/rooms`,roomData)
  return data;
};


