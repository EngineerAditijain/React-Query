import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
    console.log("email", email);
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchUserByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueries = ({ email }) => {
    const { data: user } = useQuery(
        ['super-hero', email], () => fetchUserByEmail(email)
    )
    console.log("data", user)
    const channelId = user?.data.channelId;

    const courses = useQuery(['courses', channelId], () => fetchUserByChannelId(channelId),
    )
    console.log("courses",courses);
    return (
        <div>DependentQueries.page</div>
    )
}
