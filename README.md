# Real State Project

A comprehensive real estate management system with multiple components including client, API, and socket services.

## Project Structure

```
├── api/          # Backend API services
├── client/       # Frontend client application
├── socket/       # Real-time socket services
└── .vscode/      # VS Code configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd real-state-project
```

2. Install dependencies for each component:

```bash
# Install API dependencies
cd api
npm install

# Install client dependencies
cd ../client
npm install

# Install socket dependencies
cd ../socket
npm install
```

### Running the Application

1. Start the API server:
```bash
cd api
npm start
```

2. Start the client application:
```bash
cd client
npm start
```

3. Start the socket service:
```bash
cd socket
npm start
```

## Features

- Real-time property updates
- User authentication and authorization
- Property search and filtering
- Interactive property maps
- Admin dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 