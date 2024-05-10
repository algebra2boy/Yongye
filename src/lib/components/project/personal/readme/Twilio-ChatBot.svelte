<h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
<p class="mb-6">
	This project is called WhatsApp Chat Bot. The bot can be used to communicate with real users. The
	purpose of the bot is to provide access to Curbhub's users to upload their personal information
	and ID to the system.
</p>

<h2 class="text-2xl font-semibold">How to Use the Bot</h2>
<ol class="list-decimal pl-5 mb-6">
	<li>Text "Hi" to Curbhub's business number on WhatsApp.</li>
	<li>Provide your personal information.</li>
	<li>Type a single number to confirm your text messages.</li>
	<li>Repeat steps 2 and 3 until you submit your ID.</li>
	<li>Text "Check" to see your information.</li>
	<li>Text "Done" to our bot.</li>
</ol>

<h2 class="text-2xl font-semibold">Technologies</h2>
<ul class="list-disc pl-5 mb-6">
	<li><strong>Flask:</strong> Provided a web framework to ensure webhook.</li>
	<li>
		<strong>Twillio:</strong> Used to create two-way communication between clients and server.
	</li>
	<li>
		<strong>Ngrok:</strong> Temporarily pushes the local app to live for debugging and testing purposes.
		Remember to make an account and have your token ready, then add your token to the executable file
		(ngrok authtoken).
	</li>
	<li><strong>PyCharm:</strong> This project is programmed entirely within PyCharm.</li>
</ul>

<h2 class="text-2xl font-semibold">How the Bot Works Internally</h2>
<p class="mb-6">
	The program creates a folder for any user who initializes chat with the bot. Any message texted by
	the user is stored in their designated file called "info.json".
</p>

<h2 class="text-2xl font-semibold">Video walkthrough</h2>
<div class="aspect-w-16 aspect-h-9 mb-6">
	<iframe
		src="/video/bot.mp4"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		class="w-full h-96"
		title="bot"
	/>
</div>

<h2 class="text-2xl font-semibold">Edge cases</h2>
<ul class="list-disc pl-5">
	<li>The bot does not accept any numbers or symbols for names.</li>
	<li>The bot only accepts valid email domains (for example, @gmail.com, @yahoo.com).</li>
</ul>
<img src="/image/curbhub_bot.png" alt="bot" />
