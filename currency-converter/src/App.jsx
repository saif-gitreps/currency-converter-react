import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
   const [amount, setAmount] = useState(1);
   const [from, setFrom] = useState("usd");
   const [to, setTo] = useState("bdt");
   const [convertedAmount, setConvertedAmount] = useState(0);

   const currencyInfo = useCurrencyInfo(from);

   // Object has method which takes all the keys in an array i think.
   const options = Object.keys(currencyInfo);

   const convert = () => {
      setConvertedAmount(amount * currencyInfo[to]);
   };

   const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
   };

   return (
      <div className="bg-slate-600 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
         <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  {/* using the custom Input component here.*/}
                  <div className="w-full mb-1">
                     <Input
                        label="From"
                        amount={amount}
                        currencyOption={options}
                        onCurrencyChange={() => setAmount(amount)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                     />
                  </div>
                  <div className="relative w-full h-0.5">
                     <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                     >
                        swap
                     </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                     <Input
                        label="To"
                        amount={convertedAmount}
                        currencyOption={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={from}
                        amountDisable
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                     onClick={() => convert()}
                  >
                     Convert {from} to {to}
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default App;
