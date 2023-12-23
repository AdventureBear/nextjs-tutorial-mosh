import React from 'react'
import {notFound} from "next/navigation";

interface Props {
    params: {id: number}
}
const Page = ({params: {id }}: Props) => {
    if (id>10) notFound()
    return (

        <div>UserDetailPage {id}</div>
    )
}
export default Page
