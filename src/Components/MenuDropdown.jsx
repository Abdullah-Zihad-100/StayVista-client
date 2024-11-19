import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import placeholder from "../assets/placeholder.jpg";
import useRole from "../Hooks/useRole";
import HostModal from "./Modal/HostRequestModal";
import toast from "react-hot-toast";
import { becomeHost } from "../Apis/auth";

const MenuDropdown = () => {
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal=()=>{
    setModalOpen(false);
  }

 const modalHandler = async () => {
   // req to this host
   try {
     const data = await becomeHost(user?.email);
     console.log(data);
     if (data?.modifiedCount > 0) {
       toast.success("Successfully! Please wait for admin confirmation");
     } else {
       toast.success("Please!! Wait For Admin Approval 👊");
     }
   } catch (err) {
     console.log(err);
   } finally {
     setIsOpen(false);
   }
 };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden md:block">
          {!user ||
            !role ||
            (role === "guest" && (
              <button
                onClick={() => setModalOpen(true)}
                disabled={!user}
                className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
              >
                Host Your Room
              </button>
            ))}
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full object-cover w-[33px] h-[33px]"
              referrerPolicy="no-referrer"
              src={user?.photoURL || placeholder}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[14vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user?.email ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logOut}
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostModal
        closeModal={closeModal}
        modalHandler={modalHandler}
        isOpen={isModalOpen} />
    </div>
  );
};

export default MenuDropdown;
