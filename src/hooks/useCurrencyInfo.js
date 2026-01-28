import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        if (!currency)return;
        fetch(`https://v6.exchangerate-api.com/v6/fe7dc5d35ff37a3ee3156203/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates),[currency])
        console.log(data);
    });
   
    return data
}

export default useCurrencyInfo;