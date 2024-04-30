import type { FileStructure } from './index.d.ts';

const Fall2021Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 191: Data Science For Good',
        files: [{ type: 'file', name: 'REAMD.md' }]
    },
];

const Spring2022Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 198C: C Programming Language',
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
        name: 'CS 230: Computer Systems Principles',
        files: [
            { type: 'file', name: 'clue.c' },
            { type: 'file', name: 'dataPresentation.c' },
            { type: 'file', name: 'binaryBomb.c' },
            { type: 'file', name: 'cacheSimulator.c' },
            { type: 'file', name: 'threadsAndSynchronization.c' },
            { type: 'file', name: 'network.c' },
            { type: 'file', name: 'README.md' }
        ]
    },
];

const Summer2022Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 345: Data Management',
        files: [
            { type: 'file', name: 'basicSelect.sql' },
            { type: 'file', name: 'entityRelation.sql' },
            { type: 'file', name: 'functionDependecies.sql' },
            { type: 'file', name: 'indexingAndTuning.sql' },
            { type: 'file', name: 'security.sql' },
            { type: 'file', name: 'concurrency.java' },
        ]
    }
]

const Fall2022Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 360: Network Security',
        files: [
            { type: 'file', name: 'SQLInjection.pdf' },
        ]
    },
    {
        type: 'folder',
        name: 'CS 377: Operating Systems',
        files: [
            {
                type: 'folder',
                name: 'Discussion',
                files: [
                    { type: 'file', name: 'DataTypes.cpp' },
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
            }
        ]
    },
    {
        type: 'folder',
        name: 'Math 397: Math Computing',
    }
]

const Spring2023Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 326: Web Programming',
        files: [
            {
                type: 'folder',
                name: 'Project',
                files: [
                    { type: 'file', name: 'scrabble.html' },
                    { type: 'file', name: 'scrabble.css' },
                    { type: 'file', name: 'scrabble.js' },
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
                            { type: 'file', name: 'decoder-ring-class.js' },
                            { type: 'file', name: 'decoder-web-page.html' },
                            { type: 'file', name: 'decoder-web-page.css' },
                            { type: 'file', name: 'decoder-web-page.js' }
                        ]
                    },
                    {
                        type: 'folder',
                        name: '6-10',
                        files: [
                            { type: 'file', name: 'decoder-interactive.html' },
                            { type: 'file', name: 'decoder-interactive.css' },
                            { type: 'file', name: 'decoder-interactive.js' },
                            { type: 'file', name: 'decoder-ring-class.js' },
                            { type: 'file', name: 'chessboard.html' },
                            { type: 'file', name: 'chessboard.css' },
                            { type: 'file', name: 'chessboard.js' },
                            { type: 'file', name: 'persistent-encoder.js' },
                            { type: 'file', name: 'run-server.js' }
                        ]
                    },
                    {
                        type: 'folder',
                        name: '10-14',
                        files: [
                            { type: 'file', name: 'rest-and-fetch.js' },
                            { type: 'file', name: 'crud-1.js' },
                            { type: 'file', name: 'crud-2.js' },
                            { type: 'file', name: 'routing.js' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: 'folder',
        name: 'CS 453: Computer Networks',
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
                    { type: 'file', name: 'python.py' },
                ]
            },
        ]
    },
    {
        type: 'folder',
        name: "CS 589: Machine Learning",
        files: [
            { type: 'file', name: 'knn.py' },
            { type: 'file', name: 'decisionTree.py' },
            { type: 'file', name: 'naiveBayes.py' },
            { type: 'file', name: 'randomForest.py' },
            { type: 'file', name: 'neutralNetwork.py' }
        ]
    }
];

const Summer2023Project: FileStructure[] = [
    {
        type: 'folder',
        name: 'CS 490STA: Scalable Web Systems',
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
                    { type: 'file', name: 'testWithNodeTestRunner.js' },
                    { type: 'file', name: 'logginWinston.js' },
                    { type: 'file', name: 'testWithNodeTestRunner.sh' },
                    { type: 'file', name: 'rateLimiting.js' },
                ]
            },
            { type: 'folder', name: 'Homework' },
        ]
    },
]

export const schoolProjects: FileStructure[][] = [
    Fall2021Project,
    Spring2022Project,
    Summer2022Project,
    Fall2022Project,
    Spring2023Project,
    Summer2023Project
];