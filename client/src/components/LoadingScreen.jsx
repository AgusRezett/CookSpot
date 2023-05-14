import React, { useState } from 'react';

// Components
import { Watch } from 'react-loader-spinner';
import { IoSad } from 'react-icons/io5';

// Styles
import '../styles/LoadingScreen.css';

// Redux
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const LoadingScreen = ({ styles }) => {
	let navigate = useNavigate();
	const loadingStatus = useSelector((state) => state.loadingStatus);

	const [loadingDots, setloadingDots] = useState('');

	setTimeout(() => {
		if (loadingDots !== ' . . .') {
			setloadingDots(loadingDots + ' .');
		} else {
			setloadingDots('');
		}
	}, 1000);

	return (
		<div style={styles} className={`loading-screen-container ${loadingStatus && '--active'}`}>
			{loadingStatus === 'error' ? (
				<>
					<IoSad size={95} color="#2f2a21" />
					<span className="subtitle-loading">An error has occurred.</span>
					<a
						className="go-back-button"
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
					>
						Go back
					</a>
				</>
			) : (
				<>
					<Watch height="85" width="85" radius="46" color="#2f2a21" ariaLabel="watch-loading" visible={true} />
					<span className="subtitle-loading">Loading {loadingDots}</span>
				</>
			)}
		</div>
	);
};
