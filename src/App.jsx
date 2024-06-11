import React, { Component } from 'react'
import { Navbar, News } from './components'
import Layout from './Layouts/Layout'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  const apikey = import.meta.env.VITE_NEWS_API_KEY || 'default value'
  console.log('hello')
  console.log(apikey)
  console.log(import.meta.env.VITE_NEWS_API_KEY)
  const pageSize = 6
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route exact path="/" element={<Layout />}>
          <Route exact path = "" element = {<News key="general" pageSize = {pageSize} apikey={apikey} category = 'general' />} />
          <Route exact path = "business" element = {<News key="business" pageSize = {pageSize} apikey={apikey} category = 'business' />} />
          <Route exact path = "entertainment" element = {<News key="entertainment" pageSize = {pageSize} apikey={apikey} category = 'entertainment' />} />
          <Route exact path = "health" element = {<News key="health"  pageSize = {pageSize} apikey={apikey} category = 'health' />} />
          <Route exact path = "science" element = {<News key="science" pageSize = {pageSize} apikey={apikey} category = 'science' />} />
          <Route exact path = "sports" element = {<News key="sports"  pageSize = {pageSize} apikey={apikey} category = 'sports' />} />
          <Route exact path = "technology" element = {<News key="technology" pageSize = {pageSize} apikey={apikey} category = 'technology' />} />
        </Route>
      )
    )
    return (
      <>
        <RouterProvider router = {router} />
      </>
    )
}

export default App
