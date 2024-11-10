import { useState } from "react";
import AddRoomForm from "../../Components/From/AddRoomForm";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { imgUplord } from "../../Apis/utils";
import { addRoom } from "../../Apis/Room";
import toast from "react-hot-toast";
const AddRoom = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges.selection);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const form = e.target;
      const host = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      };
      const from = dates?.startDate;
      const to = dates?.endDate;
      const image = form.image.files[0];
      const location = form.location.value;
      const category = form.category.value;
      const title = form.title.value;
      const image_url = await imgUplord(image);
      const price = form.price.value;
      const description = form.description.value;
      const bathrooms = form.bathrooms.value;
      const bedrooms = form.bedrooms.value;
      const guest = form.total_guest.value;

      const roomData = {
        location,
        category,
        title,
        image: image_url?.data?.display_url,
        price,
        guests:guest,
        bathrooms,
        bedrooms,
        description,
        from,
        to,
        host,
      };
      //  console.table(roomDatas);

      try {
        const data = await addRoom(roomData);
        console.log(data);
        setUploadButtonText("Uploaded");
        toast.success("Successfully Room Added!");
        navigate("/dashboard/my-listing");
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <div>
      <AddRoomForm
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};
export default AddRoom;
