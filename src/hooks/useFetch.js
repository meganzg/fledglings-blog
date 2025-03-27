import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = '0fad20d0acf27bff746a0a587c7c4a02eb83c3430df86223bf4543f3f60009899f50642e0e1cef9af73616ed7d28c7c292dc432e520cd20d262a0286102bd937f63647f220d5de33a8b5555b555d9f5e05eed412746bbcaba1ba08bc105c789a3596c82d64b37604055bd21a2abc063ef839898961987a6b31e2bc49048cd223'

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