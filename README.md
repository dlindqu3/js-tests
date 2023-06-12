## commands 
- npm start 
- npm test


## content 
- tested get API calls with mock service worker 
- tested get API calls with msw from useEffect 


## axios import module error
- Problem: "SyntaxError: Cannot use import statement outside a module", with an axios import
- Solution: 
    - (from a Youtube comment on the Net Ninja "React Testing Library Tutorial #12 - Finding Async Elements with FindBy" source below)
    - Solution: 
        - There is a problem with the recent axios  v1.2. It will give import error. Add the below line at the end of package.json

    "jest": {
        "transformIgnorePatterns": ["node_modules/(?!axios)/"]
    }

    - restart the test and it will work. This is a temporary solution until axios fixes it


## const user = userEvent.setup() error
- to fix: npm i @testing-library/user-event@14


## mock service workers 
- npm i --save-dev msw
- add src/mocks/handlers.js
- add src/mocks/server.js
- add to src/setupTests.js 


## citations 
1. The Net Ninja, "React Testing Library Tutorial #12 - Finding Async Elements with FindBy" [link](https://www.youtube.com/watch?v=V2wWLM8VX5k)
2. TechCheck, "React Testing Library - Mock API Calls - Mock Service Worker (msw)" [link](https://www.youtube.com/watch?v=oMv2eAGWtZU)