import {client} from './Apollo';
import gql from 'graphql-tag';

export const mutateForgot = email => {
  return client.mutate({
    mutation: gql`
      mutation sendPasswordResetToken($email: EmailAddress!) {
        sendPasswordResetToken(email: $email)
      }
    `,
    variables: {
      email,
    },
  });
};

export const resetPassword = (email, token, password) => {
  return client.mutate({
    mutation: gql`
      mutation resetPassword(
        $email: EmailAddress!
        $token: String!
        $password: Password!
      ) {
        resetPassword(email: $email, token: $token, password: $password) {
          user {
            id
            name
            email
          }
          accessToken
          refreshToken
        }
      }
    `,
    variables: {
      email,
      token,
      password,
    },
  });
};
