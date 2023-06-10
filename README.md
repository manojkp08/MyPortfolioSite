# MyPortfolioSite
This branch contains the optimized build of this react app for deployment on github pages.

# Deploying a React App on GitHub Pages
This guide will walk you through the steps required to deploy your React app on GitHub Pages.

## Prerequisites
Before getting started, make sure you have the following:
- Node.js and npm installed on your machine
- A GitHub account

## Steps
1. **Create a new repository**

   Create a new repository on GitHub to host your React app. You can name it whatever you like.

2. **Clone the repository**
Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/your-username/your-repository.git
   ```

3. **Set up your React app**
Navigate to your project's root directory and install the necessary dependencies by running the following command:
   ```
   npm install
   ```   
4. **Configure deployment settings**
Open the `package.json` file in your project and add a `"homepage"` field. Set its value to `https://your-username.github.io/your-repository`, replacing `your-username` and `your-repository` with your GitHub username and repository name.

5. **Build the app**
Build your React app by running the following command:
   ```
   npm run build
   ```
This command will create a `build` directory in your project.

6. **Deploy to GitHub Pages**
Install the `gh-pages` package as a dev dependency by running the following command:
   ```
   npm install gh-pages --save-dev
   ```
Once the installation is complete, open the `package.json` file again and add the following fields at the top level:
   ```
   "homepage": "https://your-username.github.io/your-repository",
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
    }
   ```
7. **Publish the app**
Finally, deploy your app to GitHub Pages by running the following command:
   ```
   npm run deploy
   ```
After the deployment is complete, your app will be available at `https://your-username.github.io/your-repository`.

## Conclusion
Congratulations! You have successfully deployed your React app on GitHub Pages. You can now share the link with others and showcase your work.
For more information and troubleshooting, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages).
