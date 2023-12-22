import React from 'react'

interface Props {
    params: {id: number}
}
const Page = ({params: {id }}: Props) => {
    return (
        <div>UserDetailPage {id}</div>
    )
}
export default Page
