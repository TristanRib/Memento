const today = new Date();

export default function Page() {
    return <h1>Hello ! Today is : {today.toString()}</h1>
}