import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { TiFlash } from 'react-icons/ti';
import { FaRunning, FaStickerMule } from 'react-icons/fa';
import { TbHourglassLow } from 'react-icons/tb';
import { IoIosTimer } from 'react-icons/io';

//Styles
import '../styles/Home.css';

const CarouselItem = ({ item }) => {
	let timeReadyIcon;
	let timeReadyClass;

	if (item.readyInMinutes > 0 && item.readyInMinutes <= 20) {
		timeReadyIcon = <TiFlash size={20} color="#fff" />;
		timeReadyClass = 'time-flash';
	} else if (item.readyInMinutes > 20 && item.readyInMinutes <= 30) {
		timeReadyIcon = <FaRunning size={20} color="#fff" />;
		timeReadyClass = 'time-fast';
	} else if (item.readyInMinutes > 30 && item.readyInMinutes <= 45) {
		timeReadyIcon = <TbHourglassLow size={20} color="#fff" />;
		timeReadyClass = 'time-slow';
	} else if (item.readyInMinutes > 45 && item.readyInMinutes <= 70) {
		timeReadyIcon = <FaStickerMule size={20} color="#fff" />;
		timeReadyClass = 'time-mule';
	} else if (item.readyInMinutes > 70) {
		timeReadyIcon = <IoIosTimer size={20} color="#6b7280" />;
		timeReadyClass = '';
	}

	return (
		<div className="p-carousel-item">
			<Link to={`/recipes/${item.id}`}>
				<div className="carousel-item-container">
					<div className="carousel-item-content">
						<div className="carousel-item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
						<div className={`random-pick-stats ${timeReadyClass}`}>
							{timeReadyIcon}
							{item.readyInMinutes}'
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const Carousel = ({ value }) => {
	return (
		<div className="p-carousel p-component p-carousel-horizontal">
			<div className="p-carousel-content">
				<div className="p-carousel-container">
					<div className="p-carousel-items-content" style={{ height: 'auto' }}>
						<div className="p-carousel-items-container">
							{value.map((recipe) => {
								return <CarouselItem item={recipe} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
