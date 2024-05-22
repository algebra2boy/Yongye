<script lang="ts">
	import { page } from '$app/stores';
	import { Github, LinkedIn, Gmail, Hamburger } from '$lib/components/icons';
</script>

<div class="flex justify-between items-center navbar pt-2">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="lg:hidden mr-1.5 hover:text-bl-900">
				<Hamburger />
			</div>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52">
				<li><a href="/projects" class:landing={$page.url.pathname.endsWith('/projects')}>Projects</a></li>
				<li><a href="/courses" class:landing={$page.url.pathname.endsWith('/courses')}>Courses</a></li>
			</ul>
		</div>
		<div class="pt-1 pb-2">
			<a class="text-2xl font-light font-serif" href="/">Yongye Tan</a>
		</div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a href="/projects" class:landing={$page.url.pathname.endsWith('/projects')}>Projects</a>
			</li>
			<li>
				<a href="/courses" class:landing={$page.url.pathname.endsWith('/courses')}>Courses</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="flex flex-wrap gap-1">
			<div class="relative group">
				<a href="mailto:yongyetan1209@gmail.com" class="relative z-10">
					<Gmail />
				</a>
				<div class="absolute top-1 -right-1 group-hover:block pt-6 pr-1 hidden">
					<div class="bg-gray-200 px-2 py-0.5">
						<p class="text-sm font-medium">yongyetan1209@gmail.com</p>
					</div>
				</div>
			</div>

			<div class="relative group">
				<a href="https://github.com/algebra2boy" class="relative z-10">
					<Github />
				</a>
				<div class="absolute top-1 -right-1 group-hover:block pt-6 pr-1 hidden">
					<div class="bg-gray-200 px-2 py-0.5">
						<p class="text-sm font-medium">https://github.com/algebra2boy</p>
					</div>
				</div>
			</div>

			<div class="relative group">
				<a href="https://linkedin.com/in/yytan04" class="relative z-10">
					<LinkedIn />
				</a>
				<div class="absolute top-1 -right-1 group-hover:block pt-6 pr-1 hidden">
					<div class="bg-gray-200 px-2 py-0.5">
						<p class="text-sm font-medium">https://linkedin.com/in/yytan04</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.landing {
		@apply text-blue-500;
	}
</style>
