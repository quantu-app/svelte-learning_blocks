# Learning Blocks

This project has the job of rendering and displaying learning blocks, the fundamental units of QuantU's learning system.

A learning block is composed, broadly speaking, of four components. First, there is the **Visual Display Prompt** which can contain text, images, or interactive media, but has the purpose of teaching the learner about some topic and then prompting the user to answer some type of question. The second component is the **User Input** where the user can enter their response. In typical quiz systems this might be a multiple choice selection, a short text input, or a mathematical equation prompt. The third component is the **Explanation** which provides the user with a canonical answer or solution to the proposed question in the display prompt. The fourth and final component is the **Feedback** component which provides detailed feedback on the user's specific answer. In a math input question for example it could show the user how they could fix a single step of their derivative to arrive at the correct response. 

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```