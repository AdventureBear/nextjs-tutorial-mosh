interface Props {
    params: {id: number}
}
const Page = ({params: {id}}: Props) => {
    return (
        <div>Photos for User {id}</div>
    )
}
export default Page
