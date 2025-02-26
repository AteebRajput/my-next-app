import Link from "next/link";
import Image from "next/image";
import FoodsImages from "./wonders";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Some Vegetables and Grains
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {FoodsImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`} as={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
