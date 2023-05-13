import React, { useState } from 'react';

// Components
import { Watch } from 'react-loader-spinner';

// Styles
import '../styles/LoadingScreen.css';

// Redux
import { useSelector } from 'react-redux';

export const LoadingScreen = ({ styles }) => {
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
			<Watch height="85" width="85" radius="46" color="#2f2a21" ariaLabel="watch-loading" visible={true} />
			<span className="subtitle-loading">Cargando {loadingDots}</span>
		</div>
	);
};
