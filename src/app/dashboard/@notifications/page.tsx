import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"/dashboard/archieved"}>Archieved</Link>
    </Card>
  );
}
