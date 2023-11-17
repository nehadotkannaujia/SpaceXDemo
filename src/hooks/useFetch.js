const BASE_URL = "https://api.spacexdata.com/v4/";


export default async function useFetch(){
    const data = await fetch( `${BASE_URL}/company`);
    return data.json();
  }
  