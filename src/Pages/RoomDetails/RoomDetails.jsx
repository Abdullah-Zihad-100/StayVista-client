import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header";
import RoomInfo from "../../Components/RoomInfo";
import Container from "../../Components/Container";
import RoomReservation from "../../Components/RoomReservation";

const RoomDetails = () => {
const room=useLoaderData();
console.log(room);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <Header roomData={room} />

        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-8 justify-between items-center">
          <RoomInfo roomData={room} />
          <div className="md:col-span-3 order-first md:order-last mb-10">
        <RoomReservation roomData={room}/>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default RoomDetails;
