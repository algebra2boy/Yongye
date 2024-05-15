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
		endDate: new Date(2024, 9)
	},
	{
		name: 'PandoraBox',
		description: 'A SwiftUI + Spritekit mini game that simulates the cup game',
		logo: ['Swift'],
		startDate: new Date(2024, 5),
		endDate: new Date(2024, 5)
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
# Yogo 

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
		endDate: new Date(2024, 5)
	},
	{
		name: 'Ice-queb',
		description: 'A robust REST and WebSocket API for managing office hour',
		logo: ['Docker', 'Typescript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	},
	{
		name: 'Chemistry-Web-App',
		description: 'A web app that help students to learn chemistry',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
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
		description: 'Learning how to set up and trigger Github workflows',
		logo: ['GithubAction'],
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
		description: 'learn how to deploy node.js express dockerized app on Azure',
		logo: ['Docker', 'Node.js', 'Express', 'Azure'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4),
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
## FreeWrite

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
		description: 'A simple SwiftUI demo app to manage houses for real estate agent.',
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
		endDate: new Date(2024, 2)
	},
	{
		name: 'Classic-Quote-Generator',
		description: 'A simple Apple Watch app that generates classic quotes',
		logo: ['Swift'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 1)
	},
	{
		name: 'Event-Planner',
		description: 'A web app that helps create and sign up events using microservices',
		logo: ['Docker', 'Javascript', 'Express', 'MongoDB', 'Bootstrap'],
		startDate: new Date(2023, 7),
		endDate: new Date(2023, 9)
	},
	{
		name: 'MCAS-Analysis',
		description: 'Explores the relationship between income and standardized test performance',
		logo: ['R', 'RStudio'],
		startDate: new Date(2023, 9),
		endDate: new Date(2024, 1)
	},
	{
		name: 'ShopHub',
		description: 'A shopping app that provides convenience to daily life',
		logo: ['Swift'],
		startDate: new Date(2023, 6),
		endDate: new Date(2023, 12)
	},
	{
		name: 'TechHouse',
		description: 'A platform to share computer science knowledge',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 12)
	},
	{
		name: 'Ree-See.it',
		description: 'An iOS mobile app that manages and stores receipts',
		logo: ['Docker', 'Swift', 'Express', 'MongoDB', 'AWS', 'ChatGPT', 'Flask', 'Tesseract.js'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 11)
	},
	{
		name: 'SwiftUI Learning',
		description: 'A website that helps you learn SwiftUI like quizlet',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Crewmate',
		description: 'A website that creates AmongUs characters',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Community Board',
		description: 'A website that displays computer science club',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Cat',
		description: 'A website that finds cat images based on your preference',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Breweries',
		description: 'A website that finds breweries using API and generate analytics charts',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 11)
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
		endDate: new Date(2023, 3)
	},
	{
		name: 'RateMyDine',
		description: 'A platform to share opinions about food from all dining hall at UMass Amherst',
		logo: ['HTML', 'CSS', 'Javascript'],
		startDate: new Date(2023, 2),
		endDate: new Date(2023, 5)
	},
	{
		name: 'Socket programming',
		description: 'Learn about how UCP and TCP work for both client and server',
		logo: ['Python'],
		startDate: new Date(2023, 3),
		endDate: new Date(2023, 4)
	},
	{
		name: 'DineAndGo',
		description: 'Making a restaurant management app',
		logo: ['Swift', 'Firebase'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 2)
	},
	{
		name: 'Enrollment',
		description: 'A simple website for enrolling classes with login and register feature.',
		logo: ['HTML', 'CSS', 'Javascript', 'MongoDB', 'Flask'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 1)
	},
	{
		name: 'AbsenteeismAtWork',
		description: 'Data Science Project about work absenteeism',
		logo: ['R', 'RStudio'],
		startDate: new Date(2022, 9),
		endDate: new Date(2023, 1)
	},
	{
		name: 'Find.it',
		description: 'A web app helps people to find their lost items on campus',
		logo: ['React', 'HTML', 'CSS', 'Twilio', 'Flask', 'MySQL'],
		startDate: new Date(2022, 11),
		endDate: new Date(2022, 12)
	},
	{
		name: 'Flashcards',
		description: 'An iOS app to help users to study in a productive and fun way',
		logo: ['Swift'],
		startDate: new Date(2022, 10),
		endDate: new Date(2022, 11)
	},
	{
		name: 'CYE take home assessment',
		description: 'My assessment for CYE',
		logo: ['Swift'],
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 10)
	},
	{
		name: 'OHill-Squad-WeSQL',
		description: 'Learned how to connect mySQL database with Python.',
		logo: ['Python', 'MySQL'],
		startDate: new Date(2022, 8),
		endDate: new Date(2022, 9)
	},
	{
		name: 'HelloFromYongye',
		description: 'first mini iOS project to say hello and other greetings',
		logo: ['Swift'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 7)
	},
	{
		name: 'Covid19-Analysis',
		description: 'A data analysis project about COVID-19 between mask mandate and hospitalization',
		logo: ['R', 'RStudio'],
		startDate: new Date(2020, 6),
		endDate: new Date(2020, 7),
		githubLink: 'https://github.com/algebra2boy/LearningDataScience/tree/main/Final_Project'
	},
	{
		name: 'Circus',
		description: 'A Java project that includes feature to modify student personal data',
		logo: ['Java'],
		startDate: new Date(2021, 2),
		endDate: new Date(2021, 5)
	},
	{
		name: 'Java Bundle',
		description:
			'10 Java projects that I did in a community college course taught by Professor Paul Marques',
		logo: ['Java'],
		startDate: new Date(2021, 1),
		endDate: new Date(2021, 5)
	},
	{
		name: 'TicTacToe',
		description: 'A simple TicTacToe game implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 2)
	},
	{
		name: 'Tips Calculator',
		description: 'A simple tips calculator implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 1)
	},
	{
		name: 'Hacking with Swift',
		description: '13 projects that I did in Hacking with Swift',
		logo: ['Swift'],
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Snake Game',
		description: 'A simple snake game implemented in Swift using SpriteKit',
		logo: ['Swift'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'RateMyDine2.0',
		description: 'Rate My Dine upgrade (but better, still in progress)',
		logo: ['Typescript', 'Express', 'Svelte', 'Jest'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 2)
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
	-[x] Change the package size
	- [x] How to get a better map layout
	- [x] Make the truck not disappear after dropping the package
	- [x] ALter the depature time
	- [x] Implement a better routing service API
	- OSRM - online < [MapRequest](https://developer.mapquest.com)


## Important downloads
	- Link of the[VeRoViz](https://veroviz.org/downloads/index.html) 
- Download ** CesiumJS ** from[here](https://cesium.com/downloads/) 
		- You must download this to get the 3D visualization
	- This will be a big folder
	- Download the ** VeRoViz Cesium Viewer Plugin ** from[here](https://veroviz.org/downloads/index.html)
		- You must download this to customize the package model, car model and so on
	- This will be a small folder
	- You will need to drag the ** VeRoViz Cesium Viewer Plugin ** folder to the ** CesiumJS ** (picture is shown at below)
	- pip install veroviz

	< img src = "/image/curbhub/folder.png"
  alt = "Alt text"
  title = "Folder"
  style = "display: inline-block; margin: 0 auto;" >

		You will notice the veroviz folder is in the CesiumJS folder.One other important file is the "server.cjs", which 
we will use to activat the server to visualize the 3D model.I have included some info on how to activate the server in the 
"travel_main_improved.ipynb"

		< img src = "/image/curbhub/activate_server.png"
  alt = "Alt text"
  title = "activate web server"
  style = "display: inline-block; margin: 0 auto;" >


## Sample 2D Example 
A 2D model with 3 different vehicles: Two trucks and one drone.The city I pick is Charlestown, Massachusetts. 
There are many icons on the graph.The icon with blue star is "delivery order", and the icon with red home is "warehouse", and
lastly the one with "green flag" is "transship point".

< img src = "/image/curbhub/2D.png"
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

<iframe
	src="/video/3Dvideo_Demo.mp4"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
class="w-full h-96"
title = "3Dvideo_Demo" >
	</iframe>

## Videos for Home Delivery Conference(without watermarks)

This is the one without transship points.

< iframe
src = "/video/without-transship.mp4"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
class="w-full h-96"
title = "without-transship" >
	</iframe>


This is the one with transship points.

< iframe
src = "/video/transship_final.mp4"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
class="w-full h-96"
title = "transship_final" >
	</iframe>

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
		description: 'A bot on WhatsApp for users to submit ID to perform background check',
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

<iframe
	src="/video/bot.mp4"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	class="w-full h-96"
	style: "margin-bottom: 20px";
	title="bot">
</iframe>

## Edge Cases
- The bot does not accept any numbers or symbols for names.
- The bot only accepts valid email domains (for example, @gmail.com, @yahoo.com)
 <img width="1000" alt="WhatsApp Bot Demo" src="https://user-images.githubusercontent.com/103079472/187493376-9285c085-7b19-4761-b5d6-6cb42ec8e1ab.png">


`
	},
	{
		name: 'Distance Matrix',
		description:
			"Predict travel time using Uber's H3, Distance Matrix API, and NetworkX's Dijkstra",
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

export const sortedProjects: PersonalProject[] = personalProjects.sort((a, b) => {
	if (a.startDate > b.startDate) {
		return -1;
	} else if (a.startDate < b.startDate) {
		return 1;
	} else {
		return 0;
	}
});
