import Image from "next/image";
import FoodsImages, { FoodImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";
import Link from "next/link";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const photo: FoodImage | undefined = FoodsImages.find((p) => p.id === params.id);
  
  if (!photo) return <p>Photo not found</p>;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.location}</h3>
      </div>

      {/* Close modal link */}
      <Link href="/photo-feed" className="text-blue-500 underline">
        Close
      </Link>
    </Modal>
  );
}
