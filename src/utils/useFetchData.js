import { useEffect, useState } from "react";
const useFetchData = (url) => {
    const [json, setJson] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setJson(json.data);
    }
    return json;
};
export default useFetchData;