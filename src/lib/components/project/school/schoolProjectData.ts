import type { FileStructure } from '../index.d.js';

const Fall2021Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS191: Data Science For Good',
		files: [{ type: 'file', name: 'README.md' }]
	}
];

const Spring2022Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS198C: C Programming Language',
		files: [
			{ type: 'file', name: 'starterProject.c' },
			{ type: 'file', name: 'unitConversion.c' },
			{ type: 'file', name: 'arrayScaling.c' },
			{ type: 'file', name: 'eventTime.c' },
			{ type: 'file', name: 'bitsAndBytes.c' },
			{ type: 'file', name: 'militaryTime.c' },
			{ type: 'file', name: 'binaryTree.c' },
			{ type: 'file', name: 'credentialsList.c' },
			{ type: 'file', name: 'mathParsing.c' },
			{ type: 'file', name: 'argsAndStrings.c' },
			{ type: 'file', name: 'compareGPA.c' },
			{ type: 'file', name: 'makeMakefile.c' },
			{ type: 'file', name: 'README.md' }
		]
	},
	{
		type: 'folder',
		name: 'CS230: Computer Systems Principles',
		files: [
			{ type: 'file', name: 'clue.c' },
			{ type: 'file', name: 'dataPresentation.c' },
			{ type: 'file', name: 'binaryBomb.c' },
			{ type: 'file', name: 'cacheSimulator.c' },
			{ type: 'file', name: 'threadsSynchronization.c' },
			{ type: 'file', name: 'network.c' },
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Summer2022Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS345: Data Management',
		files: [
			{ type: 'file', name: 'basicSelect.sql' },
			{ type: 'file', name: 'entityRelation.sql' },
			{ type: 'file', name: 'functionalDependecies.sql' },
			{ type: 'file', name: 'indexingAndTuning.sql' },
			{ type: 'file', name: 'security.sql' },
			{ type: 'file', name: 'concurrency.java' },
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Fall2022Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS360: Network Security',
		files: [{ type: 'file', name: 'README.md' }]
	},
	{
		type: 'folder',
		name: 'CS377: Operating Systems',
		files: [
			{
				type: 'folder',
				name: 'Discussion',
				files: [
					{ type: 'file', name: 'dataTypes.cpp' },
					{ type: 'file', name: 'forkAndExec.cpp' },
					{ type: 'file', name: 'killAndErrors.cpp' },
					{ type: 'file', name: 'scheduling.cpp' },
					{ type: 'file', name: 'threading.cpp' },
					{ type: 'file', name: 'memoryAllocation.cpp' },
					{ type: 'file', name: 'pageWalk.cpp' },
					{ type: 'file', name: 'serialization.cpp' }
				]
			},
			{
				type: 'folder',
				name: 'Project',
				files: [
					{ type: 'file', name: 'invertedIndex.cpp' },
					{ type: 'file', name: 'shell.cpp' },
					{ type: 'file', name: 'scheduler.cpp' },
					{ type: 'file', name: 'produceConsumer.cpp' },
					{ type: 'file', name: 'memoryAllocator.cpp' },
					{ type: 'file', name: 'fileSystem.cpp' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Spring2023Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS326: Web Programming',
		files: [
			{
				type: 'folder',
				name: 'Project',
				files: [
					{ type: 'file', name: 'scrabble.html' },
					{ type: 'file', name: 'scrabble.css' },
					{ type: 'file', name: 'scrabble.js' }
				]
			},
			{
				type: 'folder',
				name: 'Exercise',
				files: [
					{
						type: 'folder',
						name: '1-5',
						files: [
							{ type: 'file', name: 'letterFrequency.html' },
							{ type: 'file', name: 'panlindrome.html' },
							{ type: 'file', name: 'decoderRingClass.js' },
							{ type: 'file', name: 'decoderWebPage.html' },
							{ type: 'file', name: 'decoderWebPage.css' },
							{ type: 'file', name: 'decoderWebPage.js' }
						]
					},
					{
						type: 'folder',
						name: '6-10',
						files: [
							{ type: 'file', name: 'decoderInteractive.html' },
							{ type: 'file', name: 'decoderInteractive.css' },
							{ type: 'file', name: 'decoderInteractive.js' },
							{ type: 'file', name: 'decoderRingClass.js' },
							{ type: 'file', name: 'chessboard.html' },
							{ type: 'file', name: 'chessboard.css' },
							{ type: 'file', name: 'chessboard.js' },
							{ type: 'file', name: 'persistentEncoder.js' },
							{ type: 'file', name: 'run-server.js' }
						]
					},
					{
						type: 'folder',
						name: '10-14',
						files: [
							{ type: 'file', name: 'restAndFetch.js' },
							{ type: 'file', name: 'crud-1.js' },
							{ type: 'file', name: 'crud-2.js' },
							{ type: 'file', name: 'routing.js' }
						]
					}
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	},
	{
		type: 'folder',
		name: 'CS453: Computer Networks',
		files: [
			{
				type: 'folder',
				name: 'Socket Programming',
				files: [
					{ type: 'file', name: 'UDP_client.py' },
					{ type: 'file', name: 'UDP_server.py' },
					{ type: 'file', name: 'TCP_client.py' },
					{ type: 'file', name: 'TCP_server.py' }
				]
			},
			{
				type: 'folder',
				name: 'ReliableDataTransferProtocol',
				files: [
					{ type: 'file', name: 'sender.py' },
					{ type: 'file', name: 'python.py' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	},
	{
		type: 'folder',
		name: 'CS589: Machine Learning',
		files: [
			{ type: 'file', name: 'knn.py' },
			{ type: 'file', name: 'decisionTree.py' },
			{ type: 'file', name: 'naiveBayes.py' },
			{ type: 'file', name: 'randomForest.py' },
			{ type: 'file', name: 'neutralNetwork.py' },
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Summer2023Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS490STA: Scalable Web Systems',
		files: [
			{
				type: 'folder',
				name: 'Exercise',
				files: [
					{ type: 'file', name: 'expressApp.js' },
					{ type: 'file', name: 'importAndExport.js' },
					{ type: 'file', name: 'nodemon.js' },
					{ type: 'file', name: 'morganHelmet.js' },
					{ type: 'file', name: 'expressMiddleware.js' },
					{ type: 'file', name: 'curl.sh' },
					{ type: 'file', name: 'nodeTestRunner.js' },
					{ type: 'file', name: 'logginWinston.js' },
					{ type: 'file', name: 'loadtest.sh' },
					{ type: 'file', name: 'rateLimiting.js' },
					{ type: 'file', name: 'todoList.svelte' },
					{ type: 'file', name: 'weather.svelte' },
					{ type: 'file', name: 'location.svelte' }
				]
			},
			{
				type: 'folder',
				name: 'Homework',
				files: [
					{ type: 'file', name: 'busScheduleAPI.js' },
					{ type: 'file', name: 'producerAndConsumer.js' },
					{ type: 'file', name: 'microservices.js' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Fall2023Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CS220: Programming Methodology',
		files: [
			{
				type: 'folder',
				name: 'Lab',
				files: [
					{ type: 'file', name: 'HOF.ts' },
					{ type: 'file', name: 'typesAndHOF.ts' },
					{ type: 'file', name: 'lists.ts' },
					{ type: 'file', name: 'mentalModelsClosures.ts' },
					{ type: 'file', name: 'propertyBasedTesting.ts' },
					{ type: 'file', name: 'streams.ts' },
					{ type: 'file', name: 'obserablesAndStreams.ts' },
					{ type: 'file', name: 'asynchronousProgramming.ts' },
					{ type: 'file', name: 'interpreters.ts' }
				]
			},
			{
				type: 'folder',
				name: 'Project',
				files: [
					{ type: 'file', name: 'imageProcessing.ts' },
					{ type: 'file', name: 'imageProcessingWithHof.ts' },
					{ type: 'file', name: 'lists.ts' },
					{ type: 'file', name: 'oracles.ts' },
					{ type: 'file', name: 'streamsAndSeries.ts' },
					{ type: 'file', name: 'fluentFilterAndJson.ts' },
					{ type: 'file', name: 'buildingAnInterpreter.ts' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	}
];

const Spring2024Project: FileStructure[] = [
	{
		type: 'folder',
		name: 'CICS305: Junior Year Writing',
		files: [{ type: 'file', name: 'README.md' }]
	},
	{
		type: 'folder',
		name: 'CS496: Web Systems Dev Real-World',
		files: [
			{
				type: 'folder',
				name: 'frontend',
				files: [
					{ type: 'file', name: 'components.svelte' },
					{ type: 'file', name: 'stores.ts' },
					{ type: 'file', name: 'styles.tw' },
					{ type: 'file', name: 'dockerfile.docker' },
					{ type: 'file', name: 'playwright.ts.test' }
				]
			},
			{
				type: 'folder',
				name: 'backend',
				files: [
					{ type: 'file', name: 'middlewares.ts' },
					{ type: 'file', name: 'configs.ts' },
					{ type: 'file', name: 'routes.ts' },
					{ type: 'file', name: 'controller.ts' },
					{ type: 'file', name: 'service.ts' },
					{ type: 'file', name: 'utils.ts' },
					{ type: 'file', name: 'validations.ts' },
					{ type: 'file', name: 'app.ts' },
					{ type: 'file', name: 'server.ts' },
					{ type: 'file', name: 'tests.test' },
					{ type: 'file', name: 'dockerfile.docker' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	},
	{
		type: 'folder',
		name: 'CS520: Theory and Practice of Software Engineering',
		files: [
			{
				type: 'folder',
				name: 'Exercise',
				files: [
					{ type: 'file', name: 'AdvancedGit.git' },
					{ type: 'file', name: 'executionState.java' },
					{ type: 'file', name: 'TestingAndDebugging.java' }
				]
			},
			{
				type: 'folder',
				name: 'Project',
				files: [
					{ type: 'file', name: 'DesignPattern.swift' },
					{ type: 'file', name: 'Randoop.java' }
				]
			},
			{ type: 'file', name: 'README.md' }
		]
	}
];

export const schoolProjects: FileStructure[][] = [
	Fall2021Project,
	Spring2022Project,
	Summer2022Project,
	Fall2022Project,
	Spring2023Project,
	Summer2023Project,
	Fall2023Project,
	Spring2024Project
];
