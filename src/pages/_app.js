import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<Component {...pageProps} />
		</AnimatePresence>
	);
}
