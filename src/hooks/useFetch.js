import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = '1b9b147a9464233c1c5ca8eec509b02312d88bea578fd094bc57e9af5d3db669ca5ae8797678903d84481b80ca81227907ff371b0572415fee2c709ec91c8570e2d45985d84fb268af29c43dd20792c188572c92bfd05503ac90f04cbc096dc878d430a55fd19e0e6d1d7e677db270ae36a9ad7abce6195173695efe1da11bee'

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