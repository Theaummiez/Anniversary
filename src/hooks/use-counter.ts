"use client";

import { useState, useCallback } from "react";
import type { CounterValues } from "@/types";
import { RELATIONSHIP_START } from "@/lib/constants";
import { useInterval } from "@/hooks/use-interval";

function computeCounter(): CounterValues {
  const now = new Date();
  const diff = now.getTime() - RELATIONSHIP_START.getTime();
  if (diff < 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSec = Math.floor(diff / 1000);
  const seconds = totalSec % 60;
  const minutes = Math.floor(totalSec / 60) % 60;
  const hours = Math.floor(totalSec / 3600) % 24;
  const totalDays = Math.floor(diff / 86_400_000);
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;

  return { years, months, days, hours, minutes, seconds };
}

export function useCounter(): CounterValues {
  const [values, setValues] = useState<CounterValues>(computeCounter);

  const tick = useCallback(() => {
    setValues(computeCounter());
  }, []);

  useInterval(tick, 1000);

  return values;
}
