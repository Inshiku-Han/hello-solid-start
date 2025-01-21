// @refresh reload
import { StartClient, mount } from '@solidjs/start/client';
import type { MountableElement } from 'solid-js/web';

mount(
	() => <StartClient />,
	document.getElementById('app') as MountableElement,
);
