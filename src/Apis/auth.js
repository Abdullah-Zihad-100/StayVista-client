import axiosSecure from ".";



// token from server
export const GetToken=async (email)=>{
    
       const { data } = await axiosSecure.post(
         '/jwt',email
       );
       console.log("Token receve from server------>",data);
       return data;

}

// save user data in database
export const saveUser=async(user)=>{
    const currentUser={
        email:user.email,
        role:"admin",
        status:"Verified",
    }
    const { data } =await axiosSecure.put(`/users/${user?.email}`,currentUser);
    return data ;
}

// clear cookies 
export const clearCookies = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};