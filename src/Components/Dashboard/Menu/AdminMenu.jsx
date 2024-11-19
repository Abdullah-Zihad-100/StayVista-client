import { FaUsersGear } from "react-icons/fa6";
import MenuItem from "../MenuItem";
import { BsGraphUp } from "react-icons/bs";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" />
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};
export default AdminMenu;
