"use client";
import { useAtom } from "jotai";
import { reserveDateAtom } from "@/store/reserve";
import { Calendar } from "@/components/ui/calendar";
import { selectedRoomsAtom } from "@/store/rooms";
import { Button } from "@/components/ui/button";

const DateForm = () => {
  const [date, setDate] = useAtom(reserveDateAtom);
  const [selectedRooms, setSelectedRooms] = useAtom(selectedRoomsAtom);

  function getYesterdayDate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday; // Format as needed
  }

  function resetSelectionAndSetDate(newDate: any) {
    setSelectedRooms([]); // Reset selected rooms
    setDate(newDate); // Update the date
  }
  function handleRemoveButton() {
    setSelectedRooms([]); // Reset selected rooms
    setDate(null); // Update the date
  }

  return (
    <div>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={(newDate) => resetSelectionAndSetDate(newDate)}
        numberOfMonths={1}
        disabled={(activeDate) => activeDate < getYesterdayDate()}
      />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Button variant={"destructive"} onClick={handleRemoveButton}>
          Remove date
        </Button>
      </div>
    </div>
  );
};
export default DateForm;
