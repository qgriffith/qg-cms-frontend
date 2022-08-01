# qg-cms-frontend
A fun project I am working on to learn more about  NextJs](https://nextjs.org/) to create a front-end for my personal CMS site. That will have a [backend](https://github.com/qgriffith/qg-cms-backend) created in [Strapi](https://strapi.io/) This will power [qgriffith.com](https://www.qgriffith.com)

## Commands

* `npm install` - Install all the needed node packages
* `npm run dev` - Start the development server
* `npm run build` - Build the site for production
* `npm run start` - Start the production server
* `npm run lint` -  Run lint on the code

## Project layout

    render.yml    # The deployment file.
    qg-cms-front/ # NextJS Project
        pages/    # The code that defines the routes and what is shown on each page of the site
        sytles/   # Site CSS
        public/   # Public images
        layouts/  # templates used for the pages
        componets/ # Helpers for the layouts
        lib/       # common utilities

## Deployment
This project is deployed using [render](https://render.com/)