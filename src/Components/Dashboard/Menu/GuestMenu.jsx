import { BsFingerprint, BsGraphUp } from "react-icons/bs";
import MenuItem from "../MenuItem";
import useRole from "../../../Hooks/useRole";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../Apis/auth";
import { toast } from "react-hot-toast";
const GuestMenu = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

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
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics"/>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </>
  );
};
export default GuestMenu;
