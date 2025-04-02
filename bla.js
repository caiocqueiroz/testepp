const config = {
  // These are placeholder fields - never put real credentials in code
  apiKey: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZha2VVc2VyIiwiaWF0IjoxNjE2MjM5MDIyfQ.s5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0',
  databaseUrl: 'postgres://admin12:D1g1perfil$d@localhost:5432/proddb',
  awsAccessKey: '',
  awsSecretKey: 'aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcd',
  jwtSecret: 'f4k3JWTs3cr3tK3y9876543210abcdef'
};

const sampleAPICall = async () => {
  try {
    // Example usage - DO NOT USE REAL CREDENTIALS
    const response = await fetch('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
      }
    });
    return response.json();
  } catch (error) {
    console.error('API call failed:', error);
  }
};

// Database connection example - using placeholder credentials
const dbConfig = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'myapp',
  port: 5432
};

