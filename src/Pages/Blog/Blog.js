import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              gadget salvation
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Blog
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What are the different ways to manage a state in a React
                application?
              </p>
              <p className="text-gray-700">
                Unit testing is a type of software testing where individual
                units or software components are tested. Its purpose is to
                validate that each unit of code performs as expected. A unit can
                be anything you want it to be — a line of code, a method, or a
                class. Generally, smaller tests are better as they give a more
                granular view of your code’s performance. Also, when you test
                very small units, your tests can run fast, like a thousand tests
                in a second fast.
                <br />
                There are two types of unit testing: Manual: As the name
                implies, unit tests are run manually to verify the correctness
                of your code. This is done before writing automated tests. Its
                drawback is that you have to manually test your
                functions/classes whenever you make changes to them. Automated:
                This is the preferred unit testing method as it can be carried
                out by simply running a script. Automated tests also make it
                easier to run tests when your application scales.
                <br />
                Why Do We Need Unit Testing? To justify any effort in business,
                there must be a positive impact on the bottom line. Here are a
                few benefits to writing unit tests: Unit tests save time and
                money. Usually, we tend to test the happy path more than the
                unhappy path. If you release such an app without thorough
                testing, you would have to keep fixing issues raised by your
                potential users. The time to fix these issues could’ve been used
                to build new features or optimize the existing system. Bear in
                mind that fixing bugs without running tests could also introduce
                new bugs into the system. Well-written unit tests act as
                documentation for your code. Any developer can quickly look at
                your tests and know the purpose of your functions. It simplifies
                the debugging process. Unit testing is an integral part of
                extreme programming. Extreme programming is basically a
                “test-everything-that-can-possibly-break” programming strategy.
                Unit tests make code reuse easier. If you want to reuse existing
                code in a new project, you can simply migrate both the code and
                tests to your new project, then run your tests to make sure you
                have the desired results. Unit testing improves code coverage. A
                debatable topic is to have 100% code coverage across your
                application. In the testing pyramid, unit tests are faster than
                integration and end-to-end. They are more assertive and return
                quick feedback. <br />
                Unit Testing Techniques There are three unit testing techniques
                to test code in isolation. Your application’s requirements would
                determine which to adopt: Black Box Testing: Testing the user
                interface, input, and output White Box Testing: Testing the
                behavior of your functions Grey Box Testing: Executing test
                suites, test cases, and risk analysis
                <br />
                Best Practices, Pros, and Cons Now that we understand unit
                testing, testing techniques, and tools, lets look at factors you
                need to consider to write effective unit tests: All test cases
                should be independent of each other. For example, one test case
                shouldnt be a prerequisite for another to run. This ensures that
                if one test case fails, others wouldnt be affected by it. If you
                run your automated unit tests and one or more tests fail, you
                should fix those before proceeding to the next phase of the
                SDLC. Always write tests around areas where you fix bugs so that
                you have the confidence of the bug not re-occurring without
                knowing. Name your tests appropriately. It could act as
                documentation and help you when debugging failing tests. Mock
                external dependencies as much as possible. Let your test
                coverage report guide you. You can easily detect uncovered lines
                of code from your test coverage report. Dont ignore tests. If a
                test fails, try debugging; check if the error originated from
                your test or the code itself. Ensure all tests pass before
                merging your pull request.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How does prototypical inheritance work?
              </p>
              <p className="text-gray-700">
                At the end of the prototype chain is Object.prototype. All
                objects inherit the properties and methods of Object. Any
                attempt to search beyond the end of the chain results in null.
                If you look for the prototype of the prototype of an array, a
                function, or a string, youll see its an object. And thats
                because in JavaScript all objects are descendants or instances
                of Object.prototype, which is an object that sets properties and
                methods to all other JavaScript data types.
                <br />
                Each type of prototype (for example array prototype) defines its
                own methods and properties, and in some cases overrides the
                Object.prototype methods and properties (that’s why arrays have
                methods that objects don’t). But under the hood and going up the
                ladder of the prototype chain, everything in JavaScript is built
                upon the Object.prototype.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is a unit test? Why should we write unit tests?
              </p>
              <p className="text-gray-700">
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test." Modern versions of unit
                testing can be found in frameworks like JUnit, or testing tools
                like TestComplete. Look a little further and you will find
                SUnit, the mother of all unit testing frameworks created by Kent
                Beck, and a reference in chapter 5 of The Art of Software
                Testing . Before that, it's mostly a mystery. I asked Jerry
                Weinberg about his experiences with unit testing -- "We did unit
                testing in 1956. As far as I knew, it was always done, as long
                as there were computers". Regardless of when and where unit
                testing began, one thing is for sure. Unit testing is here to
                stay. Let's look at some more practical aspects of unit testing.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                React vs. Angular vs. Vue?
              </p>
              <p className="text-gray-700">
                Angular, React, and Vue are the most popular frameworks for any
                project that has something to do with JavaScript, from creating
                mobile, small-scale applications to building intuitive user
                interfaces for business web apps. However, before going into the
                actual comparison, I will guide you through the essential
                aspects and history of each JS Framework.
                <br />
                <strong>Angular</strong>
                <br />
                Angular is the perfect choice for those who wish to create
                refined Single Page Applications (SPA). The framework’s two-way
                data binding, which automatically synchronizes the data between
                the database and the client and eases the development process,
                is another reason to prefer creating Angular applications.
                Angular is also a famously monolithic framework specializing in
                creating applications that combine different components into the
                same platform, rendering it an excellent choice for e-commerce
                sites. Another feature that separates Angular from its rivals is
                that it comes as a complete framework, meaning it doesn’t
                require additional libraries, unlike other frameworks, to do the
                job. While it’s free and open-source and can be used for both
                mobile and web apps, Angular works better for more complex
                applications. Therefore, Angular may be better for experienced
                developers than beginners. Google, Microsoft Office, Samsung,
                PayPal, Wix, and Forbes are among the major companies that rely
                on Angular.
                <br />
                <strong>React</strong>
                <br />
                With its easy-to-learn nature, this open-source JavaScript
                Framework can help you save a significant amount of time since
                it allows you to create reusable components, in other words,
                creating packages of code to use across the entire application.
                In addition, React may also be the right framework choice for
                you since it reigns supreme when it comes to search engine
                optimization (SEO). Other reasons for React to attain its top
                position are its declarative views such as Document Object
                Models (DOM), and the state-of-the-art React Hooks. While the
                former trait renders the code more readable and makes it easier
                to spot errors, the latter allows you to use certain React
                features without having to write a class. Reacts migration
                friendliness and ability to perform seamless integration
                certainly dont hurt its popularity in front-end development. The
                same can be said for JavaScript Syntax Extension (JSX), a unique
                React extension that makes the syntax almost identical to HTML,
                making writing React components more accessible.
                <br />
                <strong>Vue</strong> <br />
                Vue combines two essential aspects of its rivals: Angulars
                two-way data binding and Reacts virtual DOM. Free and
                open-source like the others, Vue distinguishes itself as a
                flexible and lightweight framework. Although Vue is the least
                popular framework of the trio, its popularity is on the rise
                thanks to its simple, fast, and straightforward design.
                Naturally a fitting framework for inexperienced developers, you
                can quickly improve your Vue skills with proper documentation
                and create well-organized interactive tours beneficial to user
                onboarding. One of the most significant downsides of Vue is that
                it has not joined the mainstream and paves the way for fewer job
                opportunities, though companies like Adobe, Alibaba, GitLab, and
                Grammarly deploy Vue for the front-end development of their
                apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
