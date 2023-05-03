// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <div className='blogs-container'>
                    <h2 className='title-sec'>Blog</h2>
                    <hr />
                    <div className='qa-container'>
                        <div className='Q-Container'>
                            <div className='Q-span' >Q.</div>
                            <p className='Q'>  Tell us the differences between uncontrolled and controlled components.</p>
                        </div>
                        <div className='A-Container'>
                            <div className='A-span'>A.</div>
                            <p className='A'>Controlled components are managed and controlled by a central framework or system.The frameworks rules and APIs dictate the state and behavior of the objects within its scope.Examples include React and Angular components. <br /> <br />

                                On the other hand, uncontrolled components are components that are not managed by the central framework.It is used and modified by the consumer. Plain HTML elements and custom-built components are the examples of the uncontrolled components.

                            </p>
                        </div>
                    </div>

                    <div className='qa-container'>
                        <div className='Q-Container'>
                            <div className='Q-span' >Q.</div>
                            <p className='Q'>How to validate React props using PropTypes.</p>
                        </div>
                        <div className='A-Container'>
                            <div className='A-span'>A.</div>
                            <p className='A'> To validate React props using PropTypes, it should be needed to flow some steps. <br /> <br />

                                1. Installing the PropTypes library by running npm install prop-types in the project directory. <br /> <br />

                                2. Import the PropTypes library at the top of the component file using `import PropTypes from &apos;prop-types&apos;`; <br /> <br />

                                3. Then, define the PropTypes for the component by adding a static propTypes property to the component class, with an object whose keys are the names of the props and values are the corresponding PropTypes. <br /> <br />

                                4. Finally, use the component with the defined props, and PropTypes will automatically validate them, throwing a warning in the console if they don&apos;t match the specified types.</p>
                        </div>
                    </div>

                    <div className='qa-container'>
                        <div className='Q-Container'>
                            <div className='Q-span' >Q.</div>
                            <p className='Q'>Tell us the difference between nodejs and express js.</p>
                        </div>
                        <div className='A-Container'>
                            <div className='A-span'>A.</div>
                            <p className='A'>Node.js is a server-side JavaScript runtime built on the V8 engine from Chrome, enabling developers to run JavaScript code outside of the browser. On the other hand, Express.js is a framework for building web applications and APIs on top of Node.js, providing a range of tools and features. Although Node.js provides the runtime environment, Express.js is a higher-level abstraction that simplifies the process of building web applications and APIs. In summary, Node.js serves as the foundation, while Express.js is a framework that leverages the capabilities of Node.js to facilitate web development.</p>
                        </div>
                    </div>

                    <div className='qa-container'>
                        <div className='Q-Container'>
                            <div className='Q-span' >Q.</div>
                            <p className='Q'>What is a custom hook, and why will you create a custom hook?</p>
                        </div>
                        <div className='A-Container'>
                            <div className='A-span'>A.</div>
                            <p className='A'>A custom hook refers to a JavaScript function that employs pre-existing hooks to offer reusable stateful logic. These hooks enable developers to extract commonly used logic from various components and share it, streamlining code maintenance and reducing redundancy.<br /> <br />

                                There are several reasons why you might want to create a custom hook in React:<br /> <br />

                                1. Reusability: Custom hook can help extract that logic into a single place and reuse it across other application.<br /> <br />

                                2. Abstraction: Custom hooks can abstract away implementation details and provide a simpler interface to components. This can make the code more readable and easier to understand.<br /> <br />

                                3. Sharing code between components: Custom hooks allow to share complex code, between components without having to pass props down the component tree.<br /> <br />

                                Overall, creating a custom hook can help the developers write cleaner, more modular, and reusable code, which can save time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;