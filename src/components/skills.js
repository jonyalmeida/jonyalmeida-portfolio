import postgresLogo from "../public/images/png-transparent-postgresql-object-relational-database-oracle-database-freebsd-icon-text-logo-head.png";
import mongodbLogo from "../public/images/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png";
import sequelizeLogo from "../public/images/sequelize-3-1175091.png";
import sqlalchemyLogo from "../public/images/sqlalchemy-q5uAkmy7_400x400.png";
import relationaldbLogo from "../public/images/relational-database-157-512.png";
import javascriptLogo from "../public/images/javascript-icon-png-23.png";
import pythonLogo from "../public/images/alternative-python-icons-and-folder-icon-python-3-png-clipart.jpg";
import djangoLogo from "../public/images/python-django.png";
import expressLogo from "../public/images/express-js-node-js-javascript-session-web-application-png-favpng-nC0AgMs2TUUtFy3XMsP81vXd4.jpg";
import nodeLogo from "../public/images/1200px-Node.js_logo_2015.png";
import flaskLogo from "../public/images/flask-python.png";
import restfulLogo from "../public/images/rest-api-icon-8.png";
import oauthLogo from "../public/images/1200px-Oauth_logo.svg.png";
import reactLogo from "../public/images/reactjs_javascript_library_atom_atomic_react-512.png";
import reduxLogo from "../public/images/logo-redux.png";
import html5logo from "../public/images/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png";
import cssLogo from "../public/images/social_style_2_css3-512.png";
import seoLogo from "../public/images/seo-icon-png-13.png";
import dataLogo from "../public/images/data-icon-24.jpg";
import scriptLogo from "../public/images/script.png";
import datastructureLogo from "../public/images/data-structure996092-200.png";

export const skills = {
    database: {
        skillName: "Database design & ORM",
        skillItems: [
            {
                name: "PostgresSQL",
                proficiencyLevel: 8,
                logoURL: postgresLogo,
            },
            { name: "MongoDB", proficiencyLevel: 6, logoURL: mongodbLogo },
            {
                name: "Sequelize",
                proficiencyLevel: 8,
                logoURL: sequelizeLogo,
            },
            {
                name: "SQLAlchemy",
                proficiencyLevel: 7,
                logoURL: sqlalchemyLogo,
            },
            {
                name: "Relational Model Design",
                proficiencyLevel: 6,
                logoURL: relationaldbLogo,
            },
        ],
    },
    backend: {
        skillName: "Backend",
        skillItems: [
            {
                name: "Node.js",
                proficiencyLevel: 8,
                logoURL: nodeLogo,
                other: "npm, mocha testing, helmetJS, cors, csrf, validation",
            },
            {
                name: "Express",
                logoURL: expressLogo,
                proficiencyLevel: 7,
            },
            {
                name: "Python",
                proficiencyLevel: 8,
                logoURL: pythonLogo,
                other: "pipenv, conda, unittest, pytest, pytorch",
            },
            {
                name: "Django",
                logoURL: djangoLogo,
            },
            {
                name: "Flask",
                logoURL: flaskLogo,
                proficiencyLevel: 7,
            },
            {
                name: "RESTful API",
                logoURL: restfulLogo,
                proficiencyLevel: 7,
            },
            {
                name: "Validations, CSRF, CORS, O-Auth",
                logoURL: oauthLogo,
                proficiencyLevel: 8,
            },
        ],
    },
    frontend: {
        skillName: "Frontend",
        skillItems: [
            {
                name: "Javascript ES6",
                proficiencyLevel: 8,
                logoURL: javascriptLogo,
                other: "Babel, Pug, Promises, Callbacks, async/await",
            },
            {
                name: "React Framework",
                proficiencyLevel: 7,
                logoURL: reactLogo,
                other: "Material UI, GraphQL, React Bootstrap",
            },
            {
                name: "Redux",
                proficiencyLevel: 8,
                logoURL: reduxLogo,
            },
            {
                name: "HTML5",
                proficiencyLevel: 9,
                logoURL: html5logo,
            },
            {
                name: "CSS3, Sass, jQuery",
                proficiencyLevel: 8,
                logoURL: cssLogo,
                other: "responsive design, page layout design",
            },
            {
                name: "Search Engine Optimization - SEO",
                proficiencyLevel: 9,
                logoURL: seoLogo,
                other: "Google Search Console, GA, MOZ, ScreamingFrog",
            },
        ],
    },
    other: {
        skillName: "Algorithms & Data Structures",
        skillItems: [
            {
                name: "Data parsing",
                proficiencyLevel: 6,
                logoURL: dataLogo,
            },
            {
                name: "Scripting & automation",
                proficiencyLevel: 6,
                logoURL: scriptLogo,
            },
            {
                name: "Algorithms & data manipulation.",
                proficiencyLevel: 7,
                logoURL: datastructureLogo,
            },
        ],
    },
};
