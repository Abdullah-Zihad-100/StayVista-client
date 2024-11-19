import MenuItem from "../MenuItem";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" />
      <MenuItem icon={BsFillHouseAddFill} label="Add Room" address="add-room" />
      <MenuItem icon={MdHomeWork} label="My Listing" address="my-listing" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="manage-bookings"
      />
    </>
  );
};
export default HostMenu;
