import { useParams } from "react-router-dom";

export const Details = () => {
    const params = useParams();
    let { name } = params;
    return (
        <div>Details {name}</div>
    )
}
