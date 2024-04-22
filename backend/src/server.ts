import app from './app';

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  server.on('error', (error: any) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    // If the port is already in use, try the next port
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, trying the next port...`);
      startServer(port + 1);
    } else {
      throw error;
    }
  });
};

// Start the server on the default port (3000)
startServer(3000);
