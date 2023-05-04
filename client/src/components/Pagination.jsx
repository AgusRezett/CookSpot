import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({ recipesPage, allRecipes, paged, currentPage = 1, style }) {
	const pages = [];

	for (let i = 1; i <= Math.ceil(allRecipes / recipesPage); i++) {
		pages.push(i);
	}

	return (
		<>
			{pages.length > 1 && (
				<nav className="pagination-container" style={style}>
					<ul className="pages">
						{pages?.map((p) => (
							<li className="page" key={p}>
								<button
									className={`pageBtn ${currentPage === p && 'button-page--active'}`}
									onClick={() => paged(p)}
								>
									{p}
								</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	);
}