/* eslint-disable consistent-return */
/* eslint-disable max-len */
import {
  TOGGLE_PLUS_BUTTON
} from './actions';

const initialState = {
    profile: {
      name: 'BENJAMIN THOMSON',
      title: 'web & ux designer',
      description: 'Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque latu dantium, totam rem aperiam, eaque ipsa quae ab illo tempor dignissim at.',
      dob: '24 JAN 1989',
      phone: '012-345-6789',
      email: 'sility@example.com',
      address: '123 SILITY, SOUTH CORNER STREET, MELBORNE, AUSTRALIA',
      website: 'HTTP://WWW.EXAMPLE.COM'
    },
    skill: {
      percent: {
        wordpress: 85,
        photoshop: 99,
        html: 75,
        javascript: 67
      }
    }
  },

  resume = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_PLUS_BUTTON:
      return {
        ...state,
        skill: {
          percent: {
            wordpress: 23,
            photoshop: 25,
            html: 89,
            javascript: 34
          }
        }
      };
    default:
      return state;
    }
  };

export default resume;