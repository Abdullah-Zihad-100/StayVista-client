import { FaUsersGear } from "react-icons/fa6";
import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};
export default AdminMenu;
