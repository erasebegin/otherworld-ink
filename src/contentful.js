import * as contentful from "contentful";

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID_2,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_2
})