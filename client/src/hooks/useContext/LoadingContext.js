import React, { useState } from 'react';

export const loadingContext = React.createContext();

export const LoadingProvider = ({ children }) => {
	const [loadingStatus, setLoadingStatus] = useState(true);

	return (
		<loadingContext.Provider value={{ loadingStatus: loadingStatus, setLoadingStatus: (action) => setLoadingStatus(action) }}>
			{children}
		</loadingContext.Provider>
	);
};
