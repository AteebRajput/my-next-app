import { notFound } from "next/navigation"

export default function ProductReviews({params} : {
    params : {reviewId : string}
}){
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return <>
    <h1>Reviews are {params.reviewId}</h1>
    
    </>
}