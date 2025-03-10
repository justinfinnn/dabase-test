# Job Board Application

🚀 A full-stack job board application built with **Next.js**, **AWS Lambda**, and **DynamoDB**. Users can view job listings, post new jobs, and delete their entries.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Deployment](#deployment)
  - [AWS Lambda Backend](#aws-lambda-backend)
  - [Vercel Frontend](#vercel-frontend)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, AWS Lambda
- **Database**: AWS DynamoDB
- **Infrastructure as Code**: Terraform
- **Deployment**: Vercel (Frontend), AWS (Backend)

## Features

- View a list of job postings
- Add new job postings via a form
- Delete job postings
- Responsive design with Tailwind CSS
- Serverless architecture using AWS Lambda

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [AWS CLI](https://aws.amazon.com/cli/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/job-board-project.git

   ```

2. Navigate into the frontend folder:

   `cd job-board-frontend`

3. Install dependencies:
   `yarn install`

4. Navigate into the backend folder:
   `cd ../backend`

5. Install backend dependencies:
   ` yarn install`
6. Navigate into the infra folder (optional setup):
   `cd ../infra`

### Running the Project

#### The Frontend

1.  Navigate to the frontend directory:

`cd job-board-frontend`

2. Start the development server:

   `yarn dev`

Your app will be running on [http://localhost:3000](http://localhost:3000) .

#### The Backend

1.  Navigate to the backend directory:

    `cd job-board-backend`

- Start the backend server:

  `npx ts-node index.ts`

Your backend will be running on [http://localhost:5000](http://localhost:5000) .

## Deployment

### AWS Lambda Backend

To deploy the backend, ensure you have the Serverless Framework and AWS CLI set up. Then:

1.  Deploy the backend:
    `serverless deploy`

### Vercel Frontend

1.  Navigate to the frontend directory:

    `cd job-board-frontend`

2.  Deploy to Vercel:

    `vercel`

## How It Works

- **Frontend**: Built using Next.js which interacts with the AWS Lambda backend via API calls. Users can submit new job postings and view listings.
- **Backend**: Hosted on AWS Lambda using Express. It handles all RESTful API requests to create, read, and delete jobs, storing data in AWS DynamoDB.
- **Infrastructure**: Managed with Terraform, ensuring resources such as DynamoDB tables and S3 buckets are consistently deployed.

## Contributing

Feel free to submit a pull request or raise an issue if you’d like to contribute.
