import type { PersonalProject } from '../index.js';

export const personalProjects: PersonalProject[] = [
	{
		name: 'LingoQuest',
		description: 'A language learning web app that helps learn language',
		logo: [
			'Docker',
			'Svelte',
			'Socket.io',
			'Typescript',
			'Gin',
			'Express',
			'MongoDB',
			'Flask',
			'RabbitMQ',
			'AWS',
			'GraphQL'
		],
		startDate: new Date(2024, 5),
		endDate: new Date(2024, 9),
		readme: "This will my independent study final project. Will update once i am done!!"
	},
	{
		name: 'PandoraBox',
		description: 'A Spritekit mini game that simulates the cup game',
		logo: ['Swift'],
		startDate: new Date(2024, 5),
		endDate: new Date(2024, 5),
		githubLink: "https://github.com/algebra2boy/PandoraBox",
		readme: `to be updated`
	},
	{
		name: 'Yongye',
		description: 'My website! (This website!)',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5),
		githubLink: 'https://github.com/algebra2boy/Yongye',
		readme:
			`
Making my website has been something that I wanted to do for years, but I have been waiting for a moment that motivates me to make it, instead of making it just for the sake of making it. Once I turned 21, I realized that I wanted to cherish the accomplishments that I made over the years.
`
	},
	{
		name: 'yogo',
		description: 'A command line tool to provide shortcut',
		logo: ['Typescript', 'Node.js'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5),
		githubLink: "https://github.com/algebra2boy/Yogo",
		readme:
			`
Yogo is a simple command line tool written in Node.js that provides shortcut to many platforms.

## Installation

To install Yogo, make sure you have Node.js installed on your machine. Then, you can install Yogo globally using npm:
\`\`\`bash
git clone https://github.com/algebra2boy/Yogo
cd Yogo
npm run build
npm link 
\`\`\`

## Command line
1. \`yo -v\` or \`yo --version\`: outputs the current version
2. \`yo -h\` or \`yo --help\`: lists all the command and flags
3. \`yo open <site>\`
    - Allows you to open your desired website without visiting a browser.
    - Currently supports three operating system: macOS, Windows, and Linux. 
    - You can add any website shortcut and its url in \`src/commands/openSite/websiteURL.ts\`.
\`\`\`bash
# Examples
yo open canvas
yo open notion
yo open gpt
\`\`\`

4. To check your GitHub contributions, use the following command:
\`\`\`
yo contribution [options]
\`\`\`

Options:
- \`-a, --all\`: Get total contributions on GitHub calendar.
- \`-n, --name <name>\`: Specify your GitHub username.
- \`--today\`: Get today's contributions.
- \`--week\`: Get this week's contributions.
- \`--month\`: Get this month's contributions (excluding the current week).
- \`-c, --count <count>\`: Get the number of contributions for the first/last n week(s) on the calendar.
- \`-f, --filter <filter>\`: Filter by the number of contributions on the calendar.

\`\`\`bash
Examples:
# To get the total contributions for a user:
yo contribution --name <github username> -a

# To get today contributions for a user:
yo contribution --name <github username> --today

# To get contributions for current week:
yo contribution --name <github username> --week 

# To get contributions for last four weeks/one month:
yo contribution --name <github username> --month 

# To get contributions for a specific number of weeks:
yo contribution --name <github username> -c 3
yo contribution --name <github username> --count -2

# To filter contribution
yo contribution --name <github username> -f 20
\`\`\`

5. To generate an image using OpenAI Dall-E3:
- Images will be stored in the \`images\` folder.
- Ora is used for the spinning wheel, and inquirer is used for I/O. 
- You will be asked to give a prompt, size of image, quality of an image.
- You will also have an option to save the image locally or not.
\`\`\`
yo image
\`\`\`

## Important Link
- I learned how to fetch the Github API using graphQL query. The Github GraphQL explorer was very useful for me to visualize graphQL query schema and its documentation was robust and easy to understand.
    - https://docs.github.com/en/graphql/guides/using-the-explorer
    - https://docs.github.com/en/graphql/overview/explorer
- DallE-3 image generation API documentation: https://platform.openai.com/docs/guides/images?context=node

## Permission Denied 
It is possible that you need to manually grant write access to exectute the file.
\`\`\`bash
cd /home/codespace/nvm/current/bin/
chmod +x yo
\`\`\`
`
	},
	{
		name: 'Ice-faculty',
		description: 'A web app that allows faculty to upload office hour',
		logo: ['Docker', 'Typescript', 'Node.js', 'React', 'Express', 'MongoDB', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5),
		githubLink: "https://github.com/algebra2boy/Ice-Faculty",
		readme:
			`
## Introduction

Quick fact: This is the group project for CS 520. 

This is the front-end interface of the project designed specifically for teachers. It is a website that provides easy access for teachers to manage the office hour sections that they uploaded to the database.

## Features included

- Display all of the office hour sections uploaded by a faculty (a faculty won’t be able to see/edit any office hour sections that were uploaded by another faculty)
- Upload office hour sections so that the students are able to add these office hour sections from *ice-quef*
- Modify the details of existing office hours associated with a faculty member if are updates or if any information was entered incorrectly
- Delete an office hour section if it is no longer needed (e.g., end of the semester)

`
	},
	{
		name: 'Ice-queb',
		description: 'A robust REST and WebSocket API for managing office hour',
		logo: ['Docker', 'Typescript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5),
		githubLink: "https://github.com/algebra2boy/Ice-Queb",
		readme:
			`
This is the back-end server of the project that handles request from both the student-end interface and teacher-end interface for office hour queuing app.
A couple of things I learned from this project:
- How to use socket.io to create a real-time communication between the server and client
- How to create a REST API using Express using TypeScript
- How to organize the codespace using the Model Router Controller (MRC) pattern
- How to set up a testing environment using Jest + Supertest + MongoDB-memory-server
- How to create a dockerized app
- How to set up EC2 instance on AWS
- How to use custom middleware to handle error
- How to write robust API documentation using Notion
- How to set up JSON Web Token (JWT) for authentication
- How to use Ngrok to expose the local server to the public
- How to set up a HTTPS server using self-signed certificate
- How to use Zod to validate the request body
- How to write a yml file to run the Github Action for test automation
- How to use eslint and prettier to format the code
- Better understanding of the Docker, Dockerfile
`
	},
	{
		name: 'Chemistry-Web-App',
		description: 'A web app that help students to learn chemistry',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5),
		githubLink: "https://github.com/cics-web-dev/Chem-Web-App",
		readme:
			`
Long story short. This project is requested by the Chemistry department for making a web app that helps students to learn organic chemistry. 
The web app is designed to be user-friendly, interactive, and informative. I was the tech lead for this project, and 
I was responsible for the front-end, back-end development, and agile team management. After the end of the semester,
I had a better understanding of how to manage a team, utilize SvelteKit, Svelte, and TailwindCSS to create a responsive web app, and 
backend development using Express, MongoDB and Typescript. 
`
	},
	{
		name: "Cook'er",
		description: 'A iOS mobile app that manage receipts in a Tinder-like way',
		logo: ['Javascript', 'Swift', 'Node.js', 'Express', 'MongoDB'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 2),
		githubLink: "https://github.com/aarav-nair/Cookr-HackHer2024",
		readme:
			`
Being college students, a lot of us struggle with making the transition from dorm life to independent life due to the adjustments and skills one has to learn to accommodate to these new changes. The greatest challenge of them all is having the added responsibility of cooking and preparing food for yourself for each meal of the day which often leads to us developing unhealthy eating habits, affecting our mental and physical health and impacting our studies and work in the long term. Cooking is an incredibly hefty task to take on especially having been spoiled with #1 DINING for two years or more like we have. Thus, introducing Cookr! An app designed to be your sous chef in the kitchen, helping you with everything from meal prepping to the actual cooking of various cuisines... all specifically curated as per your taste.
Check out https://devpost.com/software/cookr-4aojyl for our Devpost submission.
`
	},
	{
		name: 'CI-CD-Pipeline',
		description: 'How to set up and trigger Github workflows',
		logo: ['Github'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
		githubLink: "https://github.com/algebra2boy/CICD-pipeline",
		readme:
			`
This repository contains some basic examples for a Continuous Integration and Continuous Deployment (CI/CD) pipeline.

## Introduction

The CICD-pipeline repository is designed to automate the process of building, testing, and deploying software applications. It provides a set of tools and configurations to streamline the development workflow and ensure consistent and reliable deployments.

## Usage

To write a Github Action workflow, a \`.github\` folder must be created. Inside that folder, a folder called \`workflows\` must also be created, then
you can write your workflow file in the yml file.

Once the pipeline is set up, you can use it to automate various tasks such as:

- Running eslint to check bugs
- Running unit tests
- Run prettier to check code format

To trigger the pipeline, simply push your code changes to the repository. The pipeline will automatically execute the defined stages and provide feedback on the status of each step.

`
	},
	{
		name: 'MLH-Web-Scraper',
		description: 'A scraper scrapes all the MLH hackathon event',
		logo: ['Golang', 'Gin'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
		githubLink: "https://github.com/algebra2boy/mlh-scraper",
		readme:
			`
This is my first simple mini project written in Go for web scraping. It scraps all the hackathon event from the official MLH event page([link](https://mlh.io/seasons/2024/events)) and outputs them to a csv file. I added a lot of comments to help me understand what is going on behind the scene because I am still very new to Go. For my first few attempts, I had a hard time scraping the website because the MLH website has enabled some mechniams for anti-scraping, therefore I kept receiving Forbidden response status code (403). Eventually I decided to use a free proxy server to bypass it and to avoid direct request to the MLH website. In other words, I sent a request to the proxy server with my requested website URL, and proxy server sent a request to the MLH website, and proxy server returned the HTML from MLH then sent it back to me. I learned how I/O, url query construction, Colly (the web scraping library) and other basic data structures works. Overall it is a great learning experience!
`
	},
	{
		name: 'DockerDeployment',
		description: 'How to deploy node.js express dockerized app on Azure',
		logo: ['Docker', 'Node.js', 'Express', 'Azure'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
		githubLink: "https://github.com/algebra2boy/DockerDeploymentTutorial",
		readme:
			`
# Instructions of how to push a docker image to Docker Hub to your Docker account

## Have docker daemon running before doing any of below
1. Build an docker image locally: 
\`\`\`bash
docker image build -t <dockerhub username>/<image-name> .
example: docker image build -t yongye0997/docker_python .
\`\`\`

2. Run the container using the docker image create above to test if image works
\`\`\`bash
docker container run --name <container name> -p <local port:container port> <image name>
example: docker container run --name fastapi_testing -p 8000:8000 yongye0997/docker_python
\`\`\`

3. Push the image to docker hub
\`\`\`bash
docke push <docker username>/<image name>
docker push yongye0997/docker_python
\`\`\`

# Instructions of how to deploy a dockerized application on Azure
- Create an Azure account and use the \`Azure for Students\` subscription
-  Install Azure CLI from this [link](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- Login to to your Azure account using \`az login\`, this will redirect to login page

Step 1: Create a Resource Group
- A resource group is a container that holds related resources for an Azure solution.
\`\`\`bash
az group create --name <name of resource group> --location <name of location>
example: az group create --name api-resource-group --location eastus
\`\`\`

Step 3: Verify that you created a resource group successfully by typing \`az group list\` or \`az group list --output table\`

Step 4: Create a Container Registry (ACR)
-  ACR is where you'll store your Docker images on Azure platform.
\`\`\`bash
az acr create --resource-group <name of resource group> --name <name of container registry> --sku Basic --admin-enabled true
example: az acr create --resource-group api-resource-group --name yongyeapiacr --sku Basic --admin-enabled true 
\`\`\`
- Use the \`Basic\` plans and enable admin access
- admin access must be enabled in order to push docker images to ACR
    - If activated, you can use the registry name as username and admin user access key as password to docker login to your container registry.

Step5: Push Docker Image to DockerHub or ACR
- First, authenticate Docker to your container registry, \`az acr login --name yongyeapiacr\`
- Second, create a docker image with a tag (optional), default is latest
- Third, (optional), if you are on M1 chip, you will have to add an additional flag to the following docker build, [\`--platform=linux/amd64\`](https://github.com/docker/for-mac/issues/6356)
\`\`\`bash
docker build -t <image name>:<tag> .
example: docker build -t express-demo:latest .
M1 chip example: docker image build --platform=linux/amd64 -t express-demo:latest .
\`\`\`
- Third: Tag your local Docker image with the ACR login server name.
    - This creates a duplication of the original docker image but with the name
\`\`\`bash
docker tag <image name in step 2> <name of ACR>.azurecr.io/<image name in step 2>
example: docker tag express-demo:latest yongyeapiacr.azurecr.io/express-demo:latest 
\`\`\`
- Fourth, push the docker image to DockerHub and ACR
\`\`\`bash
docker push yongye0997/express-demo
docker push yongyeapiacr.azurecr.io/express-demo
\`\`\`
- Fifth, check your docker image on Azure Container Registry, you should see a new image called \`express-demo\`

Step6: Create a Container App Environment
- Before creating a container app, we need a container app environment for the container 
\`\`\`bash
az containerapp env create --name <name of container app environment> --resource-group <name of resource gorup we created in step 1> --location eastus
example: az containerapp env create --name expressDemoAppEnv --resource-group api-resource-group --location eastus
\`\`\`

Step7: Create a container App (Be very careful with this step since it involves with lots of flags)
- This is where we create our container app and deploy the image from ACR or DockerHub
- If you using GUI, navigate to your container app > Settings > Ingress after deployment
    - Have to enable \`ingress\` to receive traffic
    - Have to enable \`accepting traffic from anywhere\` for Ingress traffic
    - target port must be 8080 for this express app
- Must use the same name for the resource group and container enviornment from previous steps
\`\`\`bash
az containerapp create \
    --name <name of container app> \
    --resource-group <name of resource group> \
    --environment <name of container environment> \
    --image <name of image from the ACR or docker hub> \
    --target-port <port number> \
    --ingress external 

Pulling image from Docker Hub example: 
az containerapp create 
    --name yongye-express-api-demo-app 
    --resource-group api-resource-group 
    --environment expressDemoAppEnv 
    --image yongye0997s/express-demo:latest 
    --target-port 8080 
    --ingress external

Pulling image from ACR example:
# need to manually specify registry-server, registry-username, or registry-password if authentication is required, link: https://github.com/microsoft/azure-container-apps/issues/863#issuecomment-1669564470
az containerapp create 
    --name yongye-express-api-demo-app 
    --resource-group api-resource-group 
    --environment expressDemoAppEnv 
    --image yongyeapiacr.azurecr.io/express-demo:latest 
    --registry-server yongyeapiacr.azurecr.io
    --registry-username yongyeapiacr
    --registry-password <your password>
    --target-port 8080 
    --ingress external
\`\`\`

Step8: You should receive an application url on Terminal or Azure container app website.
My application link is: https://yongye-express-api-demo-app.yellowdune-bb83b275.eastus.azurecontainerapps.io/hello
- [Home route](https://yongye-express-api-demo-app.yellowdune-bb83b275.eastus.azurecontainerapps.io/)
- [Hello route](https://express-api-container.yellowdune-bb83b275.eastus.azurecontainerapps.io/hello)
- [Testing route](https://express-api-container.yellowdune-bb83b275.eastus.azurecontainerapps.io/testing)

Step 9: Thank you!

## Important Commands
\`\`\`bash
# build the image
docker image build -t <image name> .

# use the image to run container 
docker container run --name <container name> -p <local port: container port> -d <image name>
\`\`\`
`	},
	{
		name: 'Free-Write',
		description: 'A simple free rich editor web app allow you to write and focus',
		logo: ['React', 'Javascript', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
		githubLink: "https://github.com/algebra2boy/FreeWrite",
		readme:
			`
## Introduction
Exploring how Quill rich editor works on a React web app. 

## Basic Features
- [x] Able to change header and font
- [x] Able to customize text such as bold, italic, underline, stroke, blockQuote, codeBlock
- [x] Able to add number or order lists or alignment
- [x] Able to change background and text color
- [x] Able to add pictures/link
- [x] Able to redo with 200 stacks
- [x] Able to save previous progress using localForage (refresh the window without losing progress)
    - localForage is built on top of IndexDB


## Reference: 
- React-Quill: https://www.npmjs.com/package/react-quill
- localForage: https://github.com/localForage/localForage
`
	},
	{
		name: 'Career-Explorer',
		description: 'A simple web app that searches real life job posting',
		logo: ['Svelte', 'Javascript', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 3),
		endDate: new Date(2024, 3),
		githubLink: "https://github.com/algebra2boy/CareerExplorer",
		readme:
			`
This is my first web app, written in Svelte 5. The website takes a keyword, location, radius, and number of results as inputs to call the CareerOneStop API, generating real-life job postings. I learned several new concepts from Svelte 5, such as $state, $effect, $props, and store management. This was also my first time deploying to Vercel. The process was easier than I anticipated, though it took me five attempts to deploy successfully, which required using the correct Node.js runtime, removing the package-lock.json from the root directory, and choosing the Vercel adapter.
`
	},
	{
		name: 'HouseFinder',
		description: 'A SwiftUI demo app to manage houses for real estate',
		logo: ['Swift'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 2),
		githubLink: "https://github.com/algebra2boy/HouseFinder",
		readme:
			`
## About

### This repo is set up for Hack(H)er413 hackathon.
- **Workshop Name**: Swift UI/Building an iOS Application
- **Workshop Time**: 8:00pm - 9:00pm on Saturday 2/17/2024
- **Workshop Room**: Room S220 in the Integrative Learning Center
- **Workshop Description**: Swift is the \`Apple\` programming language that used to create applications on iOS, ipadOS, macOS, watchOS, tvOs, and even visionOS. Anyone who has any creative ideas can use Swift to develop an app in a fairly easy way. In this workshop, learn how to program in Swift using the \`Swift Playground\` IDE, which you can download from the App Store. Anyone who participates in this workshop must have a MacBook or iPad, if you don't have one, still welcome! 


### Clone the repo
\`\`\`bash
git clone https://github.com/algebra2boy/HouseFinder.git
\`\`\`
- After cloning the repo, you can open the \`swiftpm\` package on Swift Playground or XCode using preview or iOS simulator.
- The minimum deployment and compatibility are iOS 17.0 and macOS 14.0. That means your system must have upgraded to iOS 17.0 or or macOS 14.0

### Topics we will cover
- Text, Button, Image, Textfield
    - foregroundStyle
    - font
    - frame
    - tint
- Form, Section, Picker, Toggle, VStack, HStack
- toolbar, ToolbarItem
- NavigationStack, NavigationLink
    - navigationTitle
    - navigationBarTitleDisplayMode
- Preview
- Struct, initializer, static variable, computed variable, default value
- Ternary operators <expression ? true : false>
- State
- Enviornment (dismiss)  
- MapKit
    - CLLocationCoordinate2D
    - MKCoordinateSpan

### More

- [Notion page for this workshop](https://yongye.notion.site/Swift-UI-Building-an-iOS-Application-b7837bf17ae24080aedba9772ae6ce8b?pvs=4)
`
	},
	{
		name: 'Pomodoro',
		description: 'A simple pomodoro timer app on Apple Watch',
		logo: ['Swift'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 2),
		githubLink: "https://github.com/algebra2boy/Swift/tree/main/Pomodoro",
		readme:
			`
This is a simple pomodoro timer app that I created for my sixth grade cousin in Guangzhou, China. He recently got an Apple Watch and I was living in his house for over an week.
I wanted to leave some of my good programming skills with him and he studied hard, so I decided to create a simple pomodoro timer app for him to concentrate on his study.
The app is simple, it has a tomato in the center. If you tap on it, it start the timer; if you tap on it again, it stops the timer.
You can also set the study and break timer to 10, 15, 20, 25 ,and 30 minutes.

<video width="400" height="240" controls>
  <source src="/video/pomodoro.mov" type="video/mp4">
</video>
`
	},
	{
		name: 'Quote-Generator',
		description: 'A simple Apple Watch app that generates classic quotes',
		logo: ['Swift'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 1),
		githubLink: "https://github.com/algebra2boy/Swift/tree/main/AppleWatchDemo/AppleWatchDemo%20Watch%20App",
		readme:
			`
When I was in China, I learned a lot of about Chinese classic quotes from my grandpa. He is a very wise man. 
He told me that the classic quotes are the essence of the wisdom of the Chinese people. I wanted to share this wisdom
to my cousin. Therefore, I created a simple Apple Watch app that generates classic quotes. The app is simple, it has a button
and when you tap on it, it generates a random classic quote. When you tap on the little arrow on the top right corner,
it will show a list of quotes on the app. All of these motivational quotes are in Chinese. 

<video width="400" height="240" controls>
  <source src="/video/classic_quote.mov" type="video/mp4">
</video>
`
	},
	{
		name: 'Event-Planner',
		description: 'A web app that helps manage events using microservices',
		logo: ['Docker', 'Javascript', 'Express', 'MongoDB', 'Bootstrap'],
		startDate: new Date(2023, 7),
		endDate: new Date(2023, 9),
		githubLink: "https://github.com/algebra2boy/EventPlanner",
		readme:
			`
## What is this project about
A dockerized web app that helps people create and sign up events using microservices

## Requirements
You would need to create two .env file, one in Gmail, another one in Yelp.
- In Yelp service, you would need to add the API KEY, YELP_APIKEY, from [Yelp Developers](https://www.google.com/search?client=safari&rls=en&q=yelp+developer&ie=UTF-8&oe=UTF-8&dlnr=1&sei=SgjwZKLVNIe15NoPwLK2mAk).
- In Gmail service, you would need to add multiple OAuth2 authentication code, as they are CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN from Google API.

## How to run the web app
Note: You must have mongoDB and Docker installed in your local machine.
\`\`\`
cd EventPlanner
docker compose up
\`\`\`
how to stop the containers from running:
\`\`\`
docker compose down
\`\`\`
how to remove all unused objects such as images and containers:
\`\`\`
docker system prune -a
\`\`\`
how to remove all unused volumes:
\`\`\`
docker volume prune -a
\`\`\`

## Dockerfile
- Run \`docker compose -f docker-compose.dev.yml up\` in dev mode
- Why is the \`context\` keyword used?
    - The context keyword is important when you are specifying a Dockerfile that is different from the default (Dockerfile). The context represents the directory that Docker Compose uses as the build context. This is typically the directory where your application code resides and where your Dockerfile is located. When you specify a custom Dockerfile using the dockerfile keyword, it's assumed that this Dockerfile is located in the directory defined by context. Without the context keyword, Docker Compose wouldn't know where to find the Dockerfile you're referencing.

## Why start I this project
After a few thoughtful days, I decided the best scalable web application that fits my taste is a web application that involves event planning. I wanted to create an interactive and scalable web app that helps people register and sign up for events. My idea comes from the UMASS campus pulse and FaceBook Events. These are great apps, but I wanted to create a more user-friendly web app that is simple, clean, neat, and scalable that comes with many interesting tools. 

The basic components that support my web app will be microservices, interactive user interface, NoSQL database integration, and containerization and dockerization. 

Microservices help modularize and organize independent applications to communicate over APIs through Eventbus. I plan to work on four microservices. The first one I am going to implement, called “Events”, helps users register for an event. An event could have an event name, start date, end date, location description, location option, image link, and an option for people to sign up online. After registering for the event, the event information will be stored in the MongoDB database and shown in a card format. Since the event can be signed up online, it gives us the ability to create another microservice that stores people’s personal information such as their first name and email - only these two are enough, making it simple. This microservice I named it is “People”.  I planned to implement the third microservice called “Yelp”. The “Yelp” will use the user preference to find the nearby place. This will generate a list of nearby suggested locations for the event. This helps event planners to better organize their events in a much quicker manner and choose their desired place. The fourth microservice will only be implemented if I have enough time, which is called “Gmail”. “Gmail” will send out an email to people who have signed up for an event, this will remind people that they have signed up for the event, deliver important messages in a quick time manner and increase user engagement in a friendly and fun way. This microservice will be utilizing the Gmail API. If possible and if I have time, their Google Calendar will attach the event automatically. 

My application is interesting because it allows people to maneuver their event location in a fun and quick way, allowing more friends and families to gather together at their favorite places. People would use it because it is simple, and they can sign up for an event with a few clicks, and receive a notification with the event they signed up for, such as live updates of the events. It will also give users constant notifications about the upcoming event, and most importantly, they can see the names of friends and families attending the event. Someone would use it because it comes with great notification features, a simple UI that allows them to sign up for an event without much work, great for time-saving and having fun interacting with the web app meanwhile practicing some sort of pre-work ritual to ready to join the event. It will be fun and interactive with many micro-interactions.

For an event-planning app, scalability is important. As more important events arise, the application will be populated with more users. This will lead to slow performance, crashes, or data loss due to the abundance of user information. But when effective scalability comes into play, those risks will be mitigated to allow a seamless experience for users. The scalable design will help future growth, balance traffic, and protects personal data, resulting in the app's long-term success and reliability for users.

Here is video demo of the web app: [link](https://youtu.be/SlSaHrCOxC0)

`
	},
	{
		name: 'MCAS-Analysis',
		description: 'Relationship between income and standardized test performance',
		logo: ['R', 'RStudio'],
		startDate: new Date(2023, 9),
		endDate: new Date(2024, 1),
		githubLink: "https://github.com/algebra2boy/MCAS_Analysis",
		readme:
			`
# What is this about:

This research explores the relationship between explore the relationship between household income and standardized test performance. Our interest is in investigating how demographic predictors correspond to test results. The achievement gap is a prominent and ongoing socio-economic issue within education, so we expect our analysis to support the hypothesis that lower mean family income is correlated with lower MCAS scores and SAT scores. 

# Where is the dataset from?
1. Massachusetts Public Schools Date from [Kaggle](https://www.kaggle.com/datasets/ndalziel/massachusetts-public-schools-data).
2. The HTML table from this [Wikipedia](https://en.wikipedia.org/wiki/List_of_Massachusetts_locations_by_per_capita_income) page, List of Massachusetts locations by per capita income.

# Instructions:
1. Read more about the abstract from [here](https://github.com/algebra2boy/MCAS_Analysis/blob/main/Group%206%20Abstract.pdf).
2. Read the presentation slides from [here](https://github.com/algebra2boy/MCAS_Analysis/blob/main/Group%206%20Presentation.pdf).
3. See the R source code from [here](https://github.com/algebra2boy/MCAS_Analysis/blob/main/finalProject.R).
`
	},
	{
		name: 'ShopHub',
		description: 'A shopping app that provides convenience to daily life',
		logo: ['Swift'],
		startDate: new Date(2023, 6),
		endDate: new Date(2023, 1),
		githubLink: "https://github.com/algebra2boy/ShopHub",
		readme:
			`
This project is collaboration project that I worked on with my mentor, Chengtao, at the 2023 Apple Swift Mentorship program.
We made a basic iOS app that focuses on shopping and convenience. The app is written in Swift and SwiftUI. 
The app has a simple UI that allows users to browse through a list of items, add items to a cart, and view the cart. 
It also has a search feature that allows users to search for items by name. 
In addition, it uses a simple data model to store the items and cart data. 
The app is designed to be simple and easy to use, with a focus on providing a good user experience. 
The app is a good starting point for anyone who wants to learn how to build an iOS app using Swift and SwiftUI.
We also adopted the Human Interface Guidelines to make the app more user-friendly and intuitive.
`
	},
	{
		name: 'TechHouse',
		description: 'A platform to share computer science knowledge',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 12),
		githubLink: "https://github.com/algebra2boy/TechHouse",
		readme:
			`

## Features

The following **required** functionality is completed:

- [x] A create form that allows the user to create posts
- [x] Posts have a title and optionally additional textual content and/or an image added as an external image URL
- [x] A home feed displaying previously created posts. By default, the time created, title, and number of upvotes for each post is shown on the feed
- [x] Clicking on a post shall direct the user to a new page for the selected post
- [x] Users can sort posts by either their created time or upvotes count
- [x] Users can search for posts by title
- [x] A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post
- [x] Users can leave comments underneath a post on the post's separate page
- [x] Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times
- [x] A previously created post can be edited or deleted from its post page

The following **optional** features are implemented:

- [ ] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [ ] Users can share and view web videos
- [ ] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
- [ ] Users can upload images directly from their local machine as an image file
- [ ] Display a loading animation whenever data is being fetche

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/TechHouse/assets/103079472/0ef8b111-dfce-4c86-ab91-eb98fccc777a"  type="video/mp4">
</video>

## License

    Copyright [2023] [Yongye Tan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Ree-See.it',
		description: 'An iOS mobile app that manages and stores receipts',
		logo: ['Docker', 'Swift', 'Express', 'MongoDB', 'AWS', 'ChatGPT', 'Flask', 'Tesseract.js'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 11),
		githubLink: "https://github.com/algebra2boy/Ree-See.it",
		readme:
			`
🔥 This project is awarded to Best Mobile Hack for HackUmass Hackathon 🔥 My responsibility was leading this project, designing different microservices, and ensuring each microservices talk to each other!
Here is the Devpost link: [Ree-See-It](https://devpost.com/software/ree-see-it)

## Inspiration
"Ree-See-It" is driven by the urgent need to reduce environmental waste and promote healthier lifestyles. With the environmental and health impacts of paper receipts becoming increasingly evident, our app offers a sustainable and health-conscious alternative for receipt management.

## What It Does
"Ree-See-It" is a comprehensive digital receipt management and expense tracking solution. Its key features include:

- Digital Receipt Storage: Transforms paper receipts into a digital format, significantly reducing environmental waste.
- Expense Categorization: Allows users to effectively organize their expenses, promoting better financial management.
- Health Risk Mitigation: Minimizes exposure to harmful chemicals commonly found in paper receipts, such as BPA and BPS.
- Accessibility for the Visually Impaired: Integrates assistive technologies, ensuring the app is accessible to all users.
- Online Purchase Management: Streamlines the process of tracking online shopping expenses.
- Shared Expense Feature: Simplifies the splitting of costs among groups.

## How We Built It 
- "Ree-See-It" is developed as an iOS mobile application using Swift and SwiftUI. It features:
- Microservice Architecture: Incorporates components like image processing (extract all the parsed string from the receipt), AWS S3 cloud storage (storing receipt images on the cloud in case users want to keep them for future and business management) , ChatGPT API (convert the parsed string to JSON), geolocation services (forward geocoding), and MongoDB for data storage.
- Optical Character Recognition: Utilizes Tesseract.js for accurate OCR.
- User Authentication: Implements comprehensive authentication using Auth0.


## Challenges We Ran Into

- Frontend Issues: Navigational bugs and image exporting challenges.
- Backend Complexities: Difficulties with API integration and Docker compatibility (dependencies hell).
- Database Management: Overcoming inconsistencies in MongoDB documents.

## Accomplishments We're Proud Of Our team achieved:

- Innovative Solution: An app that significantly contributes to resolving environmental and health concerns.
- Effective Teamwork: Demonstrable excellence in collaboration and problem-solving.

## What We Learned:

- Advanced Technology: Mastery of Swift, SwiftUI, and various backend technologies.
- Team Collaboration: Improved teamwork skills in demanding scenarios.

## What's Next:

- Expand Features: Add more user customization options and advanced analytics.
- Improve Scalability: Upgrade the backend for enhanced performance.
- Market Deployment: Gear up for a broader market release.
"Ree-See-It" is not just an app; it's a step towards a more sustainable and health-conscious future. Join us in making a difference!

`
	},
	{
		name: 'SwiftUI Learning',
		description: 'A website that helps you learn SwiftUI like quizlet',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10),
		githubLink: "https://github.com/algebra2boy/React102/tree/main/Project/swiftui%20learning_2",
		readme:
			`
# Web Development Project 3 - SwiftUI Learning

Submitted by: Yongye Tan

This web app: This React application is made to help you learn SwiftUI in a fun way!

Time spent: 3 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:



<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/React102/assets/103079472/9a937bd0-80f6-4cc4-919a-5a1be8681cf3" type="video/mp4">
</video>


## Notes

Describe any challenges encountered while building the app.

I had difficulty with state managment. There are some state that must be uplifting up. I took a while to understand why we need to pass a function hanlder from parent to child, aka a closure. There are many states that I think I need to optimize them later.

## License

    Copyright [2023] [Yongye]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Crewmate',
		description: 'A website that creates AmongUs characters',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10),
		githubLink: "https://github.com/algebra2boy/React102/tree/main/Project/crewmate",
		readme:
			`
# Web Development Project 7 - Crewmate

Submitted by: Yongye Tan

This web app: Playing among us could be fun, but have you made your own among us crewmate before?

Time spent:  4 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form allows users to add new cremates**
- [x] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [x] **The site displays a summary page of all the user's added crewmates**
- [x] **A previously created crewmate can be updated from the crewmate list**
- [x] **A previously created crewmate can be deleted from the crewmate list**
- [x] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/React102/assets/103079472/b376ab92-62e6-47a6-b3e2-4ab1bc37c78b" type="video/mp4">
</video>

## Notes

Describe any challenges encountered while building the app.

The hardest part of this project is to connect the supabase database and render them onto the screen.

## License

    Copyright [2023] [Yongye Tan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Community Board',
		description: 'A website that displays computer science club',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10),
		githubLink: "https://github.com/algebra2boy/React102/tree/main/Project/community%20board",
		readme:
			`
# Web Development Project 1 - _Computer Science Community Board_

Submitted by: **Yongye Tan**

This web app: **Computer Science Amherst Club Board**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

- [x] List anything else that you added to improve the site's functionality!
    - hovering the text would alter the background color

## Video Walkthrough

Here's a walkthrough of implemented required features:


<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/React102/assets/103079472/f40a5111-0489-4086-ae63-7b9a030929d4" type="video/mp4">
</video>

## Notes

The challenges that I encountered while building the app were CSS and making the card component to fit in a container row by row.
I did not know how to do it until I refreshed some of my knowledge on flex box.


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Cat',
		description: 'A website that finds cat images based on your preference',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10),
		githubLink: "https://github.com/algebra2boy/React102/tree/main/Project/cat",
		readme:
			`
# Web Development Project 4 - Cat The Lover

Submitted by: Yongye Tan

This web app: This website is for anyone who enjoys and has a cat.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/React102/assets/103079472/3ac235e4-c258-4cee-a05d-ada219761010" type="video/mp4">
</video>

## Notes

Describe any challenges encountered while building the app.

The challenges that I encountered were trying to pass handlers from parent to child components. Understanding 
usestate and updating the state properly for each component and making each component modular were something I learned the most from this app.

## License

    Copyright [2023] [Yongye Tan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Breweries',
		description: 'A website that finds breweries and generate analytics charts',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 11),
		githubLink: "https://github.com/algebra2boy/React102/tree/main/Project/breweries_part2",
		readme:
			`
# Web Development Project 6 - Breweries 2.0

Submitted by: Yongye Tan

This web app: This brew app adds more visualization and detail pages to the brew data.

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [x] The site's customized dashboard contains more contÍent that explains what is interesting about the data
- [x] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [x] Add resuable navbar and home button to be displayed across different view

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<video width="400" height="240" controls>
  <source src="https://github.com/algebra2boy/React102/assets/103079472/2a81a825-661e-4152-b68c-8d16de33d528" type="video/mp4">
</video>


## Notes

Describe any challenges encountered while building the app.

The hardest part of making this app is to understand how to use Link, Route and pass state/props to other components through Link.
Overall, I think this web app really helps me understand how to route to differnt view, maintain separation of concern, and make
reusable components.

## License

    Copyright [2023] [Yongye]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'Clue',
		description: 'A room escape game implemented in C and pointers',
		logo: ['C'],
		startDate: new Date(2022, 2),
		endDate: new Date(2022, 3),
		githubLink: 'https://github.com/algebra2boy/Clue',
		readme:
			`
## Description
Step into a thrilling text adventure game, clue, set on a 3 x 3 gameboard. Use your wits and deductive abilities to uncover the secrets behind a mysterious murder. Rumors suggest that Anan has been murdered, with Jeff suspecting that Matt may have strangled Anan with a rope in the study room. Navigate through rooms, investigate weapons, and interact with characters: Anan, Jeff, Matt, Eric, and Adam, to unveil the truth.

## Implementation Overview

- **Gameboard Configuration**: 
  - Created using a 2D array with \`malloc\`, making each room a pointer.
  - Each room is a pointer containing:
    - Pointers to adjacent rooms (North, South, East, West).
    - Name of the NPC.
    - LinkedList storing items in the room (at the start, each room contains at most one item).
    - 4 pointers per room, 36 pointers in total.
  - LinkedList for items is implemented with pointers; the next item in the list is another item pointer.
  - The avatar's information, including its location and inventory, is stored in a struct called \`Avatar\`.
  
- **Memory Management**:
  - After the program concludes, memory allocated for the board, avatar's current room, inventory, and name are deallocated.
  - Memory of nodes removed from a LinkedList is also deallocated.
  - Includes edge-case handling for invalid user inputs.

- **Requirements Satisfied**:
  1. Game has 9 rooms, including the starting room, connected via pointers.
  2. Rooms are randomly initialized on the game board at the start.
  3. Game features at least 6 items and 5 characters apart from the player's avatar.
  4. A room, an item, and a character are randomly chosen as the game's answer.
  5. Each room has a LinkedList of items.
  6. The avatar has an inventory.
  7. Command table (all commands are in \`adventure.c\` within the main function):
      - \`help\`, \`list\`, \`look\`, \`go\`, \`take\`, \`drop\`, \`inventory\`, \`clue\` 
        (with sub-actions detailed under \`clue\`).

## Compilation

To compile and run the program:

\`\`\`c
gcc adventure.c room.c -o myProgram
./myProgram
\`\`\`

## User Input Guide

- Input commands are case-sensitive.
- Use \`scanf("%s %s", first, second)\` for reading two-word commands.
- For commands with a single word, append a "~": e.g., \`help ~\` or \`look ~\`.
- For directional commands: \`go north\`, \`go south\`, etc. (Don't use room names like \`go Bathroom\`).
- For item commands: use the item name, e.g., \`take bible\`. Valid items: \`axe\`, \`poison\`, \`knife\`, \`gun\`, \`bible\`, \`rope\`.
- For clues: use the character name, e.g., \`clue Adam\`. Valid characters: \`Anan\`, \`Jeff\`, \`Matt\`, \`Eric\`, \`Adam\`.
`
	},
	{
		name: 'HelpFunding',
		description: 'My Codepath Web 102 prework',
		logo: ['HTML', 'CSS', 'Javascript'],
		startDate: new Date(2023, 2),
		endDate: new Date(2023, 3),
		githubLink: "https://github.com/algebra2boy/web102_prework",
		readme:
			`
# WEB102 Prework - HelpFunding

Submitted by: Yongye Tan

HelpFunding is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 3-4 hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] List anything else that you can get done to improve the app functionality!
    * [x] Add scrolling behavior to the game section
    * [x] Change button color when button is hovered
    * [x] Modify the CSS to make it visually appealing

## Video Walkthrough

Here's a walkthrough of implemented features:

<video width="450" height="240" controls>
  <source src="https://github.com/algebra2boy/web102_prework/assets/103079472/514ee95a-eeb2-48ff-abc7-a5d3f3b25389" type="video/mp4">
</video>

## Notes

Describe any challenges encountered while building the app.

Using reduce, spread operation were a bit unintutive for me - I had to think about and experiment a few times to make it work. It took me some time to review and refresh my knowledge on flexbox.

## License

    Copyright [2023] [Yongye Tan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

`
	},
	{
		name: 'RateMyDine',
		description: 'A platform to share feedback about food for dining hall',
		logo: ['HTML', 'CSS', 'Javascript'],
		startDate: new Date(2023, 2),
		endDate: new Date(2023, 5),
		githubLink: "https://github.com/algebra2boy/RateMyDine",
		readme:
			`
**How to run the website** </br>
\`\`\`bash
$ npm install
$ npm run dev
\`\`\`

**Team Overview** </br>
| <center>Name</center> | <center>GitHub Username</center> |
| --- | --- |
| <center>Yongye Tan</center> | <center>algebra2boy</center> |
| <center>Ivan Liu</center> | <center>ivliu816</center> |
| <center>Jicheng Li</center> | <center>zuki08</center> |
| <center>Adam Trac</center> | <center>noonbles</center> |

**Innovative Idea** </br>
The platform is going to be similar to RateMyProfessor and Yelp, we will show star ratings than numerical rating and also accept half ratings. There will also be a multitude of rating criterias such as Food Quality, Customer Service, Location, and Price to calculate the Overall rating of the review. However, this platform will be for UMass Students and Faculty to post reviews of UMass Dining Hall food.


User Logistics
- User login: stores user login info such as uuid, username, userRole, password, email
- Student: stores UMASS student data such as uuid, username, userRole, password, email
- Faculty: stores UMASS Faculty data such as uuid, username, dining hall they work at, years of work experience 


Website Logistics
- Likes: Users can like or dislike other reviews, shown by a whole number.
- User comments: Users can write comments in the review about the food they ate.
- Images: Users can post images of their plate or surroundings of the dining hall
- Rating: Users can specify the satisfactory level on food quality, customer service, atmosphere and time to spend to find a seat or table.
- Overall Review: Each dining hall has a rating that is calculated using all the ratings from users' posts.


**Functionality** </br>
- Bootstrap front end: The site's styling will be primarily handled using bootstrap
  - User Authentication page: hooks together inputs from the front end and redirects the user after confirming information with the backend
    -Text boxes to record input
  - Landing page: Strictly front end; redirects user to other pages (ex: checking reviews particularly Berkshire dining hall)
    -Clickable tiles centered on the main page that redirect user
    - Search bar in the text box for users to select the dinning hall they want to rate
  - Dining hall pages: Loads images of user-generated pictures stored, comments, dining hall name and picture, etc.
    - Non-interactible dining hall image
    - Text box located at the bottom of the page, on top of a tile stack of comments, for users to upload comments and images of their food
      - Button that prompts the user to upload images if they wish
    - Comment tiles with like/dislike buttons for other users to interact with
    - Small section above comments featuring the most viewed photos, top rated comments, etc.
- MongoDB back end: Stores login information, dining hall ratings, food ratings, comments, comment ratings, images, etc.


[Video Showcase](https://youtu.be/wruJSZfq97k) Click me!

<img src="https://github.com/algebra2boy/RateMyDine/assets/103079472/38fa76bf-01d8-4755-97a3-9ba6830416ef" width="100%">


**License** </br>
[MIT License] (https://opensource.org/license/mit/)

`
	},

	{
		name: 'Socket programming',
		description: 'How UCP and TCP work for both client and server',
		logo: ['Python'],
		startDate: new Date(2023, 3),
		endDate: new Date(2023, 4),
		githubLink: "https://github.com/algebra2boy/SocketProgramming",
		readme:
			`
## Project description

This project is used for learning the socket programming using the socket API from python. 
UDP and TCP are being studied and the topics of timeout. 


## Execution
\`\`\`python
How to run the client:
$ python3 your_client.py HELLO Server_IP Server_Port ConnectionID

How to run the server: 
$ python3 your_server.py Server_IP Server_Port
\`\`\`

## Server response
server will keep a list of in-use connectionID and two types of response that the server will respond
- OK: If the connectionID specified by the client is not in use, your server adds the connectionID to its list of in-use IDs and responds with an OK message
    - the server includes the client IP address and client port number in its return message. Thus, the server message looks like “OK ConnectionID Client_IP Client_Port”
    - Example would be "OK 9876 192.168.0.10 12345"
- Reset: If the connectionID specified by the client is in use, your server responds with a RESET message. The RESET message starts with the string “RESET” and echoes back the client-provided connectionID.
    -  the server message is “RESET ConnectionID”.
    -  For example, "RESET 9876"


## Time out

Client Side
- If the client receives an OK message, it prints out a “Connection established” message, indicating the connectionID, its IP address, its port number, and the current timestamp. Then, the client exits gracefully after closing any open sockets.
-  If the client doesn’t receive a reply within **15** seconds, it should timeout and follow the protocol below 
- Suppose the client receives a RESET message or timeouts after **15** seconds. In that case, it prints out a “Connection Error” message with the connection ID and the current timestamp, and asks the user to enter a new connection ID. Then, it retries to establish a connection again with a newly created socket and with this newly entered connection ID to the same server. After **three** tries to establish a connection without success to the same server, the client prints a “Connection Failure” message with the current timestamp and exits gracefully after closing any open sockets.
    - Connection Error print out example: “Connection Error 2678 on 2023- 01-16 06:06:06.123456”
    - After three tries, print out: “Connection Failure on 2023-01-16 06:06:06.123456”


Server Side: 
- waiting for a connection request but does not receive any requests from any clients for **two** minutes, your server should timeout and exit gracefully after closing any open sockets.
- ConnectionID Timeout: your server should timeout and remove connectionIDs that have been in its connectionID list for more than **30** seconds

`
	},
	{
		name: 'DineAndGo',
		description: 'Making a restaurant management app',
		logo: ['Swift', 'Firebase'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 2),
		githubLink: "https://github.com/algebra2boy/DineAndGo_SwiftUI",
		readme:
			`
This was my SwiftUI project that I learned how to use Firebase to store data and authenticate users. 
This was also my first SwiftUI project where I started my journey to learn how to build iOS apps.
`
	},
	{
		name: 'Enrollment',
		description: 'A website for enrolling classes with login and register feature',
		logo: ['HTML', 'CSS', 'Javascript', 'MongoDB', 'Flask'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 1),
		githubLink: "https://github.com/algebra2boy/Enrollment",
		readme:
			`
This was a project that I learned about how to integrate frontend with Flask and Mongo.

## Flask
Brushing up on flask configuration and REST API

## MongoDB setup
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
\`\`\`
$ brew tap mongodb/brew
$ brew update
$ brew install mongodb-community@6.0
\`\`\`

## start MongoDB in the background
\`\`\`
$ brew services start mongodb/brew/mongodb-community
$ mongosh
$ show dbs
\`\`\`

## Set up
[Download MongoDB Compass](https://www.mongodb.com/try/download/compass)
[Flask configuration with MongoEngine](http://docs.mongoengine.org/projects/flask-mongoengine/en/latest/flask_config.html)

`
	},
	{
		name: 'AbsentWork',
		description: 'Data Science Project about work absenteeism',
		logo: ['R', 'RStudio'],
		startDate: new Date(2022, 9),
		endDate: new Date(2023, 1),
		githubLink: "https://github.com/algebra2boy/AbsenteeismAtWork",
		readme:
			`
In the modern world, it is common to see people be absent from work for various reasons. Absenteeism at a workplace affects the accountability and availability of a person, leads to negative consequences in a team or a company such as the decline in work reputation, and the decrease in work coordination across departments. In this report, we are analyzing an existing dataset, from Kaggle, records of absenteeism at work from July 2007 to July 2010 at a courier company in Brazil. There are 740 observations and 21 variables. Important variables exist such as Distance from Residence to Work, Work load Average/day, which are important factors to determine why a worker is absent. The central question in this article is: What is the main determinant of whether someone is absent or not from work?

## More instructions

To read the analysis report: please click on [390RProject_YongyeTan.pdf](https://github.com/algebra2boy/AbsenteeismAtWork/blob/main/390RProject_YongyeTan.pdf)

To check out the R code: please click on [Absent.R](https://github.com/algebra2boy/AbsenteeismAtWork/blob/main/Absent.R) or [AbsenteeismATWork.Rmd](https://github.com/algebra2boy/AbsenteeismAtWork/blob/main/AbsenteeismATWork.Rmd)

## Achievement
This is my first independent data science project using R and statistical analysis. 
`
	},
	{
		name: 'Find.it',
		description: 'A web app helps people to find their lost items on campus',
		logo: ['React', 'HTML', 'CSS', 'Twilio', 'Flask', 'MySQL'],
		startDate: new Date(2022, 11),
		endDate: new Date(2022, 12),
		githubLink: "https://github.com/algebra2boy/Find.it",
		readme:
			`
Find.it is our submission for the UMASS Fall 2022 Hackathon. Find.it a scalable solution for people who've lost their things and (unsurprisingly) want to find them. 
Here is the DevPost submission for this project: [Find.it](https://devpost.com/software/find-it-nlpzh5)

## Inspiration
  Our very initial motive comes from a team member from this group that he wanted to find his stolen bike, a very precious gift, desperately. He encouraged everyone in the team to work on a lost or found project to prevent other people like him to get another item lost on campus. Our main motive for creating Find.it was specifically to address an ubiquitous issue that we saw happen around campus: people tend to lose things quite often. It was sentimental to see students lose things and literally *post flyers on poles* to let others know to look for it. Not only that but there's even *individual* lost and found systems that each dining hall has! None of it is centralized--and that makes it horrifically difficult for people to find their things. That's why we thought that it'd be a good idea to centralize and expedite the process of finding lost things, with Find.it. We realized the items are not always tied to monetary value, but more about special meaning of the items that people cherished. 
  
## What does it does
  Find.it is a responsible website that uses a SQL database to store and show data that users input themselves. In particular, this data involves user data (the thing that helps us identify who they are, like their email, name, etc.), and data about their lost item (things like pictures, a brief description, the last known location, and so on). 
  
## How we built it
  We built the website using a combination of CSS, Javascipt, and React. Our plan for front-end development was to make the website as interactable and intuitive as possible, since we wouldn't want people who're looking for their lost item to have trouble accessing the site or operating it. So, what we decided to do was make the whole website look like any other website that you would typically see nowadays, since familiarity and accessibility is key! Oh--and one last append: we also used Twilio to help notify the user that their item has been found.
  
  Now as for the back-end, we used MySQL to create the server for the SQL database and from there we made a whole bunch of tables--one for the user name, which is then connected to 2 separate tables where 1 represents lost items, and the other represents found items. Then *those* are connected to another table that details information about the (technical parts) of the item itself, like the id of that item in the system, their written description, and so on. Finally, *that* table is connected to one last table that categorizes the item. Talk about a mouthful!
  
  Personally, as the guy who's writing this, I wish we did go to workshops to learn more about web design and the like, but there's also nothing better than discovering how to do these things by ourselves. It's the struggles that help us figure out the right path forward.
  
## Challenges we ran into
- ALL OF US has an very minimum experience with React and Flask, so we have had to learn it from scartch starting this Friday!!!
- A challenge that we ran into in particular was actually designing the website--the minute details like figuring out why our little magnifying glass icon started reshaping itself and flying off to the other side of the screen when we shrank the window for the website. Or, figuring out why someone completely missed how to spell the phrase "sign up" and instead just wrote "sign". Figuring out how to work well as a team was honestly one of the bigger struggles that we hate to admit. It's hard to coordinate and communicate when a majority of the team is in person, save at least one of us who was completely remote. That one guy had a bit of trouble getting everyone to answer his questions promptly. ~~That was the guy writing this description~~. So, with these difficulties, you can imagine some of the difficulties that have to do with choosing the direction for the site in terms of visual design, mechanics, and the like. 

## Accomplishments we're proud of
  - Honestly, we're just proud that we managed to get a functioning website with a functioning database and managed to put a huge chunk of it into motion in less than 24 hours! Obviously it didn't come easy, but the fact that *we did that* is just astonishing. 
  - Finished the project on time
  - Able to learn new technology in a limited time 
    - website framework, database configuration, and integration between front and back end
  - learned how Git works
    - effectively manage the project by creating multiple branches, merging, and making pull request -- two notable ones are "git add ." and "git commit -m "project completed"

## What we've learned
  - Of the people who worked on this project, I'm (the writer) am almost 100% certain that everyone learned at least one new thing while working on this project: creating endpoints for the front and back end. You know, so they can work together as a functional website and not just 2 separate entities that *seem* to look nice together? Yeah--anyway--most of us in the front end really got to know how to use React. In fact, the whole reason why half of the team chose to do front end development was because that was something that they had little to no experience doing! The front end team really wanted to understand how to use industry tools like React to help not just themselves but everyone around them in the future. As for back end, some of us (much to our chagrin), had to figure out how to use Python and Flask, and even SQL just to get the website a proper back end. The amount of the work we have on database configuration and making efficient database schema to make the queries faster is a lot.
  -  A few of us has experience with software engineering experience, and we are able to treat it like a project that we got assigned to in an actual real world setting such as an internship 
  - Communication is the key. There were times that we have difficulties understand the terminology we used. Communicating effectively to make sure each part of the project is well designed. 

## What's next for our hack
  - Our vision for this hack, if the whole team decides to make it large scale, would be to seriously start making things work. We could keep the website as is, or make it just a tad bit better (blanking on ideas at the moment, bare with me!), and potentially make an app for iOS and Android so it's even more accessible! Our initial idea was to just make it easier for people to find their things, so naturally the easier we make things, the better it'll be. The endeavor itself was already a huge one and the fact that we even did *anything* about it is a milestone in and of itself. It was definitely a learning opportunity for most of us (some of us, the writer included, didn't even know how to *make* a website). As for future hackathons, we're not too sure! We'll definitely take this experience along with us when we decide to finally go after a new hackathon!
  - We will seriously add more components, and deploy the website using AWS before June 2023.

`
	},
	{
		name: 'Flashcards',
		description: 'An iOS app to help users to study in a productive and fun way',
		logo: ['Swift'],
		startDate: new Date(2022, 10),
		endDate: new Date(2022, 11),
		githubLink: "https://github.com/algebra2boy/Flashcards",
		readme:
			`
## Flashcard

### App Description (Lab 1)
User can flip the card to learn more about the answer to the question.

### App Walk-through

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/190292001-0b83caf9-df5c-4a1b-b157-2ee0b59117d0.mov" type="video/mp4">
</video>

## Required
- [x] Create New Project in Xcode
- [x] Add a view for the front side of the flashcard to display the question
- [x] Add a view for the back side of the flashcard to display the answer
- [x] Build in logic to show the answer side when the card is tapped
- [x] Push code to GitHub
## Optional
- [x] Toggle the flashcard between the question side and the answer side
- [x] Style the question and answer side of the card to better distinguish between the two sides
- [x] Add selectable multiple choice answers beneath the card


## Lab 2

### App Description
User can customize their question and answers for the flashcard. The app creates multiple screens. 

### App Walk-though

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/192846698-e986eb1c-b11a-4650-857c-c0dc7a646b0f.mov" type="video/mp4">
</video>

## Required
- [x] User can open the creation screen
- [x] User can cancel out of the creation screen
- [x] User can enter a new question and answer in the creation screen to then show it on the flashcard
- [x] Push code to GitHub
## Optional
- [x] User gets an error if they try to create a new flashcard with no question or answer
- [x] User can edit existing flashcard
- [x] User can add multiple choice answers in the creation screen

## Lab 3

### App Description
Uer can go back and forth for the new flashcards they created and delete their flashcards. 
Previous flashcards are saved on the disk.

### App Walk-though

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/194996971-8522f1d5-c609-4868-98b8-9de8cca3b5e6.mp4" type="video/mp4">
</video>


## Required
- [x] User can browse through multiple flashcards
- [x] User can re-open the app and see previously created flashcards
- [x] Push code to GitHub
## Optional
- [x] User can delete a flashcard
- [x] User can edit existing flashcard
- [x] User can store multiple choice questions

📝 \`NOTE\` Paste this template at the top of your existing \`README.md\` file from the last lab.

## Lab 4

### App Description
Flashcard now can now have autosize feature and fancy animation.

### App Walk-though

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/197112757-88ea6770-8b06-4141-9b4c-f601da5fb959.MP4" type="video/mp4">
</video>

## Required
- [x] User should see the app icon 
- [x] User should see a splash screen
- [x] User should see an flip animation when revealing the answer
- [x] User should see a slide animation when going to the next flashcard
- [x] User should see a slide animation when going to the previous flashcard
- [x] Push code to GitHub
## Optional
- [x] User should see a nicer flaschard with rounded corners, shadows, and animating when showing the first time
- [x] User should see all views properly layout when using the app on a phone of different sizes
- [] Correct answer in multiple choice should be random

`
	},
	{
		name: 'CYE take home assessment',
		description: 'My assessment for CYE',
		logo: ['Swift'],
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 10),
		githubLink: "https://github.com/algebra2boy/CYE_Take-Home_Assessment/tree/main/TakeHome",
		readme:
			`
This is my take-home assessment for CYE. I was lucky to be able to join this team and work on this amazing project called Appbook. 
I really appreciated this opporunity and I learned a ton about iOS dev and the team work. I have included my take-home submission above.`
	},
	{
		name: 'OHill-Squad-WeSQL',
		description: 'How to connect mySQL database with Python.',
		logo: ['Python', 'MySQL'],
		startDate: new Date(2022, 8),
		endDate: new Date(2022, 9),
		githubLink: "https://github.com/algebra2boy/OHill-Squad-WeSQL",
		readme:
			`
## What this is about
I took CS 345, which is about Database Management, and the class did not teach us much about how to connect the database with Python or other major languages. 
I wanted to learn how to create and manipulate SQL databases with Python through this personal project. All the names and data are from my classes, or my friends, 
and our classes. 


## How to access to the [mySQL panel](https://stackoverflow.com/questions/35858052/how-to-fix-command-not-found-mysql-in-zsh)
- Export the path every time you open the terminal
    - export PATH={PATH}:/usr/local/mysql/bin/
- connect to the MySQL (rule of thumb is "mysql -u {yourUserName} -p")
    - In this our case, yourUserName is 'root'
    - mysql -u root -p
- Display all databases by putting "SHOW DATABASES;"
- [Switch](https://linuxize.com/post/show-tables-in-mysql-database/) to the desired database using "USE {the name of the database}"
- Display all table information by doing "SHOW TABLES;"

## Important downloads
1. [mySQL Community Server](https://dev.mysql.com/downloads/mysql/)
    - must be downloaded first to connect the mySQL server 
2. [mySQL Workbench](https://www.mysql.com/products/workbench/)
    - must be downloaded to manage database connection


## Library
- mysql-connector-python
- pandas

Remember to install the package with the following command
\`\`\`bash
pip install <the name of the package>
\`\`\`

## Entity Relation Diagram
![plot](/image/E_R.png)


## Important functions
- sql.connector.connect(host, user_name, user_password)
- sql.connector.cursor()
- sql.connector.cursor().execute(query)
- [sql.connector.commit()](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlconnection-commit.html)
    - to commit the current transaction, by default Python does not autocommit (commiting is one of the way for isolation level)
- [cursor.fetchall()](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-fetchall.html)
    - fetches all (or all remaining rows) of a query result set and result a list of tuples. If no more rows are available, it returns an empty list.

## Resources
- [freeCodeCamp](https://www.freecodecamp.org/news/connect-python-with-sql/)
`
	},
	{
		name: 'HelloFromYongye',
		description: 'First mini iOS project to say hello and other greetings',
		logo: ['Swift'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 7),
		githubLink: "https://github.com/algebra2boy/codepath-prework",
		readme:
			`

### App Description
This project is my very first mini IOS project created on Xcode with Swift. It can do basic functionality like changing the background color and text color, altering the text string and saying goodbye!

### App Walk-though
<a href="https://ibb.co/Fw8RcdR">
	<img src="https://user-images.githubusercontent.com/103079472/180610928-df827445-2c86-4f1f-80e4-f128e436bf7c.gif" alt="Screen-Recording-2022-07-23-at-10-10-25-AM" border="0" width = "200" />
</a>

### Required User Stories
- [x] User sees custom text in a label - Hello from Yongye!
- [x] User see's custom background color.
- [x] User can tap a button to change the text color of the label.

### Optional User Stories
- [x] User can tap a button to change the color of the background view.
- [x] User can tap a button to change the text string of the label - Goodbye 👋.
	-  User can tap on the background view to reset all views to default settings.
- [x] User can update the label text with custom text entered into the text field.
   - [x] User can enter text into a text field using the keyboard.
   - [x] User can tap the "Change text string" button to update the label with the text from the text field.
   - [x] If the text field is empty, update label with default text string.
   - [x] The keyboard is dismissed after the button has been tapped.

`
	},
	{
		name: 'Covid19-Analysis',
		description: 'Relationship between mask mandate and hospitalization',
		logo: ['R', 'RStudio'],
		startDate: new Date(2020, 6),
		endDate: new Date(2020, 7),
		githubLink: 'https://github.com/algebra2boy/LearningDataScience/tree/main/Final_Project',
		readme:
			`
I am fortunate to be part of Summer Search. Summer Search provided me an amazing opportunity to take this class at Brown University over the summer of 2020. I learned about how to write R code
to understand the meaning behind data. 
<p>
	Free free to check out the presentation: <a
		class="underline hover:text-blue-600"
		href="/pdf/covid_19.pdf"
		>Statewide Mask Mandates vs COVID-19 Hospitalizations
	</a>
</p>
`
	},
	{
		name: 'Circus',
		description: 'A Java project that includes feature to modify student personal data',
		logo: ['Java'],
		startDate: new Date(2021, 2),
		endDate: new Date(2021, 5),
		githubLink: "https://github.com/algebra2boy/Circus",
		readme:
			`
This project is the final project that I did in my Java class in high school. This uses all the data structure concepts that I learned from Mr.Marques.
I used in this project is ArrayList, TreeMap, TreeSet IO, and JavaFX. Here is the presentation we showed to the class: [Circus Presentation](https://github.com/algebra2boy/Circus)
`
	},
	{
		name: 'Java Bundle',
		description:
			'9 Java projects that I did in a community college course',
		logo: ['Java'],
		startDate: new Date(2021, 1),
		endDate: new Date(2021, 5),
		githubLink: "https://github.com/algebra2boy/Advanced_Java",
		readme:
			`
Huge thanks to my high school teacher Paul Marques (known as Mr.Marques) for teaching me Java. Without him, I don't think I would be able to major in computer science in college.
1. BucketSort: Implements the bucket sort algorithm.
	- A bucket sort implementation using a linked list in Java. The main class BucketSortLL initializes an array of numbers and a linked list to hold them. It creates an array of buckets (linked lists), sorts the numbers by distributing them into buckets based on digit place values, and then gathers them back into the main list. The sorting process continues until the list is sorted. Supporting classes, LinkedList and Node, manage list operations and node data.
	- BucketSortLL: Main class with sorting logic.
	- LinkedList: Custom linked list implementation.
	- Node: Represents individual elements in the linked list.
2. Comparables: Contains examples and exercises on the Comparable interface.
	- This package contains solid examples to learn about interface, abstract class, and inheritance in Java.
	- This shows how to use the Comparable interface to extend the functionality of classes.
	- Also learn about how compareTo() method works and comparable works in Java.
3. FamilyTree: Manages and manipulates family tree structures.
	- A family tree is a hierarchical structure that represents the relationships between family members.
	- The family tree is structed as a linked list of linked lists, with each list representing a family member and their descendants. 
	- This project truly taught me how complicate recursion works and how to manage pointers in Java. 
4. Grid: Implements grid-based data structures and operations.
	- Do you know the island problem in LeetCode? This project is similar to that problem.
	- Cannot believe I was already solving leetcode problem when I was in high school.
5. Hashing: Covers hashing algorithms and their applications.
6. ScrambleParagraph: Scrambles and manipulates paragraphs of text.
	- Scramble a paragraph of text by randomly permuting the words in it.
	- A lot of IO operations and string manipulation and smart function calls!
7. StringSinM: Find the path in a maze using recursion.
	- Given a string, find if there is a path in a maze from the start to the end.
	- This project is a good example of how Backtracking, BFS and DFS works.
8. TranslationMap: Handles translations between different data mappings.
	-  A dictionary can be represented as a map in which each word is associated with a set of all its translations into another language.  
	- For example, in an English-Spanish dictionary, holiday might be associated with {fiesta, vacaciones}; in a Spanish-English dictionary, fiesta might be associated with {holiday, party, celebration, feast}.  
	- In a dictionary map, a word is a key and a set of its translations is a “value” associated with that key.  Suppose the dictionary is implemented as a TreeMap and a set of translations for each word implemented as a TreeSet.
9. TreeBalancing: Implements tree balancing algorithms and techniques
	- This project contains a binary search tree implementation in Java. The main class, TreeBalancing, initializes a binary search tree and inserts nodes into it.  
	- Supporting classes, Node and Tree, manage tree operations and node data.
`
	},
	{
		name: 'TicTacToe',
		description: 'A simple TicTacToe game implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 2),
		githubLink: "https://github.com/algebra2boy/Swift/tree/main/TicTacToeSwiftUI",
		readme:
			`
## Tic-Toe-Tac toe
I am making a simple Tic-Toe-Tac to learn how SwiftUI works


## The keys that I learned
1. VStack/HStack
2. Enum 
3. StateObject and ObservableObject (Published)
4. ternary operations

## Credit!
Thank you [Cal](https://www.youtube.com/watch?v=LmkHSTPK2h8) for providing such a good resource

## Videowalkthrough

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/208536777-d9501074-7728-40d1-805c-ceaa15c7de44.mov" type="video/mp4">
</video>

`
	},
	{
		name: 'Tips Calculator',
		description: 'A simple tips calculator implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 1),
		githubLink: "https://github.com/algebra2boy/Swift/tree/main/TipCalculator",
		readme:
			`
## About
I am making a simple calculator wuth slider, avoiding the overhead of using the actual calculator everytime and making it fun.


## Hints
1. Do not put any invalid characters other than numbers.
2. The tip percentage is only range from 0 to 30% 
3. Have fun!


## Video walkthrough

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/103079472/208486549-c0ed9f72-c842-4a00-a878-4e4bd1639513.mov" type="video/mp4">
</video>

`
	},
	{
		name: 'Hacking with Swift',
		description: '13 projects that I did in Hacking with Swift',
		logo: ['Swift'],
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 10),
		githubLink: "https://github.com/algebra2boy/Swift/tree/main/TaylorSwift",
		readme:
			`
First of all, I really love Swift, SwiftUI, and libraries that Apple provides. I was fascinated with iOS dev
and wanted to learn more about it. I found this amazing website called Hacking with Swift by Paul Hudson.
I did all of his SwiftUI projects and learned a ton about iOS dev. I am so grateful for his amazing tutorials.
Here are the projects that I did:

1. Project 1: WeSplit
	- a simple app to split a restaurant bill among friends, demonstrating forms, user input, and basic SwiftUI views.

2. Project 2: Guess the Flag
	- A fun quiz app where users guess which flag belongs to which country, highlighting SwiftUI's layout and image capabilities.

3. Project 3: Views and Modifiers
	- Explores SwiftUI's views and modifiers to create reusable UI components.

4. Project 4: BetterRest
	- An app to calculate the optimal sleep time using CoreML, showcasing forms, user input, and integration with machine learning.

5. Project 5: Word Scramble
	- A word game that reinforces the use of lists, alerts, and text input in SwiftUI.

6. Project 6: Animation
	- Demonstrates various animation techniques in SwiftUI, including implicit and explicit animations.

7. Project 7: iExpense
	- An expense tracker app that covers state management, user defaults, and data persistence.

8. Project 8: Moonshot
	- A space exploration app using JSON data, custom layouts, and advanced navigation.

9. Project 9: Drawing
	- Focuses on drawing with SwiftUI, including paths, shapes, and transformations.

10. Project 10: Cupcake Corner
	- An app for cupcake orders, demonstrating forms, networking, and data validation.

11. Project 11: Bookworm
	- A book tracking app that integrates Core Data for persistent storage.

12. Project 12: CoreData Project
	- Explores Core Data in depth, showcasing advanced data management techniques.

13. Project 13: Instafilter
	- A photo editing app that demonstrates the use of Core Image filters.

14. Project 14: BucketList
	- An app for keeping track of places to visit, integrating location and map views.

15. Project 15: Accessibility
	- Enhances the accessibility of SwiftUI apps, making them more usable for everyone.

16. Project 16: HotProspects
	- A contacts app that uses QR codes, local notifications, and context menus.

17. Project 17: Flashzilla
	- A flashcard app demonstrating gestures, haptics, and user notifications.
18. Project 18: Layout and Geometry
	- Explores advanced layout techniques and geometry readers in SwiftUI.
	`
	},
	{
		name: 'Snake Game',
		description: 'A simple snake game implemented in Swift using SpriteKit',
		logo: ['Swift'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
		githubLink: "https://github.com/algebra2boy/Swift/blob/main/SpriteKit_experiment/SpriteKit_experiment/PixelMoving.swift",
		readme:
			`
This is my first project that I learn how to make a game using SpriteKit. I learned how to create a pixel moving around the screen and how to make it move in a certain direction.
This is also my first game! I am excited to learn more about SpriteKit and make more games in the future. I do feel that SpriteKit is a bit different from SwiftUI and it hasn't been updated since 2017.
`
	},
	{
		name: 'RateMyDine2.0',
		description: 'Rate My Dine upgrade',
		logo: ['Typescript', 'Express', 'Svelte', 'Jest'],
		startDate: new Date(2024, 5),
		endDate: new Date(2024, 8),
		githubLink: "https://github.com/algebra2boy/RateMyDine2.0",
		readme:
			`
RateMyDine was a project I started in 2023 Spring to help students at UMass Amherst leave feedback for food quality. It was written in pure HTML, CSS, and Javascript. I decided to upgrade it to Typescript, Express, Svelte, SveleKit and Jest to learn more about these technologies. I also wanted to make it more user-friendly and interactive. The project is still in progress, but I have made significant progress in the backend and frontend. I have also written some tests for the backend using Jest. I am excited to see how it turns out!
You can check out the previous version of [RateMyDine](https://github.com/algebra2boy/RateMyDine) here.
`

	},
	{
		name: 'Router API',
		description: 'An internal API that is used by Curbhub for Router',
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 8),
		readme:
			`
## Description:
This purporse of this project is to set up a website API that can be called by any services to use the Curbhub's Router without having to enage with the Router code. 

## Overview:
The API will be receving all the order-related and fleet related information and return a list of stops with stop ID, and their arrival and departure time in JSON format. User would need to follow rules to be able to call the RouterAPI succesfully.

## Resource
   GET  https://www.curbhub.io/api/1.0/trips
   
## Trips Parameter
  ### Required 
  * Deliveryorder (deliveryorder)
    - Each delivery order contains one pick up location and multiple drop-off location. Pick up location contains pickup time, id, and coordinates. 
  * Pickup_time (day-month-year-hour:minute)
    - The time to pick up the delivery orders at a location in the following format %d-%m-%y-%H:%M
  * Pickup_id (pid)
    - The unique Pickup location id
  * Pickup_loc (ploc)
    - Geographical coordinates of Pickup location with latitude and longitude
  * Drop-off
    - Drop off contains information about multiple drop off delivery orders.
  * num_of_packages (npack)
    - the number of packages needed to drop off at an specific location
  * Drop-off loc_id (did)
    - The unique Drop-off location id
  * Drop-off location (lat%7Clong)
    - Geographical coordinates of Drop-off location with latitude and longitude
  * first_leg_cap (firstlc)
    - Capacity of the first leg couriers 
   ### Optional 
   * Second_leg_couriers (secondlc)
    - contains information about the service area, capacity and type of the second leg transportation
   * service_area 
    - Geographical coordinates of service area for second leg couriers with latitude and longitude
   * capacity (cap)
    - Capacity of the second leg couriers 
   * type (type)
    - The unique type of transportation for the second leg couriers 
   * transship_loc (tloc)
    - Geographical coordinates of transship points, the location where first leg couriers transfers the packages to second leg couriers

## Template Request
	* ? is used to separate path and query parameter 
	* & is used to separate each query parameter \`
	* % 7C is the separator to separate individual variable(|)
	   - Ex. [10, 20, 30] -> 10 % 7C20 % 7C30 -> 10 | 20 | 30
	* % 2C is the separator to separate items in a list(,)
	- Ex. [(10, 20), (30, 40)] -> 10 % 7C20 % 2C30 % 7C40 -> -> 10 | 20, 30 | 40
	* % 20 is the separator to separate the delivery orders(' ')
	- Ex.deliveryorder={ order1 } % 20{ order2 } -> deliveryorder={ order1 } { order2 }

\`\`\`
https://www.curbhub.io/api/1.0/trips?deliveryorder={day-month-year-hour:minute}%7C
													   {id}%7C
													   {lat%7Clong}%7C
													   {npack1%7Cdid1%7Clat1%7Clong1%2C
													   npack2%7Cdid2%7Clat2%7Clong2...}%20
													   {day-month-year-hour:minute}%7C
													   {id}%7C
													   {lat%7Clong}%7C
													   {npack1%7Cdid1%7Clat1%7Clong1%2C
													   npack2%7Cdid2%7Clat2%7Clong2...}....
									   &firstlc={n1%7Cn2%7Cn3%7C...}
									   &secondlc={lat1%7Clong1%7Ccap1%7Ctype1%2C
												  lat2%7Clong2%7Ccap2%7Ctype2%2C...}
									   &tloc={lat1%7Clong1%2C
											  lat2%7Clong2%2C
											  lat3%7Clong3…}
   
\`\`\`
   
## Example Request
We have the following inputs 
\`\`\`
   deliveryorders:
	  order1:
		 pickup_id: '12'
		 pickup_time: '11-6-22-13:00'
		 pickup_location: (-69.0082, 153.2198)
		 dropoffs:
			- drop off location1:
				  num_of_packages: 3
				  loc_id: '13'
				  loc: (29.7227, 33.2767)
			- drop off location2:
				  num_of_packages: 1
				  loc_id: '14'
				  loc: (2.9799, 43.9455)
	  order2:
		 pickup_id: '15'
		 pickup_time: '11-6-22-18:00'
		 pickup_location: (-70.123, 150.312)
		 dropoffs:
			- drop off location1:
				  num_of_packages: 2
				  loc_id: '17'
				  loc: (29.7227, 33.2767)
				  
   first_leg_capacity: 
		 capacity1: 10
		 capacity2: 20
		 capacity3: 10
   
   second_leg_couriers:
		 courier1:
			- service_area : (-76.7788, 6.6568)
			- capacity : 5
			- type : bike
		 courier2:
			- service_area : (-34.1809, 115.2988)
			- capacity : 5
			- type : bike
	transship location:
		   tranship1: (-58.8951, -0.1513)
		   tranship2: (11.5015, 88.7465)
   
\`\`\`

## Converting the example inputs with the template
Remove the space before calling the website 

\`\`\`
 https://www.curbhub.io/api/1.0/trips?deliveryorder=11-6-22-13:00%7C
                                                    12%7C
                                                    -69.0082%7C%153.2198%7C
                                                    3%7C13%7C29.7227%7C33.2767%2C
                                                    1%7C14%7C2.9799%7C43.9455%20
                                                    11-6-22-18:00%7C
                                                    15%7C
                                                    -70.123%7C150.312%7C
                                                    2%7C17%7C29.7227%7C33.2767
                                    &firstlc=10%7C20%7C30
                                    &secondlc=-76.7788%7C6.6568%7C5%7Cbike%2C
                                              -34.1809%7C115.2988%7C5%7Cbike
                                    &tloc=-58.8951%7C-0.1513%2C
                                           11.5015%7C88.7465
\`\`\`

\`\`\`
 https://www.curbhub.io/api/1.0/trips?deliveryorder=11-6-22-13:00%7C12%7C-69.0082%7C153.2198%7C3%7C13%7C29.7227%7C33.2767%2C1%7C14%7C2.9799%7C43.9455%20
 11-6-22-18:00%7C15%7C-70.123%7C150.312%7C2%7C17%7C29.7227%7C33.2767&firstlc=10%7C20%7C30&secondlc=-76.7788%7C6.6568%7C5%7Cbike%2C34.1809%7C115.2988%7C5%7Cbike&tloc=-58.8951%7C-0.1513%2C11.5015%7C88.7465
\`\`\`

## Technologies
Project is created with:
  * PyCharm v 2022.1.2
  * Postman v 9.23.3
  * Python v 3.9
  * Flask v 2.1 

## Tools
Libriaies that are used:
  * datetime
  * unittest
  * requests
  * Flask
  * jsonify 
  * make_response


## Set up
To run this project, use the follwing command:
\`\`\`
  flask run
\`\`\`
`
	},
	{
		name: 'VeRoViz',
		description: 'visualize vehicle routing problem (VRP)',
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 8),
		readme:
			`
## Project Overview 
This project is used to visualize Curbhub's delivery orders on multiple vehicles,
especially to demonstrate its ability to transfer packages from first leg courier(ex.truck, car) 
to second leg courier(ex.bike / drone / person).

## Completed Tasks  ✓
- [x] Change the package size
- [x] How to get a better map layout
- [x] Make the truck not disappear after dropping the package
- [x] ALter the depature time
- [x] Implement a better routing service API
- OSRM - online < [MapRequest](https://developer.mapquest.com)


## Important downloads
- Link of the[VeRoViz](https://veroviz.org/downloads/index.html) 
- Download **CesiumJS** from[here](https://cesium.com/downloads/) 
		- You must download this to get the 3D visualization
	- This will be a big folder
- Download the **VeRoViz Cesium Viewer Plugin** from[here](https://veroviz.org/downloads/index.html)
	- You must download this to customize the package model, car model and so on
	- This will be a small folder
	- You will need to drag the **VeRoViz Cesium Viewer Plugin** folder to the **CesiumJS** (picture is shown at below)
	- pip install veroviz

<img src = "/image/curbhub/folder.png"
  alt = "Alt text"
  title = "Folder"
  style = "display: inline-block; margin: 0 auto;" >

You will notice the veroviz folder is in the CesiumJS folder.One other important file is the "server.cjs", which 
we will use to activat the server to visualize the 3D model.I have included some info on how to activate the server in the 
"travel_main_improved.ipynb"

<img src = "/image/curbhub/activate_server.png"
  alt = "Alt text"
  title = "activate web server"
  style = "display: inline-block; margin: 0 auto;" >


## Sample 2D Example 
A 2D model with 3 different vehicles: Two trucks and one drone.The city I pick is Charlestown, Massachusetts. 
There are many icons on the graph.The icon with blue star is "delivery order", and the icon with red home is "warehouse", and
lastly the one with "green flag" is "transship point".

<img src = "/image/curbhub/2D.png"
alt = "Alt text"
title = "2D Charlestown"
style = "display: inline-block; margin: 0 auto;" >
  
 
** Below are for Home Delivery **

<img src= "/image/curbhub/HomeDelivery_2D.png"
alt = "Alt text"
title = "home delivery"
style = "display: inline-block; margin: 0 auto;" >


<img src="/image/curbhub/2D_transship_improved.png"
alt = "Alt text"
title = "transship_improved"
style = "display: inline-block; margin: 0 auto;" >

<img src="/image/curbhub/HomeDelivery_2D_no_transship.png"
alt = "Alt text"
title = "homedelivery"
style = "display: inline-block; margin: 0 auto;" >
  

## 3D Demonstration  
I have included the sample video. (with watermarks)

<video width="400" height="240" controls>
  <source src="/video/3Dvideo_Demo.mp4" type="video/mp4">
</video>

## Videos for Home Delivery Conference(without watermarks)

This is the one without transship points.

<video width="400" height="240" controls>
	<source src="/video/without-transship.mp4" type="video/mp4">
</video>


This is the one with transship points.

<video width="400" height="240" controls>
	<source src="/video/transship_final.mp4" type="video/mp4">
</video>

## Credit 
We have to thank for the excellent work from Optimator Lab, who made this library open source and provided so many awesome functionality.
\`\`\`
@Misc{veroviz2020,
    title        = {{VeRoViz}: A Vehicle Routing Visualization Toolkit}, 
    author       = {Lan Peng and Chase Murray},
    year         = {2020},
    howpublished = {\\url{https://ssrn.com/abstract=3746037}},
    note         = {Accessed: 2021-01-04}
}
\`\`\`

`
	},
	{
		name: 'Twilio-ChatBot',
		description: 'A bot on WhatsApp for users to perform background check',
		logo: ['Python', 'Flask', 'Twilio'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 7),
		readme:
			`
## Project Overview 
This project is called WhatsApp Chat Bot. The bot can be used to communicate with the the real user. The purpose of 
the bot is to provide access to the Curbhub's user to upload their personal information and ID to the system.

## How to use the bot 
1. Text "Hi" to Curbhub's business number on WhatsApp
2. Provide your personal information
3. Type a single number to confirm your text messages 
4. Repeat step 2 and 3 until you submit your ID
5. Text "Check" to see your information
6. Text "Done" to our bot 


## Technologies
- [Flask](https://flask.palletsprojects.com/en/2.2.x/): provide web framework to ensure webhook
- [Twillio](https://www.twilio.com): use to create two-way communication between clients and server
- [Ngrok](https://ngrok.com): temporarily push the local app to live for debugging and testing purposes
    - remember to make an account and have your token ready 
    - then add your token to the executable file (ngrok authtoken <token number>)
- PyCharm: this project is programmed entirely with in Pycharm


## How the bot works internally 
The program creates a folder for any user who initalizes chat with the bot. 

Any message is texted by the user is stored in their designated file called "info.json" and ID is stored as f"ID.{their file extension}"

## Video Walkthrough 

<video width="400" height="240" controls>
  <source src="/video/bot.mp4" type="video/mp4">
</video>

## Edge Cases
- The bot does not accept any numbers or symbols for names.
- The bot only accepts valid email domains (for example, @gmail.com, @yahoo.com)
 <img width="1000" alt="WhatsApp Bot Demo" src="https://user-images.githubusercontent.com/103079472/187493376-9285c085-7b19-4761-b5d6-6cb42ec8e1ab.png">


`
	},
	{
		name: 'Distance Matrix',
		description:
			"Predict travel time using H3, Distance Matrix, and NetworkX Dijkstra",
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 8),
		readme:
			`
## Introduction
Every time if you want to go to an unfamiliar or distant location, you would always certainly want to use 
some sort of navigation system (Google Maps, Apple Maps, etc) to guide you to the destination. The map system
would return you a route that would avoid potential traffic and buildings. 
In our model, we are able to simulate a similar route system with *linear route*.


## Our steps of approaching
1. MapConstruction.ipynb
	- Obtain the geographical data from a specified county (we choose Suffolk county in Massachusetts, but you can choose any county you want in the U.S.A.) 
	- Visualize the county
	- Divide the county by hexagons and store the hexagon information in a csv
		- h3_id (the id that uniquely identifies the hexagon)
		- h3_geo_boundary (the data about the hexagonal boundary)
		- h3_centroid (latitude and longitude of the center of the hexagon)
	- Find the 1st degree neighbors of each hexagon and store their neighbors in another csv
	- Find the center of each hexagon and store their coordinates (lat,lon) in the **"position.json"** file


2. Distance_matrix_HEX.ipynb
	- Construct request link with the coordinate of one origin and one nearby neighbor to call the API 
		- The number of times we call the API is the number of edges of the graph
		- In other words, the run time complexity is O(e) where e is the number of edges of the graph
	- Obtain API response data from the API in JSON format
		- However, we only need duration in traffic, which is the length of time it takes to travel on this linear route, based on current and historical traffic conditions 
	- Utilize a graph library called Networkx to add edges (u,v) and edges attributes (weight) to the graph 
	- Store the edges information in a file called **"map.edgelist"** file to prevent the API data is lost (also a way of preventing calling the API again and again)
		- The Google Map Distance Matrix is a bit costly. You can check the [price](https://developers.google.com/maps/documentation/distance-matrix/usage-and-billing) here.  

3. Dijkstra_Algo.ipynb
	- It allows us to find the shortest path between two nodes of a graph
	- In our case, it is finding the most time efficient path between two delivery orders

## Walkthrough with "Entity-Relation" Diagram
<img
  src="/image/curbhub/walkthrough.png"
  alt="Alt text"
  title="Walkthrough E/R">

## Librarys 
As with everything done in Python, you would always need to import libraries. 
Here is a list of libraries I use for this project:

1. [h3](https://h3geo.org/docs/): to work with hexagons
	- [h3.k_ring(h3_id, 1)](https://h3geo.org/docs/api/traversal) -> finds the 1st degree neighbor given h3 id
	- [h3.polyfill_geojson(poly_geojson, resolution)](https://h3geo.org/docs/api/regions) -> fills out the hexagon
	- [h3.h3_to_geo(h3_hex)](https://h3geo.org/docs/api/indexing) -> converts the h3 id to geographical coordinates (lat, long)
	- [h3.geo_to_h3(lat, long, resolution)](https://h3geo.org/docs/api/indexing) -> convert a given coordinate and its resolution to a h3 id
2. [networkx](https://networkx.org): to connect edges and draw the graph
3. [json](https://docs.python.org/3/library/json.html): to store geographical coordinates of center of each hexagon
4. [geopandas](https://geopandas.org/en/stable/): to retrieve infomation from the geopackage (in our case, it is gpkg file)
5. [pandas](https://pandas.pydata.org): to work with csv
6. [shapely](https://shapely.readthedocs.io/en/stable/manual.html): to construct polygons
7. [matplotlib.pyplot](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.html): to make beautiful visualization
8. [csv](https://docs.python.org/3/library/csv.html): to read and write the neighbors data
9. requests: to construct API connection

Remember to install the package with the following command:
\`\`\`bash
pip install <the name of the package>
\`\`\`

## Dijkstra's algorithm
I have included an example of code snippet to show how this algorithm works in **"experiment.ipynb"**.

<img
  src="/image/curbhub/example.png"
  alt="Alt text"
  title="example"
  style="max-width: 325px">

This a graph with 5 nodes and 7 edges. What is the best way to go from 2 to 5?

## An example of a path for two delivery points 
This is a path from Roslindale to South Boston waterfront, and it takes **49** minutes to travel. 

<img
  src="/image/curbhub/delivery_path.png"
  alt="Alt text"
  title="delivery_path"
  style="max-width: 325px">


## What it looks like on Uber's Kepler's gl website
- [Kepler'gl](https://kepler.gl) is a very powerful web application for geospatial analytic visualizations.
- When you open the website, go to "get started" and drag the csv from the *CSVFolder* that does not contain the postfix "neighbor".

<img
  src="/image/curbhub/Uber_Kepler_demo.png"
  alt="Alt text"
  title="Uber_Kepler_demo"
  style="max-width: 325px">
`
	}
];

// sort by logo name alphabetically
personalProjects.forEach((project) => {
	project.logo.sort((a, b) => a.localeCompare(b));
});

personalProjects.sort((a, b) => {
	if (a.startDate > b.startDate) {
		return -1;
	} else if (a.startDate < b.startDate) {
		return 1;
	} else {
		return 0;
	}
});

