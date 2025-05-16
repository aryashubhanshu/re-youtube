"use client";

import { trpc } from "@/trpc/client";

export default function PageClient() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "shubh",
  });

  return <div>Page Client says: {data.greeting}</div>;
}
