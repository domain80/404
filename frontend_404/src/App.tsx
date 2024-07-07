import { useState } from "react";
import { BookingsTable } from "./components/Bookings";
import { CreateDialog } from "./components/createDialog";
import { DeleteDialog } from "./components/DeleteDialog";

function App() {
  const [bookings, setBookings] = useState([
    {
      company: "SXDF",
      course: "Intro to ai",
      courseFee: 4000,
      delegates: "Mr Sam, Mrs Bawa, Dr. Regi",
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Bookings</h1>

      <div className="flex gap-4 mt-8 mb-4">
        <CreateDialog
          onCreate={(newBooking: any) => setBookings([...bookings, newBooking])}
        />
        <DeleteDialog />
        {/* <UpdateDialog /> */}
      </div>
      <BookingsTable bookings={bookings} />
    </div>
  );
}

export default App;
