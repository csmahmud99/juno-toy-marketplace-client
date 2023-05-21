import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("Blogs");
    return (
        <div>
            <div className="mx-3">
                <div className="grid md:grid-cols-2 gap-5">
                    {/* Card - 01: access token and refresh token */}
                    <div className="card bg-red-600 text-indigo-100 shadow-xl border-4 border-white mb-4 text-justify">
                        <div className="card-body items-center divide-y">
                            <h2 className="card-title text-white text-center text-3xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className="text-xl"><strong className="text-white underline text-2xl">Access Token:</strong> Access Token is used in authentication-based applications. When a user successfully authenticates, the application receives an Access Token from the server which tells the application about the user's authorization role & how limited will be the user's activity in the application.</p>

                            <p className="text-xl"><strong className="text-white underline text-2xl">Refresh Token:</strong> Refresh Token helps a user to re-validate his authorization role in the application without providing his/her credentials again & again whenever he/she visits the application.</p>

                            <p className="text-xl"><strong className="text-white underline text-2xl">Working Method of Access Token & Refresh Token:</strong> Access Tokens and Refresh Tokens are used for authentication and authorization. Access Tokens are temporary credentials that authorize access to resources. They have a short lifespan and are included in API requests. Refresh Tokens are long-lived and can obtain new Access Tokens without re-entering credentials. This combination enhances security and user experience by reducing authentication frequency.</p>

                            <p className="text-xl"><strong className="text-white underline text-2xl">Where these tokens can be stored in Client-side:</strong> Access Tokens & Refresh Tokens - both can be stored in the Local Storage or Cookies in the client side. But Cookies are safer than the Local Storage & most of the developers suggest it.</p>
                        </div>
                    </div>

                    {/* Card - 02: SQL vs, NoSQL DB */}
                    <div className="card bg-red-600 text-indigo-100 shadow-xl border-4 border-white text-justify">
                        <div className="card-body items-center text-center divide-y">
                            <h2 className="card-title text-white text-3xl text-center">Compare SQL and NoSQL databases?</h2>
                            <p className="text-xl"><strong className="text-white underline text-2xl">SQL vs, NoSQL Databases:</strong> SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems. SQL (Structured Query Language)  databases, also known as 'relational databases', use structured schemas and enforce strict consistency rules, making them suitable for complex querying and transactions. This type of database uses a structured schema to organize data into tables with predefined relationships. Examples (SQL databases): MySQL, PostgreSQL, Oracle, Microsoft SQL Server etc.

                                <br /> <br />

                                On the other hand, NoSQL (Not only SQL/Non-SQL) databases are known as 'non-relational databases', which are flexible, scalable, and prioritize performance and horizontal scaling, making them ideal for handling large volumes of unstructured data and real-time applications. These types of databases offer schema-less designs, allowing data to be stored in various formats like key-value pairs, documents, columnar, or graph-based structures. Examples (NoSQL databases): MongoDB, Cassandra, Redis, Amazon DynamoDB etc.</p>
                        </div>
                    </div>

                    {/* Card - 03: ExpressJS & NestJS */}
                    <div className="card bg-red-600 text-indigo-100 shadow-xl border-4 border-white text-justify">
                        <div className="card-body items-center divide-y">
                            <h2 className="card-title text-white text-3xl text-center">What is express js? What is Nest JS?</h2>
                            <p className="text-xl"><strong className="text-white underline text-2xl">ExpressJS:</strong> ExpressJS is a lightweight and flexible web application framework for NodeJS. It simplifies web server and API development with a minimalistic approach.</p>

                            <p className="text-xl"><strong className="text-white underline text-2xl">NestJS:</strong> NestJS is a progressive framework for scalable NodeJS applications. Built on ExpressJS, it provides additional features and architectural patterns for enterprise-grade development.</p>
                        </div>
                    </div>

                    {/* Card - 04: MongoDB aggregate */}
                    <div className="card bg-red-600 text-indigo-100 shadow-xl border-4 border-white text-justify">
                        <div className="card-body items-center divide-y">
                            <h2 className="card-title text-white text-2xl text-center">What is MongoDB aggregate and how does it work?</h2>
                            <p className="text-xl"><strong className="text-white underline text-2xl">MongoDB aggregate & its working method:</strong> MongoDB aggregate is a powerful tool for data analysis and manipulation in MongoDB. In MongoDB, the aggregate method allows us to perform advanced data processing using a pipeline of operations. Each stage in the pipeline applies a specific operation on the data, such as filtering, grouping, sorting, or calculating. The stages are executed in order, and the output of one stage serves as input for the next. The aggregate method returns a cursor with the aggregated results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;