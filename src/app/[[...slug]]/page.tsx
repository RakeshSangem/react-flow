import React from "react";
import "../../index.css";
import { ClientOnly } from "./Client";

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
