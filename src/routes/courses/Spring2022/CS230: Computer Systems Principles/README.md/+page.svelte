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
    `;
</script>

<svelte:head>
	<title>Computer Systems Principles</title>
	<meta name="description" content="Computer Systems Principles" />
</svelte:head>

<CourseHeader>CS230: Computer Systems Principles</CourseHeader>

<CourseDescription>
	Course Description: Large-scale software systems like Google - deployed over a world-wide network
	of hundreds of thousands of computers - have become a part of our lives. These are systems success
	stories - they are reliable, available ("up" nearly all the time), handle an unbelievable amount
	of load from users around the world, yet provide virtually instantaneous results. On the other
	hand, many computer systems don't perform nearly as well as Google - hence the now-cliche "the
	system is down." In this class, we study the scientific principles behind the construction of
	high-performance, scalable systems. The course begins with a discussion of data representation,
	and moves up the stack from there to the features of modern architectures, assembly languages, and
	operating system services such as I/O, process, and synchronization.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Spring 2022. This has to be one of the most useful course I have taken to
		understand how to manipulate low level stuff. I learned about how to read assembly code, how to
		use gdb to debug, pointer with linkedlist, multhreading, and networking. I encountered a lot of
		diffculty with pointers for the first project, which is
		<a href="/project/personal/Clue" class="underline">Clue</a>, a room escape game. Imagine you
		don't have any experience with pointers, and you have to program a maze game with 36 pointers. I
		was so lost at the beginning, but I managed to finish the project with my friends' (Jeff and
		Adam) help.
	</p>

	<p>
		The amount of Linux commands and Kernel knowledge that I gained from this course is invaluable.
		I wouldn't able to excel in CS 377 and CS 426 without this course. Huge shout out to Professor
		Meng-Chieh Chiu and Professor Tim Richards for teaching this course.
	</p>
</CourseReflection>

<CourseDemonstration name="Clue" />
<CourseCode language="c" code={project1} />

<CourseNavigation
	prevLink="Spring2022/CS198C: C Programming Language"
	nextLink="Summer2022/CS345: Data Management"
/>
