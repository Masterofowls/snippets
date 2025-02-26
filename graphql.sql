-- Advanced GraphQL Cheatsheet with JavaScript

-- Querying with Arguments
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts(limit: 5) {
        title
        content
      }
    }
  }
`;

-- Mutations with Arguments
const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER_INPUT = `
input UpdateUserInput {
  name: String
  email: String
  age: Int
  bio: String
}
`;

-- Using Enums
const USER_ROLE = `
enum UserRole {
  ADMIN
  USER
  GUEST
  MODERATOR
}
`;

const USER_TYPE = `
type User {
  id: ID!
  name: String!
  email: String!
  role: UserRole!
  createdAt: DateTime!
  updatedAt: DateTime!
}
`;

-- Pagination with Cursor
const USERS_QUERY = `
type Query {
  users(first: Int, after: String): UserConnection
}

type UserConnection {
  edges: [UserEdge]
  pageInfo: PageInfo
}

type UserEdge {
  node: User
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}
`;

-- Subscriptions with Filters
const ON_USER_CREATED = `
subscription OnUserCreated($role: UserRole) {
  userCreated(role: $role) {
    id
    name
    email
    role
  }
}
`;

-- Using Directives for Conditional Fields
const CONDITIONAL_FIELDS_QUERY = `
query GetUsers($showPhone: Boolean!) {
  users {
    id
    name
    email
    phone @include(if: $showPhone)
    address @skip(if: $hideAddress)
  }
}
`;

-- Batch Queries with DataLoader
const DataLoader = require('dataloader');

const userLoader = new DataLoader(async (keys) => {
  const users = await getUsersByIds(keys);
  return keys.map(key => users.find(user => user.id === key));
});

const USER_QUERY = `
query {
  user(id: "1") {
    id
    name
    email
    posts {
      title
      content
      comments {
        text
        createdAt
      }
    }
  }
}
`;

-- Schema with Custom Scalars
const CUSTOM_SCALAR = `
scalar DateTime

type Post {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}
`;

-- Advanced Error Handling
const ERROR_HANDLING = `
const handleError = (error) => {
  if (error.networkError) {
    console.error('Network error:', error.networkError);
  } else if (error.graphQLErrors) {
    error.graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
};
`;

// End Generation Here



