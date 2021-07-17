<h1 align="center">A simplified Code Editor built with ReactJS</h1>

## What is this

It is a basic code editor that contains html, css and javascript files available to code. It has a editor window where you can code live and a live view window which hot reloads the code that you are typing in the editor.

## Features

- HTML, CSS, JS capability
- Editor with a syntax highlighting and linting
- Live view window that renders real time
- Export option to save your code for later usage
- An endpoint to load the previously exported code

## Libraries Used
- React
- React Router
- CodeMirror
- Axios
- Github Gist API for saving the exported files.

## Setting up development environment

- Install [NodeJS](https://nodejs.org/en/) if you don't have it already and check if npm is installed by running npm command in your terminal.
- `git clone https://github.com/Deekshith-Reddy/dyte-editorio.git`
- Create an empty `.env` file in root and add `REACT_APP_GITHUB_TOKEN =` with the personal access token from github developer settings with access given to gist (here I left my api in the env file I will remove the access to the api as soon as the results are out.)
- Make sure you are in the directory which contains `package.json` file and run `npm run install`
- After the libraries are installed use `npm start` command to start the development server to work on the editor.
- If you just want to use the editor but not the export and loading functionalities you can visit [https://deekshith-reddy.github.io/dyte-editorio/](https://deekshith-reddy.github.io/dyte-editorio/).

## What's missing ?
- Due to the react routing functionality the exporting and loading functionalities of the editor are not working using github pages.
- There are certain other features like refreshing the editor window and changing theme will be added soon.

## Design Links
- Wireframe : [https://wireframe.cc/qT2flj](https://wireframe.cc/qT2flj)
- Figma     : [https://www.figma.com/file/3c0ap3CC5x9mLPJ48iho8k/Untitled?node-id=3%3A2](https://www.figma.com/file/3c0ap3CC5x9mLPJ48iho8k/Untitled?node-id=3%3A2)


