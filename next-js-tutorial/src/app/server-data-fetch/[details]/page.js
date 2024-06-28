async function fetchUserData(userId){

    try{
        const apiResponse = await fetch(`https://dummyjson.com/users/${userId}`)
        const result = await apiResponse.json();
        return result;
    }catch(e){
        throw new Error(e);
    }

}
export default async function UserDetails({params}){
    const userDetails = await fetchUserData(params.details);
    console.log(userDetails)

    return <div className="flex flex-col">
        <h1 className="font-extrabold">{userDetails.firstName} {userDetails.lastName}</h1>
        <span>age: {userDetails.age}</span>
        <span>email: {userDetails.email}</span>
        <span>{userDetails.image}</span>
        <img src={userDetails.image} className="w-20"/>
        <span>birthDate: {userDetails.birthDate}</span>
        <span>Address: {userDetails.address.address}</span>
        <span>University: {userDetails.university}</span>
    </div>
}