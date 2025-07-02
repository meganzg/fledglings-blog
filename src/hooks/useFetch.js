import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = 'e54580ff096755b398f376193d93eda76444338c3d6418bd89c03e170bf9d9f14b13b62fbf5c0df32b89ec9784a37de2fccc5fb4640075706f81d99285e5ce365b8abb526db8f85563d6d8604496c4159834d72377e26983d19b788f24bb1a8ed0cf450196a18daf8ccb4227ae681c973651a7fd41375416ba00be44b5522631'

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
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
    }, [url, token])


    return { loading, error, data }

}

export default useFetch