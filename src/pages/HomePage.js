import React from 'react'
import {useQuery} from "react-query"
import useFetch from '../hooks/useFetch';



export default function HomePage() {
  const apiFunction = "/company"

const {data, status} = useQuery(['companyData', apiFunction], useFetch)

  return (
    <section className="showcase">
    <div className='overlay p-5'>
    {status === "loading" && <div className="text-white text-4xl">Loading....</div>} 
    {status === "Error" && <div>Something went wrong please try again later</div>} 
    {status === "success" && ( <article>
        <h1 className='text-center heading flex justify-center capitalize my-6'>All the SpaceX data at one place </h1>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 max-w-3xl md:text-center lg:text-center xlg:text-center">
          <article>
          <h2 className="text-white text-xl md:text-2xl xlg:text-3xl my-4">About</h2>
          <ul className= "text-white text-sm lg:text-base">
            <li>{data.summary}</li>
            <li>SpaceX is founded by {data.ceo}. </li>
            <li>it has  {data.employees} employees.</li>
            <li>SpaceX is founded in {data.founded} </li>
            </ul>
            </article>
            <article>
          <h2 className="text-white text-xl md:text-2xl xlg:text-3xl my-4">Headquaters</h2>
          <ul className= "text-white text-sm lg:text-base">
            <li>{data.headquarters.address}</li>
            <li>{data.headquarters.city}</li>
            <li>{data.headquarters.state} </li>
            </ul>
            </article>
            <article>
          <h2 className="text-white text-xl md:text-2xl xlg:text-3xl my-4">About</h2>
          <ul className= "text-white text-sm lg:text-base">
            <li>{data.summary}</li>
            <li>SpaceX is founded by {data.ceo}. </li>
            <li>it has  {data.employees} employees.</li>
            <li>SpaceX is founded in {data.founded} </li>
            </ul>
            </article>
        </div>
      </article>
      )}
    </div>
    </section>
  )
}
