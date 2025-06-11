# OpenAI Chat Interface

A simple command-line chat interface using OpenAI's GPT-3.5-turbo model.

## Setup

1. Clone the repository:
cd first-openai-api-call


2. Install dependencies:
npm install

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

## Usage

Run in terminal:
```
node first_call.js
```

- Enter your prompt when asked
- The AI will respond with a professional answer
- Token usage statistics will be displayed after each response

## Features

- Simple command-line interface
- Professional responses
- Token usage tracking
- Error handling
- Environment variable support for API key

## Requirements

- Node.js
- OpenAI API key
- npm (Node Package Manager)

## Dependencies

- openai
- dotenv 