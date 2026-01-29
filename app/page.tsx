"use client";

import { useState } from "react";
import CalendarDate from "../components/common/Calendar/CalendarDate";
import CalendarTime from "../components/common/Calendar/CalendarTime";
import Calendar from "../components/common/Calendar/Calendar";

export default function IntegratedTestPage() {
  // 1. 단독 테스트용 상태
  const [soloDate, setSoloDate] = useState<Date | null>(null);
  const [soloTime, setSoloTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background-secondary p-8 font-pretendard">
      <div className="mx-auto max-w-[1000px] flex flex-col gap-12">
        
        {/* 섹션 1: 단독 컴포넌트 테스트 */}
        <section className="space-y-6">
          <h2 className="text-2xl-b text-color-tertiary border-b border-border-primary pb-2">
            Step 1. 단독 컴포넌트 테스트
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 날짜 단독 */}
            <div className="flex flex-col items-center gap-4 p-6 bg-background-primary rounded-3xl shadow-sm">
              <span className="text-md-b text-brand-primary">📅 Date Only</span>
              <CalendarDate selectedDate={soloDate} onSelectDate={setSoloDate} />
            </div>

            {/* 시간 단독 */}
            <div className="flex flex-col items-center gap-4 p-6 bg-background-primary rounded-3xl shadow-sm">
              <span className="text-md-b text-brand-primary">⏰ Time Only</span>
              <CalendarTime selectedTime={soloTime} onSelectTime={setSoloTime} />
            </div>
          </div>
        </section>

        {/* 섹션 2: 최종 합체 컴포넌트 테스트 */}
        <section className="space-y-6">
          <h2 className="text-2xl-b text-color-tertiary border-b border-border-primary pb-2">
            Step 2. 최종 합체 캘린더 테스트
          </h2>
          
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-[40px] border-2 border-dashed border-brand-primary/30">
            <Calendar />
          </div>
        </section>

      </div>
    </div>
  );
}