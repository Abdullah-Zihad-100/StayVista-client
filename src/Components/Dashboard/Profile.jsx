import { Helmet } from "react-helmet-async";
import useRole from "../../Hooks/useRole";
import toast from "react-hot-toast"
import useAuth from "../../Hooks/useAuth";
const Profile = () => {
  // let [isOpen, setIsOpen] = useState(true);

  const { user, resetPassword } = useAuth();
  const [role] = useRole();
  console.log(user);
  const handlePasswordChange = () => {
    resetPassword(user?.email)
      .then((res) => {
        console.log(res);
        toast.success("Reset email send your code")
      })
      .then((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl lg:w-3/5 w-4/5">
        <img
          alt="bg"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36 object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <p className="mt-2 md:text-xl text-sm font-medium text-gray-800">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                  Update Profile
                </button>
                <button
                  onClick={handlePasswordChange}
                  className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <UpdateUserProfile isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
};

export default Profile;
