const BASE_URL = "https://api.spacexdata.com/v4";


 const useFetch = async ({queryKey}) => {
    const [_, apiFunction] = queryKey
    const data = await fetch( `${BASE_URL}${apiFunction}`);
    return data.json();
  }
  
  export default useFetch