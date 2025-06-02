import Counter from "@/sections/counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "likes",
  description: "lantern",
};
export default function CounterPage() {
  return (
    <div>
      <Counter />
    </div>
  );
}
