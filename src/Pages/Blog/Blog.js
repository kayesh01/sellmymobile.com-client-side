import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-3xl ml-5"><span className='text-error font-bold'>Question 01</span>: What are the different ways to manage a state in a React application?</h2>
            <p className='text-2xl mt-3 ml-5'><span className='text-green-600'>Answer :</span>Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.</p>
            <h2 className="text-3xl mt-5 ml-5"><span className='text-error font-bold'>Question 02</span>: How does prototypical inheritance work??</h2>
            <p className='text-2xl mt-3 ml-5'><span className='text-green-600'>Answer :</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h2 className="text-3xl mt-5 ml-5"><span className='text-error font-bold'>Question 03</span>: What is a unit test? Why should we write unit tests?</h2>
            <p className='text-2xl mt-3 ml-5'><span className='text-green-600'>Answer :</span>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            <h2 className="text-3xl mt-5 ml-5"><span className='text-error font-bold'>Question 02</span>: React vs. Angular vs. Vue?</h2>
            <p className='text-2xl mt-3 ml-5 mb-5'><span className='text-green-600'>Answer :</span>Angular vs React :If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                React vs Vue: The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                Angular vs Vue: In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
        </div>
    );
};

export default Blog;