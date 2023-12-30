<div align="center">
  <a href="https://multiwoven.com?utm_source=github" target="_blank">
    <img alt="Multiwoven Logo" src="https://framerusercontent.com/images/QI2W5kDjl2HGKnAISsV9WVxcR0I.png?scale-down-to=512" width="280"/>
  </a>
</div>

<br/>

<p align="center">
   <a href="https://github.com/Multiwoven/multiwoven"><img src="https://img.shields.io/badge/Contributions-welcome-brightgreen.svg" alt="Contributions Welcome"></a>
   <a href="https://github.com/Multiwoven/multiwoven-server/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL-blue.svg" alt="AGPL License"></a>
  <a href="https://github.com/Multiwoven/multiwoven-server/actions/workflows/ci.yml"><img src="https://github.com/Multiwoven/multiwoven-server/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/Multiwoven/multiwoven-server/actions/workflows/docker-build.yml"><img src="https://github.com/Multiwoven/multiwoven-server/actions/workflows/docker-build.yml/badge.svg" alt="Docker Build"></a>
  <a href="https://codeclimate.com/repos/657bb07835753500df74ff6a/maintainability"><img src="https://api.codeclimate.com/v1/badges/5f5a5f94f8c86a1fb02b/maintainability" alt="Maintainability"></a>
  <a href="https://codeclimate.com/repos/657bb07835753500df74ff6a/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5f5a5f94f8c86a1fb02b/test_coverage" alt="Test Coverage"></a>
</p>

<h2 align="center">The open-source reverse ETL platform for data teams</h2>

<div align="center">Your ultimate solution for seamless data sync from warehouse to any application.</div>

<p align="center">
    <br />
    <a href="https://docs.multiwoven.com" rel=""><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/Multiwoven/multiwoven/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Multiwoven/multiwoven/issues/new">Request Feature</a>
    ·
  <a href="https://discord.multiwoven.com">Join Our Discord</a>
    ·
    <a href="https://roadmap.multiwoven.com">Roadmap</a>
    ·
    <a href="https://twitter.com/multiwoven">X</a>
    ·
    <a href="https://multiwoven.com">Slack Community</a>
  </p>


## Multiwoven Server
Welcome to the **Multiwoven Server**  repository! This backend component powers the Multiwoven app, providing a suite of APIs and encompassing the worker logic, business logic, and state management needed for the app's functionality.

## Technology Stack

- **Backend** : Ruby on Rails 
- **Database** : PostgreSQL, Redis 
- **Containerization** : Docker 
- **CI/CD** : GitHub Actions

## Local Deployment
### System Requirements

Before you begin, make sure your system has Docker and Docker Compose installed. These tools are crucial for creating the development environment.

### Getting Started 

1. **Clone the Repository** :
Begin by cloning the Multiwoven Server repository to your local machine:

```bash
git clone git@github.com:Multiwoven/multiwoven-server.git
``` 
2. **Navigate to the Repository Directory** :

```bash
cd multiwoven-server/
```
### Environment Variables Setup 
1. **File** :
Under the `multiwoven-server/` directory, create a `.env` file:

On Unix/Linux systems, use:

```bash
touch .env
```

Add the following environment variables to the `.env` file:

```env
DB_HOST=your_postgres_host
DB_USERNAME=your_postgres_username
DB_PASSWORD=your_postgres_password
SMTP_ADDRESS=your_smtp_host_address
SMTP_USERNAME=your_smtp_username
SMTP_PASSWORD=your_smtp_password
```

These variables will be utilized by Docker Compose during service setup.
### Docker-Based Service Setup

The use of Docker streamlines the setup process: 
1. **Build Docker Images** :
For development, build the Docker images with:

```bash
docker-compose build
``` 
2. **Start Services** :
To run the development build, start all services with:

```bash
docker-compose up
```

This command leverages the `docker-compose.yml` configurations to initiate all required services.

## Standalone Service for Production

### Dockerfile for Production Deployment

By default, `docker-compose` uses `Dockerfile.dev` for development environments. However, for deploying `multiwoven-server` as a standalone service in a production setting, you should use the `Dockerfile`. This file is optimized for production and ensures better performance and security.

#### Steps for Deployment: 

1. **Dockerfile** :
The `Dockerfile` includes all the necessary instructions to build a Docker image suitable for production. It is tailored to provide an efficient and secure runtime environment. 
2. **Building the Image** :
Build your Docker image using the `Dockerfile` with the following command:

```bash
docker build -t multiwoven-server .
``` 
3. **Running the Image** :
Once the image is built, you can run it as a standalone service:

```bash
docker run -p 3000:3000 multiwoven-server
```

Adjust the port mappings and other runtime parameters as needed for your environment.

### Resources

* [Documentation](https://docs.multiwoven.com)
* [API Reference](https://www.docs.multiwoven.com/api)

### ⚠️ Development Status: Under Active Development
This project is under active development, As we work towards stabilizing and enhancing the project, you might encounter some bugs or incomplete features. We greatly value your contributions and patience during this phase. If you find any issues not already listed, please feel free to open a new issue with detailed information. Your feedback is crucial in helping us improve. Thank you for your support!

## License

Multiwoven Server © 2023 Multiwoven Inc. Released under the [GNU Affero General Public License v3.0](https://github.com/Multiwoven/multiwoven-server/blob/main/LICENSE).