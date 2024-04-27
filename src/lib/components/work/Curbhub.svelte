<script lang="ts">
	import CardTemplate from '../CardTemplate.svelte';
</script>

<CardTemplate
	title="Software Development Intern"
	date="Jun 2022-Aug 2022"
	subTitle="Curbhub"
	websiteURL="https://www.curbhub.io/"
	location="Boston, MA"
	listItems={[
		'Enabled <span class="font-bold">VeRoViz</span> to visualize vehicle routing problem (VRP) with Folium and Cesium in 2D and 3D',
		'Implemented a conversational bot on WhatsApp with <span class="font-bold">Twilio\'s API</span> and Flask for users to submit their ID to perform background checks, used to verify and validate user\'s inputs, improved the sign up rate of shippers',
		'Predicted the travel time between delivery orders using <span class="font-bold">Uber\'s H3</span>, Google Maps Distance Matrix API, and NetworkX\'s Dijkstra algorithm, visualized the shortest path on a hexagonal network to improve delivery efficiency',
		'Designed a <span class="font-bold">REST API</span> with Flask that returns last-mile delivery trip info, tested with 100% coverage with unit testing and Postman, wrote documentation with descriptive instructions, standardized the internal data transfer'
	]}
/>
