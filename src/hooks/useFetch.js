import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = 'c6226d4e227b4f3781e0aefc5e8b6cdb8be1d0726b6d719be5921efe2b5e80d53dfb7207238963b5fe0378b8b2dc52398d430dca5ad6e137362f8366271f99f972ed7c32ac686b468efa47613474cb4b80e99ffa29a141c0b82423f6eb4046eb5e8c5a08e7dcac867f667c008f95acdd605cdcdc86ec891591b7b298f66c58a5'

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