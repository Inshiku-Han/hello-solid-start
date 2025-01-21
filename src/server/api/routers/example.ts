import { z } from 'zod';
import { createTrpcRouter, publicProcedure } from '../utils';

export const exampleRouter = createTrpcRouter({
	hello: publicProcedure.input(z.string()).query(({ input }) => {
		return `Hello ${input}!`;
	}),
});
