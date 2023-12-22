import React from 'react'

interface Props {
    params: { id: number; pid: number; }
}

const PhotoPage = ({ params: { id, pid }}: Props) => {
    console.log(id, pid)
    return (
        <div>PhotoPage {id} {pid}</div>
    )
}

export default PhotoPage