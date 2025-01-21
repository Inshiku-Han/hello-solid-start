import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import type { AppRouter } from '~/server/api/root';

const PORT = process.env.PORT || 3000;

const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}
	return process.env.BASE_URL || `http://localhost:${PORT}`;
};

// create the client, export it
export const api = createTRPCProxyClient<AppRouter>({
	links: [
		// will print out helpful logs when using client
		loggerLink(),
		// identifies what url will handle trpc requests
		httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
	],
});
