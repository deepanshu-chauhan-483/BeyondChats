# BeyondChats

BeyondChats is a web application that facilitates the process of setting up and integrating a chatbot for your organization. The application guides users through several steps, including registration, organization setup, website scraping status, and chatbot integration, all while displaying a progress bar.

## Link  
https://beyond-chats-lemon-eight.vercel.app/

## Features

- **User Registration**: Users can sign up for an account by entering their email, password, and a verification code.
- **Organization Setup**: After registration, users set up their organization with information such as the company name, website URL, and description.
- **Scraping Status**: Users can monitor the status of the website scraping process and ensure all data is retrieved correctly.
- **Chatbot Integration**: The chatbot is integrated into the platform for a seamless experience, allowing users to initiate and interact with the chatbot.
- **Integration Result**: After integrating the chatbot, users are shown the result of the integration.
- **Progress Bar**: A progress bar visually represents the completion of each step as users move through the process.

## Project Structure

### Components

- **App.js**: The main application file that sets up the routes and navigation.
- **Registration.js**: Handles user registration, including email, password, and verification code fields.
- **OrganizationSetup.js**: Provides the interface for setting up the organization (company name, website URL, description).
- **WebsiteScrapingStatus.js**: Displays the current status of the website scraping process.
- **ChatbotIntegration.js**: Allows users to integrate a chatbot into their system.
- **IntegrationResult.js**: Shows the results of the chatbot integration process (success or failure).
- **ProgressBar.js**: A component that visually represents the progress as users move through the steps of the process.

### Steps for Navigation

The application consists of the following steps, which are mapped to routes:

1. **Registration** - `/`
2. **Organization Setup** - `/organization`
3. **Scraping Status** - `/scraping-status`
4. **Chatbot Integration** - `/integration`
5. **Integration Result** - `/integration-result`

### Functionality

- **Progress Wrapper**: A `ProgressWrapper` component calculates and displays the progress based on the user's current location in the application flow, showing how far along they are in the setup and integration process.
- **Google Sign-In Button**: A button that allows users to sign up using their Google account, providing an easy login alternative.
- **Password Visibility Toggle**: Users can toggle between showing and hiding their password during registration for better usability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Manages routing and navigation within the app, allowing for a seamless experience across pages.
- **Tailwind CSS**: A utility-first CSS framework used for styling the components and ensuring a responsive design.


