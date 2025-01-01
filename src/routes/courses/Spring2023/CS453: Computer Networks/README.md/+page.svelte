<script>
	import {
		CourseHeader,
		CourseDescription,
		CourseReflection,
		CourseNavigation,
		CourseDivider,
		CourseDemonstration,
		CourseCode
	} from '$lib/components/course';

	let code = `
try: 
    clientSocket.connect((serverIP, serverPort))
except ConnectionRefusedError: 
    clientSocket.close()
    print(f"Connection Failure on {datetime.now()}")
    exit()
                
clientSocket.send(message.encode())
newMessage = clientSocket.recv(4096)
    `;
</script>

<svelte:head>
	<title>Computer Networks</title>
	<meta name="description" content="Computer Networks" />
</svelte:head>

<CourseHeader>CS453: Computer Networks</CourseHeader>

<CourseDescription>
	Course Description: This course provides an introduction to fundamental concepts in the design and
	implementation of computer communication networks, their protocols, and applications. Topics to be
	covered include: overview of network architectures, applications, network programming interfaces
	(e.g., sockets), transport, congestion, routing, and data link protocols, addressing, local area
	networks, SDN Networks, wireless networks, network security, and network management. Examples will
	be drawn primarily from the Internet (e.g., TCP, UDP, and IP) protocol suite.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Spring 2023. This course was a great introduction to the fundamental
		concepts in understanding how computer communication networks work. Jim Kurose and Nikko taught
		this course, and they are very knowledgeable. Jim wrote the book Computer Networking: A Top-Down
		Approach, what a great textbook that I read every single page of it. It was also his last
		semester teaching at UMass offically before he was retired. Two of the most interesting projects
		I did in this course were setting up TCP and UDP client and server, and another one was about
		reliable data transfer protocol. I learned about how to set up a network, how to use Wireshark
		to capture packets, and how to use socket programming to send and receive data. Amazing course!
		Final was optional! The course wasn't overly diffculty, but definitely needed to put in the
		effort to understand the concepts. You can check out the socket programming project from here:
		<a href="/project/personal/Socket programming/" class="underline">Socket Programming </a>.
	</p>
</CourseReflection>

<CourseDemonstration name="Network Programming" />
<CourseCode language="python" {code} />

<CourseNavigation
	prevLink="Spring2023/CS326: Web Programming"
	nextLink="Spring2023/CS589: Machine Learning"
/>
