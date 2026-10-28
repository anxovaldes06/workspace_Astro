import { defineAction } from "astro:actions";
import { z } from "zod";

export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string(),
        }),
        handler: async (input) => {
            console.log("Email guardado correctamente");
            return {
                success: true,
                message: "Te has suscrito OK",
            };
        },
    }),
};