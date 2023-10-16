import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'


// import { Layout } from '@vercel/examples-ui'

// Forward properties from `middleware.ts`
// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic here directly.
export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function Index({
  name,
  // languages,
  city,
  region,
  country,
  cityNickname,
  // currencyCode,
  // currencySymbol,
}) {
  name = decodeURIComponent(name) || undefined
  city = decodeURIComponent(city) || undefined
  country = decodeURIComponent(country) || undefined
  cityNickname = decodeURIComponent(cityNickname) || undefined
  let cityWiki = "https://en.wikipedia.org/wiki/"+city+", "+region
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div>
        {true === false ? (
          <div>
            <p>Debug:</p>
            <p>City: ${city} ${typeof(city)}</p>
            <p>Region: ${region} ${typeof(region)}</p>
            <p>Country: ${country} ${typeof(country)}</p>
            <p>City Nickname: ${cityNickname} ${typeof(cityNickname)}</p>
          </div>
          ) : null}
      </div>
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image alt="World Map" src={map} fill={true} quality={100} />
      </div>
      <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 pt-8 sm:pt-20">
        <h1 className="text-3xl sm:text-5xl pb-10 font-bold">Welcome!</h1>
        
        <MyV0Component />

        {city!=='undefined' ? (
          <p className="pt-12 text-xl">You're in beautiful {city}, {region}!</p>
        ) : (
          <div>
            <p className="mt-4 pt-10 text-lg sm:text-xl text-gray-700">
              We'd love to tailor our content to your location, but we haven't set up Edge Middleware yet.
            </p> 
            <p className="mt-4 pt-2 text-lg sm:text-xl text-gray-700">
              <a className="underline text-blue-600" href="https://github.com/dddiggory/ae-cert-next" target="_blank">Help us out?</a>
            </p>
          </div>
        )}

        {city!=='undefined' && cityNickname!=='undefined' ? (
          <div>
            <p className="text-xl pb-4">Also known as {cityNickname}.</p>
            <p>Learn more about {city} <a className="underline text-blue-600" href={cityWiki}>here.</a></p>
            <p>Want a different {city} nickname? <a href="" className="underline text-blue-600">Refresh the page</a> and Middleware will do the rest.</p>
            </div>
        ) : (
          <p></p>
        )}
        
        {city!=='undefined' && cityNickname==='undefined' ? (
          <div>
          <p>I don't know of a nickname for {city}, but I'm sure it's a lovely place.</p>
          <p>Learn more about {city} <a className="underline text-blue-600" href={cityWiki}>here.</a></p>
          </div>
        ) : (
          <p></p>
        )}
    

        
        {country!=='undefined' ? (
          <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition">
          <div className="p-4 flex justify-center items-between border-b">
            <div className="self-center">
              <Image
                alt={`${country} flag`}
                className="rounded-full"
                src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                // src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
                width={32}
                height={32}
              />
            </div>
            <div className="ml-4 mr-auto text-left">
              {/* <h4 className="font-semibold">{name}</h4> */}
              <h5 className="text-gray-700">{city}</h5>
            </div>
            <p className="self-center text-gray-700">{country}</p>
          </div>
          {/* <div className="p-4 flex justify-center items-between border-b bg-gray-50">
            <h4 className="font-semibold text-left mr-auto">Currency</h4>
            <p className="text-gray-700">{`${currencyCode} ${currencySymbol}`}</p>
          </div> */}
          <div className="p-4 flexborder-b bg-gray-50 rounded-b-lg">
            <h4 className="font-semibold text-left">Geolocation Headers</h4>
            <pre className="bg-black text-white font-mono text-left py-2 px-4 rounded-lg mt-4 text-sm leading-6">
              <p>
                <strong>{'x-vercel-ip-city: '}</strong>
                {city}
              </p>
              <p>
                <strong>{'x-vercel-ip-country-region: '}</strong>
                {region}
              </p>
              <p>
                <strong>{'x-vercel-ip-country: '}</strong>
                {country}
              </p>
            </pre>
          </div>
        </section>
        ) : <div></div>}
        
        
        
       
      </main>
    </div>
  )
}

// Index.Layout = Layout
