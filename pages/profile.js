import React, { useState, useEffect } from 'react'
import { Layout } from "../components/layout"
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import Head from 'next/head'

const fetcher = url => axios.get(url).then(response => response.data);

const Profile = () => {
	// const [data, setData] = useState();
	// const url = "https://jsonplaceholder.typicode.com/users";

	// useEffect(() => {
	// 	axios.get(url)
	// 		.then(response => {
	// 			setData(response.data)
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// }, [])
	
	const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_PROFILE}`, fetcher)

	if(!data) {
		return <h1>Chargement en cours ...</h1>
	}

	if(error) {
		return <h1>Une erreur est survenue !</h1>
	}

	return (
		<>
		<Head>
			<title>Liste des utilisateurs</title>
		</Head>
		<Layout>
		<div className="container">
			<p className="alert alert-info">Cette page utilise le rendu côté client avec le hook SWR</p>
				{
					// Si data existe alors on peut envoyer le contenu
					data && data.map(user => (
						<div key={user.id}>
							<h1>{user.name}</h1>
							<p>Username : {user.username}</p>
							<p>Email : {user.email}</p>
							<p>Telephone : {user.phone}</p>
						</div>
					))
				}
		</div>
		</Layout>
		</>
	)
}

export default Profile;