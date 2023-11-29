"use-client";
import Counter from "./Components/counter";
import MirrorWords from "./Components/mirror";
import Race from "./Components/racecar";
import Toggle from "./Components/togglebox";

export default function Home() {
  return (
    <main>
      <h1>Day 10</h1>
      <Toggle />
      <MirrorWords />
      <Counter />
      <Race />
    </main>
  );
}
