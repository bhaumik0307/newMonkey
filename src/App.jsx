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
  const pageSize = 6
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route exact path="/" element={<Layout />}>
          <Route exact path = "" element = {<News key="general" pageSize = {pageSize} category = 'general' />} />
          <Route exact path = "business" element = {<News key="business" pageSize = {pageSize} category = 'business' />} />
          <Route exact path = "entertainment" element = {<News key="entertainment" pageSize = {pageSize} category = 'entertainment' />} />
          <Route exact path = "health" element = {<News key="health"  pageSize = {pageSize} category = 'health' />} />
          <Route exact path = "science" element = {<News key="science" pageSize = {pageSize} category = 'science' />} />
          <Route exact path = "sports" element = {<News key="sports"  pageSize = {pageSize} category = 'sports' />} />
          <Route exact path = "technology" element = {<News key="technology" pageSize = {pageSize} category = 'technology' />} />
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
