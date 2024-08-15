# Request Header Parser Microservice

This is a simple API project that parses the request header and returns the IP address, preferred languages and system information of the client.

## Live project

This project was deployed on Vercel [here](https://request-header-parser-ms.vercel.app/).

## Installing locally

### Requirements

- [Vercel CLI](https://vercel.com/docs/cli)
- [Node.js](https://nodejs.org/)

### Step-by-step

1.  **Clone the repository:**
    
        > git clone https://github.com/jvpdls/request-header-parser-ms.git
        > cd request-header-parser-ms
    
3.  **Install dependencies:**
    
        > npm i

3. **Log in to Vercel:**

        > vercel login 

4. **Run the project:**

        > vercel dev
   
7. **Visit *http://localhost:3000* to preview it**

## Usage

To get the IP address, preferred languages and system information of the client, make a request to `/api/whoami`.

## Contributing

Feel free to contribute to this project. Any contributions you make are **greatly appreciated**.
