import React from 'react'
import { Layout } from "../../components/layout"
import axios from 'axios'
import Head from 'next/head'

const Titre = ({data}) => {

	return (
		<>
		{
			// Si data existe alors on peut envoyer le contenu
			data && (
				<>
				<Head>
					<title>{data.title}</title>
				</Head>
				{/* Ici nous pouvons donc afficher le post que nous avons reçu dans data */}
				<Layout>
				<div className="container">
					<p className="alert alert-info">Cette page utilise getStaticPaths et getStaticProps car la route est dynamique</p>
						<h1>{data.title}</h1>
						<div>
							<img src={data.pictures[0]} />
						</div>
						<p>{data.description}</p>
				</div>
				</Layout>
				</>
			)
		}
		</>		
	)
}

// Cette fonction nous permet de recupérer les données pour une route contenant un param dynamique
// Elle est obligatoirement associée à getStaticProps lorsqu'un param de la route est dynamique
export const getStaticPaths = async() => {
	// const url = 'https://aqueous-meadow-07678.herokuapp.com'
	const {data} = await axios.get(`${process.env.API_BLOG}/api/posts`)
	const posts = data.data
	// Posts est un objet de type Array contenant tous nos posts
	// On map sur cet Array afin de récupérer tous les id
	const paths = posts.map(post => ({
		params: {id : post._id}
	}))

	// On retourne ces id et on ajoute l'option fallback qui permet de récupérer tous les nouveaux posts
	// qui seront ajoutés ultérieurement à notre API
	return {
		paths, fallback : true
	}
}

// Maintenant on peut utiliser nos params contenant les id récupérés avec getStaticPaths
// Pour faire notre requête API en fonction de l'id du post que nous souhaiton afficher
export const getStaticProps = async({params}) => {
	// const url = 'https://aqueous-meadow-07678.herokuapp.com'
	const id = params.id
	const {data} = await axios.get(`${process.env.API_BLOG}/api/post/${id}`)

	return {
		props: {
			data
		}
	}
}

export default Titre;