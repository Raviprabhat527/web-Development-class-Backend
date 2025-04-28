"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparams = useSearchParams()
  return (
    <div>
      Hey this is our page and blog is {searchparams.get('blog')} and utm source is {searchparams.get('utm_source')}
    </div>
  );
}
