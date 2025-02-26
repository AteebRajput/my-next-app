import Image from "next/image";
import FoodsImages, { FoodImage } from "../wonders";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo: FoodImage | undefined = FoodsImages.find((p) => p.id === params.id);

  if (!photo) return <p>Photo not found</p>;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-green-500 py-4">
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
