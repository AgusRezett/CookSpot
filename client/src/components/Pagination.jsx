import React from 'react';
import '../styles/Pagination.css';

/* This is a functional component called `Pagination` that takes in several props: `recipesPage`,
`allRecipes`, `paged`, `currentPage`, and `style`. It returns a pagination component that displays a
list of page numbers based on the number of recipes and the number of recipes per page. The
`currentPage` prop is used to highlight the current page number. When a page number is clicked, the
`paged` function is called with the corresponding page number as an argument. */
export default function Pagination({ recipesPage, allRecipes, paged, currentPage = 1, style }) {
	const pages = [];

	/* This code is creating an array of page numbers based on the total number of recipes and the number
	of recipes displayed per page. The `for` loop iterates from 1 to the total number of pages needed
	to display all the recipes, which is calculated by dividing the total number of recipes by the
	number of recipes displayed per page and rounding up to the nearest integer using `Math.ceil()`.
	For each iteration, the current page number is added to the `pages` array using the `push()`
	method. */
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
