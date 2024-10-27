import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setData(res[currency]);
      });
      console.log("Data : ", data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
