import { Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import Counter from '~/components/counter';
import { api } from '~/lib/api';

export default function Home() {
	const hello = createAsync(() => api.example.hello.query('world'));
	return (
		<main>
			<Title>Hello World</Title>
			<h1 class="text-lg">Hello world!</h1>
			<Counter />
			<p>
				Visit
				<a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
					start.solidjs.com
				</a>
				to learn how to build SolidStart apps.
			</p>
			{hello()}
		</main>
	);
}
