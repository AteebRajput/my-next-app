import { Metadata } from "next"

type props = {
    params:{
        productId : string;
    }
}

export const generateMetadata = async ({params} : props) : Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        },100)
    })
    return {
        title : `Product ${title}`,
    };
};

export default function ProductDetail({params} : props){
    return <>
    <h2>This is Product {params.productId}</h2>
    </>
}