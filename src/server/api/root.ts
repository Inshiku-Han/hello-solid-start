import { exampleRouter } from './routers/example';
import { createTrpcRouter } from './utils';

export const appRouter = createTrpcRouter({
	example: exampleRouter,
});

export type AppRouter = typeof appRouter;
