# Back-template

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This is a TypeScript backend template project. It provides a starting point for developing backend applications using Express and gRPC.

## Installation

Make sure you have Node.js and npm installed on your system before proceeding.

1. Clone this repository or download the source code.

```bash
git clone https://github.com/your-username/back-template.git cd
back-template
```

2. Install project dependencies.

```bash
pnpm install

```

# Usage

### Development

To run the application in development mode, use the following command:

```bash

npm run  dev

```

This command will use ts-node-dev to automatically restart the application when changes are made to the source code.

### Production

To compile and run the application in a production environment, use the following command:

```bash

npm start

```

Este comando compila el código TypeScript y ejecuta la aplicación en Node.js.

### Testing

You can run tests using the following command:

```bash
npm test
```

For testing in development mode with watch, use:

```bash
npm run  test:dev
```

### Linting and Code Formatting

To fix linting and code formatting issues, run:

```bash
npm run  fix:lint
```

## Dependencies

### Production Dependencies

- **Express**: Web server framework for Node.js.
- **@types/express**: TypeScript types for Express.
- **@grpc/grpc-js**: gRPC implementation in JavaScript.
- **@grpc/proto-loader**: gRPC protoloader.
- **TypeScript**: JavaScript superset with static types.
- **ts-node**: Run TypeScript directly in Node.js.
- **vitest**: Testing tool for Vite-based applications.

### DevDependencies

- **eslint**: JavaScript/TypeScript linting tool.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **prettier**: Code formatting tool.
- **ts-node-dev**: Development tool for TypeScript with auto-reloading.
