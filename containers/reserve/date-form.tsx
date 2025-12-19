"use client";
import { useAtom } from "jotai";
import { reserveDateAtom } from "@/store/reserve";
import { Calendar } from "@/components/ui/calendar";
import { selectedRoomsAtom } from "@/store/rooms";
import { Button } from "@/components/ui/button";
import { addDays, isBefore, isAfter } from "date-fns";

interface DateFormProps {
  mode: "checkin" | "checkout";
}

const DateForm = ({ mode }: DateFormProps) => {
  const [dateRange, setDateRange] = useAtom(reserveDateAtom);
  const [selectedRooms, setSelectedRooms] = useAtom(selectedRoomsAtom);
  const today = new Date();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    setSelectedRooms([]); // Reset selected rooms when date changes

    if (mode === "checkin") {
      // If check-out exists and is before the new check-in, clear check-out
      if (dateRange?.to && isBefore(dateRange.to, selectedDate)) {
        setDateRange({ from: selectedDate, to: undefined });
      } else {
        setDateRange({ from: selectedDate, to: dateRange?.to });
      }
    } else {
      // checkout mode
      // If check-in doesn't exist or is after the new check-out, set both to the same date
      if (!dateRange?.from || isBefore(selectedDate, dateRange.from)) {
        setDateRange({ from: selectedDate, to: addDays(selectedDate, 1) });
      } else {
        setDateRange({ ...dateRange, to: selectedDate });
      }
    }
  };

  const getDisabledDates = (date: Date) => {
    if (mode === "checkin") {
      // For check-in, disable dates before today
      return isBefore(date, today);
    } else {
      // For check-out, disable dates before check-in (or today if no check-in)
      const minDate = dateRange?.from
        ? addDays(dateRange.from, 1)
        : addDays(today, 1);
      return isBefore(date, minDate);
    }
  };

  const getSelectedDate = () => {
    if (mode === "checkin") return dateRange?.from;
    return dateRange?.to;
  };

  const handleClearDates = () => {
    setSelectedRooms([]);
    setDateRange({ from: undefined, to: undefined });
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={getSelectedDate()}
        onSelect={handleDateSelect}
        disabled={getDisabledDates}
        defaultMonth={getSelectedDate() || today}
        className="rounded-md border"
      />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Button variant="outline" onClick={handleClearDates} className="w-full">
          Clear dates
        </Button>
        {mode === "checkin" && dateRange?.from && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              const nextDay = addDays(dateRange.from!, 1);
              setDateRange({ ...dateRange, to: nextDay });
            }}
          >
            {dateRange.to ? "Change to 1 night" : "Add 1 night"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DateForm;
