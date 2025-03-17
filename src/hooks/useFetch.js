import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url)
                const json = await response.json()

                setData(Object.values(json))
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