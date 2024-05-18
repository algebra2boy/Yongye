<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

    let project1 = `
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#ifndef ROOM_H
#define ROOM_H
#define MAX_CHARACTER 6

struct Room{
    char * name;
    struct Room *North;
    struct Room *South;
    struct Room *East;
    struct Room *West;
    struct item *itemlist;         
    char *character[MAX_CHARACTER];
};

struct Room **createBoard();

struct Room **connectRoom(struct Room **board);

struct item *get_item_array();

struct item *get_all_item();

struct Room *randomizeLocation(struct Room *room_1D, int size);

int randomNumber(int size);

void print_character(struct Room **board);

void print_characterForOneRoom(struct Room *r);

void print_room(struct Room **board);

void print_items(struct Room **board);

void showMessage(struct Room *current_room);

char* print_single_room(struct Room *r,char* direction);

int checkRoomExist(struct Room *r);

int checkDirectionValid(char* direction);
#endif
    `
</script>

<svelte:head>
	<title>Computer Systems Principles</title>
	<meta name="description" content="Computer Systems Principles" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS230: Computer Systems Principles</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: 	
        Large-scale software systems like Google - deployed over a world-wide network of hundreds of thousands of computers - have become a part of our lives. These are systems success stories - they are reliable, available ("up" nearly all the time), handle an unbelievable amount of load from users around the world, yet provide virtually instantaneous results. On the other hand, many computer systems don't perform nearly as well as Google - hence the now-cliche "the system is down." In this class, we study the scientific principles behind the construction of high-performance, scalable systems. The course begins with a discussion of data representation, and moves up the stack from there to the features of modern architectures, assembly languages, and operating system services such as I/O, process, and synchronization.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

    <h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Spring 2022. This has to be one of the most useful course I have taken to understand how to manipulate 
        low level stuff. I learned about how to read assembly code, how to use gdb to debug, pointer with linkedlist, multhreading,
        and networking. I encountered a lot of diffculty with pointers for the first project, which is
        <a href="/project/personal/Clue" class="underline">Clue</a>, a room escape game. Imagine you don't have any experience with pointers,
        and you have to program a maze game with 36 pointers. I was so lost at the beginning, but I managed to finish the project with my friends' (Jeff and Adam) help.
	</p>

    <p class="mt-1 text-gray-700 text-sm font-mono">
		The amount of Linux commands and Kernel knowledge that I gained from this course is invaluable. I wouldn't able to excel in CS 377 and CS 426 without this course.
        Huge shout out to Professor Meng-Chieh Chiu and Professor Tim Richards for teaching this course.
	</p>

    <h1 class="text-xl font-normal font-mono mt-1">Code demonstration for Clue</h1>
    <Code language="c" code={project1} />
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
    <button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2022/CS198C: C Programming Language/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Summer2022/CS345: Data Management/README.md')}
	>
		Next
	</button>
</div>
