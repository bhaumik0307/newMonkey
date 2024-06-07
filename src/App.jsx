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
  // VITE_REACT_APP_NEWS_API = '6c887a5bdbb34408905570e4aa29105d'
  const apikey = '6c887a5bdbb34408905570e4aa29105d'
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
