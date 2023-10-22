import { Post } from './Post';

export default {
    title: 'Example/Post',
    component: Post,
    parameters: {
      // More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

export const MyPost = {
    args: {
        userId: 'id'
    },
};
          


        //   export const Secondary = {
        //     args: {
        //       label: 'Button',
        //     },
        //   };
          
        //   export const Large = {
        //     args: {
        //       
        //       label: 'Button',
        //     },
        //   };
          
        //   export const Small = {
        //     args: {
        //       size: 'small',
        //       label: 'Button',
        //     },
        //   };
          