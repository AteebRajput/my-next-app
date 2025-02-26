import { StaticImageData } from "next/image";
import onion from "./photos/onion.jpg"
import corn from "./photos/corn.jpg"
import potato from "./photos/potato.jpg"
import rice from "./photos/rice.jpg"

export type FoodImage = {
    id:string;
    name:string;
    src:StaticImageData;
    location:string;
}

const FoodsImages : FoodImage[] = [
    {
        id:"1",
        name: "Fresh Onions",
        src:onion,
        location:"Sindh"
    },
    {
        id:"2",
        name: "Fresh Potatoes",
        src:potato,
        location:"Sahiwal"
    },
    {
        id:"3",
        name: "Fresh Corn",
        src:corn,
        location:"Bhakkar"
    },
    {
        id:"4",
        name: "Organic Rice",
        src:rice,
        location:"Sialkot"
    },
] 

export default FoodsImages