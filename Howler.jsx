//Reusable component for embedding audio using Howler
//Usage: <Howler theme="dark" backgroundMusic="path/to/audio.mp3" />

import { useState, useEffect } from "react";
import { Howl } from "howler";

const PlayIcon = ({ width = "40px", height = "40px", fill = "#fff" }) => (
	<svg
		fill={fill}
		width={width}
		height={height}
		viewBox="0 0 52.821 52.821"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path d="M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588 C17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594 c6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424 c-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012 c0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475 c-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801 c-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108 c2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z" />
			<path d="M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174 c1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609 c-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355 c-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033 c-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154 C21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748 c1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244 C23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037 c0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045 C26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854 c-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889 C21.281,21.785,22.06,22.047,22.896,22.258z" />
		</g>
	</svg>
);

const PauseIcon = ({width = "40px",height = "40px",fill = "#000000",stroke = "#000000"}) => (
	<svg
		fill={fill}
		stroke={stroke}
		version="1.1"
		id="Ebene_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={width}
		height={height}
		viewBox="0 0 64 64"
		enableBackground="new 0 0 64 64"
		xmlSpace="preserve"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			<g>
				<path d="M24,21c-1.104,0-2,0.896-2,2v18c0,1.104,0.896,2,2,2s2-0.896,2-2V23C26,21.896,25.104,21,24,21z"></path>
				<path d="M40,21c-1.104,0-2,0.896-2,2v18c0,1.104,0.896,2,2,2s2-0.896,2-2V23C42,21.896,41.104,21,40,21z"></path>
				<path d="M32,0C23.453,0,15.417,3.329,9.374,9.374C3.329,15.417,0,23.453,0,32s3.329,16.583,9.373,22.626 C15.417,60.671,23.453,64,32,64s16.583-3.329,22.627-9.374C60.671,48.583,64,40.547,64,32s-3.329-16.583-9.373-22.626 C48.583,3.329,40.547,0,32,0z M51.798,51.798C46.51,57.087,39.479,60,32,60c-7.479,0-14.51-2.913-19.798-8.202 C6.913,46.51,4,39.479,4,32s2.913-14.51,8.202-19.798C17.49,6.913,24.521,4,32,4c7.479,0,14.51,2.913,19.799,8.202 C57.088,17.49,60,24.521,60,32S57.088,46.51,51.798,51.798z"></path>
			</g>
		</g>
	</svg>
);

const Howler = ({ theme, backgroundMusic }) => {
	const [musicPlaying, setMusicPlaying] = useState(true);
	const [howlInstance, setHowlInstance] = useState(null);

	useEffect(() => {
		const howl = new Howl({
			src: [backgroundMusic],
			autoplay: true,
			loop: true,
			volume: 0,
			onplay: () => {
				howl.volume(0.5);
			},
			onplayerror: () => {
				console.log("Autoplay failed, waiting for user interaction.");
				howl.once("unlock", () => {
					howl.play();
				});
			},
		});
		setHowlInstance(howl);

		howl.play();

		return () => {
			howl.stop();
		};
	}, [backgroundMusic]);

	const toggleMusic = () => {
		if (!howlInstance) return;

		if (musicPlaying) {
			howlInstance.pause();
		} else {
			howlInstance.play();
		}

		setMusicPlaying(!musicPlaying);
	};
	return (
		<div className="flex flex-col items-center justify-center space-x-0 space-y-0">
			<button
				onClick={toggleMusic}
				className={`px-4 py-2 ease-in-out hover:-translate-y-1 hover:scale-110 transition duration-300 ${musicPlaying ? "" : "animate-bounce"}`}
			>
				{theme === "dark"
					? (musicPlaying && <PauseIcon fill="#fff" />) || (
							<PlayIcon fill="#fff" />
						)
					: (musicPlaying && <PauseIcon fill="#000000" />) || (
							<PlayIcon fill="#000000" />
						)}
			</button>
		</div>
	);
};

export default Howler;
