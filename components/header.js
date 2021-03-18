import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {

	// Hook permettant de récupérer les infos concernant la route visitée
	// Ici je vais l'utiliser pour définir une classe active lorsqu'un élément du menu est sélectionné
	const router = useRouter();
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link href="/">
								{/* Si la route visitée est celle correspondant au bouton alors on lui applique la classe active */}
								<a className={router.pathname === "/" ? "nav-link active" : "nav-link"}>Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/blog">
								<a className={router.pathname === "/blog" ? "nav-link active" : "nav-link"}>Blog</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/profile">
								<a className={router.pathname === "/profile" ? "nav-link active" : "nav-link"}>Profile</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/blog/items">
								<a className={router.pathname === "/blog/items" ? "nav-link active" : "nav-link"}>Items</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/blog/categories">
								<a className={router.pathname === "/blog/categories" ? "nav-link active" : "nav-link"}>Categories</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}