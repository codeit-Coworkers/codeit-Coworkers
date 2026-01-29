"use client";

import { useState } from "react";

interface Props {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const AM_TIMES = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30" ,"09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const PM_TIMES = ["12:00", "12:30","13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

export default function CalendarTime({ selectedTime, onSelectTime }: Props) {
  const [period, setPeriod] = useState<"am" | "pm">("pm");
  const times = period === "am" ? AM_TIMES : PM_TIMES;

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #94A3B8;
          border-radius: 10px;
          border: 2px solid white; 
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>

      {/* 전체 컨테이너 */}
      <div className="flex w-[288px] h-[176px] gap-[14px] p-[12px] rounded-[20px] border border-border-primary bg-white shadow-sm box-border">
        
        {/* 1. 오전/오후 버튼 영역 */}
        <div className="flex flex-col gap-[8px]">
          {(["am", "pm"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex items-center justify-center w-[78px] h-[40px] rounded-[10px] text-md-m transition-all border-solid border-[1px]
                ${
                  period === p
                    ? "bg-brand-primary text-color-inverse border-brand-primary" 
                    : "bg-white text-color-disabled border-border-primary hover:bg-background-secondary"
                }
              `}
            >
              {p === "am" ? "오전" : "오후"}
            </button>
          ))}
        </div>

        {/* 2. 시간 리스트 영역 */}
        <div className="flex-1 h-full rounded-[16px] border border-border-primary overflow-hidden bg-white box-border">
          <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            {times.map((time) => {
              const active = selectedTime === time;

              return (
                <button
                  key={time}
                  onClick={() => onSelectTime(time)}
                  className={`w-full flex text-left py-[7.5px] pl-[16px] text-lg-r transition-colors whitespace-nowrap
                    ${
                      active
                        ? "bg-brand-secondary text-brand-primary font-bold"
                        : "text-color-secondary hover:bg-background-secondary"
                    }
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}