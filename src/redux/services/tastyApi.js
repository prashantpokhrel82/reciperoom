import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const tastyApi  = createApi({
    reducerPath: 'tastyApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://tasty.p.rapidapi.com/'}),
    endpoints: (builder)=>({
        getAllTags: builder.query({query:()=>'/tags/list'})
    })
})