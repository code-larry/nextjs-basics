import React from 'react'
import { Layout } from "../components/layout"
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'

const Blog = ({posts}) => {

	const styles = {
		main: {
			padding: 20,
			margin: 20,
			borderBottom: "1px solid #DDD"
		},
		img: {
			height: 200,
			width: 300,
			cursor: "pointer"
		},
		title: {
			textTransform: "uppercase",
			cursor: "pointer",
			color: "midnightblue"
		},
	}

	return (
		<>
		<Head>
			<title>Liste des articles</title>
		</Head>
		<Layout>
		<div className="container">
			<p className="alert alert-info">Cette page utilise getStaticProps</p>
				{
					// On map sur notre objet de type Array pour afficher les données
					posts.map(post => (
						<div style={styles.main} key={post._id}>
							<Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
								<h1 style={styles.title}>{post.title}</h1>
							</Link>
							<div>
								<Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
									<img src={post.pictures[0]} style={styles.img}/>
								</Link>
							</div>
							<div>
								{post.body}
							</div>
						</div>
			
					))
				}
		</div>

		</Layout>
		</>
			
	)
}

export const getStaticProps = async(context) => {
	// const url = 'https://aqueous-meadow-07678.herokuapp.com'
	// Destructuring pour récupérer les données dans un objet data
	const {data} = await axios.get(`${process.env.API_BLOG}/api/posts`)
	// Toutes les données sont renvoyées dans un objet contenant un tableau à la clé data
	const posts = data.data

	// On retourne nos posts
	return{
		props: {
			posts
		}
	}
}
export default Blog;