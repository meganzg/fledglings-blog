import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            console.log('Token from env:', process.env.REACT_APP_STRAPI_API_TOKEN);

            setLoading(true)

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`,
                    },
                });
                const json = await response.json()

                console.log('Full API response:', json);
                console.log('HTTP Status:', response.status);

                setData(json.data)
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