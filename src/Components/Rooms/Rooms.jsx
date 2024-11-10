import { useEffect, useState } from "react";
import Container from "../Container";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import Heading from "../Heading";
import { getAllRooms } from "../../Apis/Room";
const Rooms = () => {
  const [loading,setLoading]=useState(false);
  const [params] = useSearchParams();
  const category = params.get("category");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setLoading(true)
     getAllRooms().then((data) => {
        if (category) {
          const filterCategory = data.filter(
            (room) => room.category === category
          );
          setRooms(filterCategory);
          setLoading(false);
        } else {
          setLoading(false);
          setRooms(data);
        }
      });
  }, [category]);

  if(loading){
    return <Loader/>
  }
  return (
    <div>
      {rooms && rooms.length > 0 ? (
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 pt-12">
            {rooms?.map((room) => (
              <Card key={room?._id} room={room} />
            ))}
          </div>
        </Container>
      ) : (
        <div className="min-h-[calc(100vh-300px)] flex justify-center items-center">
          <Heading center={true}
            title={"No Room Available In This Category!"}
            subtitle={"Please Select Other Category"}
          />
        </div>
      )}
    </div>
  );
};
export default Rooms;
