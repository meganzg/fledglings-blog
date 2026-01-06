import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`,
                    },
                });
                let json;
                try {
                    json = await response.json();
                } catch {
                    throw new Error(`Non-JSON response. HTTP ${response.status}`);
                }

                console.log('Full API response:', json);
                console.log('HTTP Status:', response.status);

                if (!response.ok) {
                    // Strapi usually returns { error: {...} }
                    const msg = json?.error?.message || `Request failed: HTTP ${response.status}`;
                    throw new Error(msg);
                }

                setData(json?.data ?? []);
                console.log('API response', json.data);
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])


    return { loading, error, data }

}

export default useFetch