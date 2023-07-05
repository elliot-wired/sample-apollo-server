import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { createClient } from '@supabase/supabase-js';
import allowCors from "../../lib/cors";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

type Item = {
  id: number;
  name?: string;
  email?: string;
  count?: number;
  active?: boolean;
  image?: string;
}

type ItemPayload = {
  name?: string;
  email?: string;
  count?: number;
  active?: boolean;
  image?: string;
}

const resolvers = {
  Query: {
    items: async (_: any, args: { limit?: number }) => {
      const query = supabase.from('sample').select().order('id', { ascending: false })

      if (args.limit) {
        query.limit(args.limit)
      }

      const { data } = await query;
      return { item: data, date: new Date().toISOString() }
    },
    item: async (_:any, args: { id: number }) => {
      const { data } = await supabase.from('sample').select().eq('id', args.id).single();

      return { item: data, date: new Date().toISOString() }
    }
  },
  Mutation: {
    add: async (_:any, args: { payload: ItemPayload }) => {
      const payload = {
        name: args.payload.name || '',
        email: args.payload.email || '',
        count: args.payload.count || 0,
        active: args.payload.active || false,
        image: args.payload.image || ''
      }

      const { data } = await supabase.from('sample').insert(payload).select().single();

      return { item: data, date: new Date().toISOString() }
    },
    update: async (_:any, args: { id: number, payload: ItemPayload }) => {
      const payload = {
        name: args.payload.name,
        email: args.payload.email,
        count: args.payload.count,
        image: args.payload.image,
        active: args.payload.active
      }
      const { data } = await supabase.from('sample').update(payload).eq('id', args.id).select().single();

      return { item: data, date: new Date().toISOString() }
    }
  }
};

const typeDefs = gql`
  type Query {
    items(limit: Int): [Response]
    item(id: Int!): Response
  }
  type Mutation {
    add(
        payload: ItemPayload
    ): Response
    update(
      id: Int!
      payload: ItemPayload
    ): Response
  }
  type Response {
      item: Item,
      date: String
  }
  type Item {
    id: Int!
    name: String
    email: String
    active: Boolean
    image: String
    count: Int
  }
  input ItemPayload {
    name: String
    email: String
    active: Boolean
    image: String
    count: Int
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});


export default allowCors(startServerAndCreateNextHandler(server))
