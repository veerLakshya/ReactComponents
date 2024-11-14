//Reusable component for embedding YouTube videos
//Usage: <YouTubeEmbed videoId="I3dUY_fz-0Q" start={0} autoplay={0} width="640" height="390" />

import YouTube from "react-youtube";

const YouTubeEmbed = ({
	videoId = "I3dUY_fz-0Q", // Default video ID
	start = 0, // Default start time
	autoplay = 0, // Default autoplay setting (0 = off)
	width = "640", // Default width
	height = "390", // Default height
}) => {
	const opts = {
		height,
		width,
		playerVars: {
			autoplay,
			start,
		},
	};
	return <YouTube videoId={videoId} opts={opts} />;
};
export default YouTubeEmbed;
