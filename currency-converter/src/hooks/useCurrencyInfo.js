import { useEffect, useState } from "react";

const useCurrencyInfo = (currencyA, currencyB) => {
   const [data, setData] = useState({});
   useEffect(() => {
      fetch(`https://www.revolut.com/api/quote/public/${currencyA}${currencyB}`)
         .then((result) => result.json)
         .then((result) => {
            setData(result[currencyA]);
            setData(result[currencyB]);
         });
   }, [currencyA, currencyB]);
   console.log(data);
   return data;
};

export default useCurrencyInfo;
