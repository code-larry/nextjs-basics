import React from 'react'
import axios from 'axios'
import { Layout } from "../../components/layout"
import Head from 'next/head'

const CodeRegion = ({data}) => {

	return (
		<>
		{
			// Si data existe alors on peut envoyer le contenu
			data && (
				<>
				<Head>
					<title>{data.nom}</title>
				</Head>
				<Layout>
					<div className="container">
						<h1>Region : {data.nom}</h1>
						<p>Code : {data.code}</p>
					</div>
				</Layout>
				</>
			)
		}
		</>
	)
}

// Context contient plusieurs propriété dont params, ici on a utilisé le destructuring pour récupérer directement params
export const getServerSideProps = async ({params}) => {
	const code = params.code;
	const {data} = await axios.get(`${process.env.API_GEO}/regions/${code}`)

	return {
		props: {
			data
		}
	}
}

export default CodeRegion;