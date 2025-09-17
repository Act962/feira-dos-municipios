"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Countdown() {
  const targetDate = new Date("2025-10-29T00:00:00").getTime();
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          total: difference,
        });
        setIsFinished(false);
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
        });
        setIsFinished(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="border-orange border-3 flex flex-row max-w-fit">
      <TimeCard value={timeLeft.days} label="dias" />
      <TimeCard value={timeLeft.hours} label="horas" />
      <TimeCard value={timeLeft.minutes} label="min." />
      <TimeCard value={timeLeft.seconds} label="seg." border={false} />
    </div>
  );
}

const TimeCard = ({
  value,
  label,
  border = true,
}: {
  value: number;
  label: string;
  border?: boolean;
}) => {
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={cn("flex flex-col", border && "border-r-3 border-orange")}>
      <div className="bg-foreground text-white font-bold text-xl sm:text-4xl px-4 py-2 text-center min-w-[40px] sm:min-w-[80px] flex items-center justify-center font-mono">
        {formatNumber(value)}
      </div>
      <div className="py-2 px-4 min-w-[40px] sm:min-w-[80px] flex items-center justify-center">
        <span className="text-center font-light text-sm whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};
