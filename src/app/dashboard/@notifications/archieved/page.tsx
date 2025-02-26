import Link from "next/link"
import { Card } from '../../../../components/card';
export default function Archieved(){
    return <>
    <Card>
    <h1>Archieved Notifications</h1>
    <Link href={"/dashboard"} >Back to Default</Link>
    </Card>
    </>
}