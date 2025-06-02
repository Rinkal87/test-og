import Counter from "@/sections/counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "desserts",
  description: "pink bun",
};
export default function CounterPage() {
  return (
    <div>
      <Counter />
    </div>
  );
}
