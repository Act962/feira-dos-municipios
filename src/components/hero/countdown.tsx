"use client";

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
    <div className="border-orange border-3 flex flex-row ">
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
    <div className="w-full">
      <div className="bg-foreground text-white font-bold text-4xl p-2 text-center">
        {formatNumber(value)}
      </div>
      <div className="py-2">
        <span className=" block text-center font-light">{label}</span>
      </div>
    </div>
  );
};
