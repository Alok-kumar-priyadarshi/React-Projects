import {useState , useEffect} from "react"

function useCurrencyInfo(currency){

    const [data,setData] = useState({});
    useEffect(() => {

        let date = new Date();
        const formattedDate = date.toISOString().split('T')[0];
        console.log(formattedDate);


        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${currency}.json`).then((res) => res.json()).then((res) => setData(res[currency]))
        // console.log(data);
  
    }, [currency])

    console.log(data);
    return data;

}

export default useCurrencyInfo;