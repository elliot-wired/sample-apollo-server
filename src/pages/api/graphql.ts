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

const resolvers = {
  Query: {
    items: async () => {
      const { data } = await supabase.from('sample').select();
      return data
    },
    item: async (_:any, args: { id: number }) => {
      const { data } = await supabase.from('sample').select().eq('id', args.id).single();

      return data
    }
  },
  Mutation: {
    add: async (_:any, args: Item) => {
      const payload = {
        name: args.name || '',
        email: args.email || '',
        count: args.count || 0,
        active: args.active || false,
        image: args.image || ''
      }

      const { data } = await supabase.from('sample').insert(payload).select().single();

      return data;
    },
    update: async (_:any, args: Item) => {
      const payload = {
        name: args.name,
        email: args.email,
        count: args.count,
        active: args.active
      }
      const { data } = await supabase.from('sample').update(payload).eq('id', args.id).select().single();

      return data;
    }
  }
};

const typeDefs = gql`
  type Query {
    items: [Item]
    item(id: Int!): Item
  }
  type Mutation {
    add(
      name: String
      email: String
      active: Boolean
      image: String
      count: Int
    ): Item
    update(
      id: Int!
      name: String
      email: String
      active: Boolean
      image: String
      count: Int
    ): Item
  }
  type Item {
    id: Int!
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
