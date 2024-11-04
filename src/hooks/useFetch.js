import { useState, useEffect } from "react";
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((err) => {
				setErrorMessage(err.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);
	return [data, isLoading, errorMessage];
};
export default useFetch;
