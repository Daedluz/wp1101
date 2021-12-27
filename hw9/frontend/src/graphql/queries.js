import { gql } from '@apollo/client';

export const CHATBOX_QUERY = gql`
    query {
        chatBox
        {
            id
            name
            messages
            {
                sender { name }
                body
            }
        }
    }
`;