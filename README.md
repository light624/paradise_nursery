Paradise Nursery

Paradise Nursery is an online plant shop shopping cart application built with React and Redux. This app allows users to browse through a list of plants, add items to a cart, adjust quantities, and remove items.
Features

    Landing Page with a button to navigate to the product listing page.
    Navigation Bar with links to Home, Product Listing, and Cart pages.
    Product Listing Page showcasing different plants with their images, descriptions, and prices.
    Shopping Cart where users can see the items in the cart, adjust quantities, and view the total cost.
    Checkout and Continue Shopping buttons to facilitate navigation.

Demo

You can view a live version of the app on GitHub Pages (or another deployment link if available):
Paradise Nursery Live Demo
Installation

To get a local copy of this project, follow these steps:
Prerequisites

    Ensure you have Node.js and npm installed on your computer. You can check if they're installed by running:

    bash

    node -v
    npm -v

Clone the Repository

Clone this repository to your local machine using the following command:

bash

git clone https://github.com/your-username/paradise-nursery.git

Install Dependencies

Navigate to the project directory and install the necessary packages:

bash

cd paradise-nursery
npm install

Running the Application Locally

Start the development server:

bash

npm start

The app will run on http://localhost:3000 by default.
Usage
Home Page

    Click on Shop Now to navigate to the Product Listing page.

Product Listing

    Browse through the plants, view details, and click Add to Cart to add an item to the cart.
    Products are categorized as either Aromatic or Medicinal.

Shopping Cart

    View all items in the cart with their images, descriptions, and total costs.
    Adjust quantities using the + and - buttons.
    Remove items using the Delete button.
    Use Continue Shopping to go back to the Product Listing page and Checkout to return to the Home page.

Deployment

To deploy the app to GitHub Pages:

    Install gh-pages:

    bash

npm install --save gh-pages

Update package.json: Add the following entries:

json

"homepage": "https://your-username.github.io/paradise-nursery",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}

Deploy the App:

bash

    npm run deploy

    Activate GitHub Pages:
        Go to your repository on GitHub.
        Navigate to Settings > Pages.
        Set the source to the gh-pages branch and save.

Your app should now be live at https://your-username.github.io/paradise-nursery.
Built With

    React – JavaScript library for building user interfaces
    Redux – State management library
    React Router – Declarative routing for React
    CSS – Styling for the components
    Axios – For making HTTP requests (optional, if used for data fetching)

Contributing

If you’d like to contribute:

    Fork this repository.
    Create a new branch with a descriptive name:

    bash

git checkout -b feature/YourFeature

Make your changes and commit them:

bash

git commit -m "Add YourFeature"

Push to the branch:

bash

    git push origin feature/YourFeature

    Open a Pull Request.

License

This project is open-source and available under the MIT License.
Acknowledgments

    Thanks to Trefle API for plant data.
    Inspired by various e-commerce applications.