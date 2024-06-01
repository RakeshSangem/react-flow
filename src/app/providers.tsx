"use client";
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import React from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
}
