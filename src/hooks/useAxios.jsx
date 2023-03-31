import axios from "axios"


const BASE_URL = "https://12256.fullstack.clarusway.com/";



import React from 'react'

const useAxios = () => {
  return (
    <div>useAxios</div>
  )
}

export default useAxios
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });