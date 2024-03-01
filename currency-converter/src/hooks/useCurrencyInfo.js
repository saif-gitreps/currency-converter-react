import { useEffect, useState } from "react";

const useCurrencyInfo = (currency = "usd") => {
   const [data, setData] = useState({});

   useEffect(() => {
      fetch(
         `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
         .then((response) => {
            return response.json();
         })
         .then((result) => {
            console.log(result[currency]);
            setData(result[currency]);
         })
         .catch((error) => {
            console.log("Error fetching data:", error);
         });
   }, [currency]);
   console.log(data);
   return data;
};

export default useCurrencyInfo;
