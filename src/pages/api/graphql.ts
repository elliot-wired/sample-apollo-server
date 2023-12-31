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
    items: async (_: any, args: { limit?: number, sort?: 'DEFAULT' | 'COUNT', page?: number }) => {
      const query = supabase.from('sample').select('*', { count: 'exact' })

      if (args.sort === 'COUNT') {
        query.order('count')
      } else {
        query.order('id', { ascending: false })
      }

      const page = args.page || 0;
      const limit = args.limit || 0;

      const from = page * limit;
      const to = (page + 1) * limit - 1;

      if (from || to) {
        query.range(from, to);
      }

      const { data, count } = await query;

      return { items: data, date: new Date().toISOString(), count }
    },
    item: async (_:any, args: { id: number }) => {
      const { data } = await supabase.from('sample').select().eq('id', args.id).single();

      return { item: data, date: new Date().toISOString() }
    },
    delayedSuccess: async (_: any, args: { waitMs: number }) => {
      const ms = args.waitMs || 1000;

      await new Promise(res => {
        setTimeout(() => res(true), ms)
      })

      const { data } = await supabase.from('sample').select().eq('id', 1).single();
      const active = data.active

      return `Success after ${ms}ms + active is ${active}`
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
    },
    setActive: async (_: any, args: { active: boolean }) => {
      const { data } = await supabase.from('sample').update({ active: args.active }).eq('id', 1).select().single();

      return { item: data, date: new Date().toISOString() }
    },
    login: async (_: any, args: { id: string, password: string }) => {
      return { token: 'LoginToken', expires: 24 * 60 * 60 * 1000 }
    },
    delete: async (_: any, args: { id: string }) => {
      await supabase.from('sample').delete().eq('id', args.id);

      return { success: true }
    }
  }
};

const typeDefs = gql`
  type Query {
    items(limit: Int, page: Int, sort: SORT_METHOD ): ItemsResponse
    item(id: Int!): Response
    delayedSuccess(waitMs: Int): String
  }
  type Mutation {
    add(
        payload: ItemPayload
    ): Response
    update(
      id: Int!
      payload: ItemPayload
    ): Response
    setActive(active: Boolean): Response
    login(user: Login): Token
    delete(id: Int!): DeleteResponse
  }
  type ItemsResponse {
      items: [Item]
      date: String
      count: Int
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
  input Login {
    id: String
    password: String
  }
  type Token {
    token: String
    expires: Int
  }
  type DeleteResponse {
    success: Boolean
  }
  enum SORT_METHOD {
      DEFUALT,
      COUNT
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});


export default allowCors(startServerAndCreateNextHandler(server, {
  context: async (req, res) => {

    console.log(req.headers)
    return {req, res}
  }
}))
