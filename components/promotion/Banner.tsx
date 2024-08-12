
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Banner() {
    return (
      <div className="relative bg-slate-400 h-[300px] overflow-hidden">
        <Image
          src="/placeHolder.jpg"
          alt="Special offer background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto h-full py-6 px-4 flex justify-start ">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Special Offer</h2>
            <p className="text-lg mb-4">Get 50% off on all products</p>
            <Link href="/promotion">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }