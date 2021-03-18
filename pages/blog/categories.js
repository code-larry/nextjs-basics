import React from 'react'
import { Layout } from "../../components/layout"
import Head from 'next/head'

const Categories = () => {
	return (
		<>
		<Head>
			<title>Catégories</title>
		</Head>
		<Layout>
			<div className="container">
				<h1>Categories</h1>
			</div>
		</Layout>
		</>
	)
}

export default Categories;