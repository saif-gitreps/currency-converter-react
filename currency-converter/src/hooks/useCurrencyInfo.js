import { useEffect, useState } from "react";

const useCurrencyInfo = (currencyA, currencyB) => {
   const [data, setData] = useState({});
   useEffect(() => {
      fetch(`https://www.revolut.com/api/quote/public/SARBDT`)
         .then((result) => {
            console.log(result);
         })
         .then((result) => {
            console.log(result);
            console.log(currencyA);
            console.log(currencyB);
            setData(result[currencyA]);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [currencyA, currencyB]);
   console.log(data);
   return data;
};

export default useCurrencyInfo;
