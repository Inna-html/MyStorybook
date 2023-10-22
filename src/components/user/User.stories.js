import { User } from './User';

export default {
    title: 'Example/User',
    component: User,
    parameters: {
      // More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  };

export const MyUser = {
    args: {
        userId: 'id'
    },
};