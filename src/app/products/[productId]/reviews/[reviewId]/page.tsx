"use client";
import { notFound } from "next/navigation";

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReviews({
  params,
}: {
  params: { reviewId: string };
}) {
  const random = getRandom(2);
  if (random === 1) {
    throw new Error("Error Loading Review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>Reviews are {params.reviewId}</h1>
    </>
  );
}
