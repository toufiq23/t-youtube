import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from "./ChannelRow.js"
import "./searchPage.css"
import VideoRow from './VideoRow.js';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage_filter">
				<TuneOutlinedIcon />
				<h2>Filter</h2>
			</div>
			<hr />

			<ChannelRow
				image=""
				channel="Clever programmer"
				verified
				subs="659K"
				noOfVideos={382}
				description="find awesome programme"
			/>
			<hr />

			<VideoRow
				views="1.4M"
				subs="660k"
				description=""
				timestamp=""
				channel="Clever Programmer"
				title=""
				image=""
			/>
		</div>
	)
}

export default SearchPage
