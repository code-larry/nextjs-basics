import React from 'react'
import { Layout } from "../../components/layout"
import Head from 'next/head'

const Items = () => {
	return (
		<>
		<Head>
			<title>Items</title>
		</Head>
		<Layout>
		<div className="container">
			<h1>Items</h1>
		</div>
		</Layout>
		</>
	)
}

export default Items;