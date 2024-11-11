import MenuItem from "../MenuItem";
import { MdHomeWork } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
const HostMenu = () => {
    return (
      <>
        <MenuItem
          icon={BsFillHouseAddFill}
          label="Add Room"
          address="add-room"
        />
        <MenuItem icon={MdHomeWork} label="My Listing" address="my-listing" />
      </>
    );
}
export default HostMenu;