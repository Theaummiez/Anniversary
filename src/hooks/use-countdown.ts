"use client";

import { useState, useCallback } from "react";
import type { CountdownValues } from "@/types";
import { REUNION_DATE } from "@/lib/constants";
import { useInterval } from "@/hooks/use-interval";

function computeCountdown(): CountdownValues {
  const diff = REUNION_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export function useCountdown(): CountdownValues {
  const [values, setValues] = useState<CountdownValues>(computeCountdown);

  const tick = useCallback(() => {
    setValues(computeCountdown());
  }, []);

  useInterval(tick, 1000);

  return values;
}
