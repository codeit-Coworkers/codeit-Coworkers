"use client";

import { useState } from "react";
import CalendarDate from "./CalendarDate";
import CalendarTime from "./CalendarTime";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  return (
    <div className="w-[312px] rounded-[24px] bg-background-primary shadow-lg border border-border-primary flex flex-col items-center p-2 font-pretendard">
      
      <CalendarDate
        selectedDate={selectedDate}
        onSelectDate={handleDateChange}
      />

      <div className="w-[90%] h-px bg-border-primary my-2" />

      <CalendarTime
        selectedTime={selectedTime}
        onSelectTime={setSelectedTime}
      />

      {selectedDate && selectedTime && (
        <div className="w-full p-4 mt-2 bg-brand-secondary rounded-b-[20px] text-center">
          <p className="text-md-m text-brand-primary">
            {selectedDate.toLocaleDateString()} {selectedTime} 선택됨
          </p>
        </div>
      )}
    </div>
  );
}