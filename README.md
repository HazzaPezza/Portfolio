# Portfolio
Website for storing all my projects - including this one. To be deployed and hosted online.

I finished my Master's Degree in Computer Science this year and I fear I've not had any time to make any projects or host them and talk about them to friends and employers. I'm comitting to getting this project up and running in some capacity by the end of the year so that I can have something to refer back to and have something to fill into the spot that says 'website here' when applying for roles or experiences going forward. I also want a place where I can host an 'Online Resume' of sorts. 

If you're reading the commits on this repository and thinking 'bloody hell why did he make that decision' just know that web development wasn't my highest graded subject. 

# Goals
## Goal 1 - Static Version (45% Complete)
The aim of goal 1 is to create a good looking front end that works as a standalone website. This version of the site will use just HTML, CSS and JavaScript and should fulfill the following criteria:

- Be dynamic so that it works at all screen sizes.
- Be conscious of accessibility needs and features.
- Have some animations / design features.

## Goal 2 - Implementation of a Datbase (PostgreSQL)
The aim of goal 2 is to have a working database that can be queried via a PostgreSQL server (possibly hosted on docker).

The database should fulfill the following tasks:

- Cover all datapoints needed for the website based on static design.
- Have normalized relationship diagram to ensure good performance / scalability.
- Be running on a server of some sort - probably a docker / postgreSQL solution.

## Goal 3 - Implementation of a web framework (NodeJS).
The aim of goal 3 is to use a web framework such as Express and NodeJS to implement a fully working version of the web application. The idea being that it can become a dynamic version of the static site so that I can use it as a portfolio site going forward. Ideally, this app should follow the following principles:

- At a minimum, web pages should be served by an express server.
- Data points in database should be accessible from API calls.
- Dynamic web pages for each project should be implementable from a template.

## Goal 4 - Implementation of an admin user / page
The aim of goal 4 is to give me the opportunity to be able to post new projects or edit projects if I find a reason to have issue with them. This should be achieveable through HTTP requests through the APIs written for the express site. Ideally, I would like to be able to:

- Create new posts
- Edit old posts
- delete old posts
- password protect the account.
