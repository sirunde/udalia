import Image from "next/image";
import Items from "@/components/item/items"
import Hero from "@/components/ui/hero"

export default function Home() {
  return (
    <div className="bg-white">
      <Hero/>
      <main>
        <div className="flex list-none flex-row items-center justify-between p-24">
          <li>test</li>
          <li>space</li>
          <li>!!</li>
        </div>
        <Items/>
      </main>
    </div>
  );
}
