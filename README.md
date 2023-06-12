## commands 
- npm start 
- npm test


## import errors 
- import { Chart } from "chart.js"; >> NO ERROR 
- import axios from "axios"; >> ERROR 
    - so, the problem is specifically with async testing/axios 


## to do 
- test axios calls on button click
- test axios calls on useEffect


## net ninja
- react testing library # 9-14


## msw setup 
- npm i --save-dev msw

## axios import module error
- (from a Youtube comment on the Net Ninja "React Testing Library Tutorial #12 - Finding Async Elements with FindBy" source below)
- Solution: 
    - There is a problem with the recent axios  v1.2. It will give import error. Add the below line at the end of package.json

    "jest": {
        "transformIgnorePatterns": ["node_modules/(?!axios)/"]
    }

    - restart the test and it will work. This is a temporary solution until axios fixes it

## const user = userEvent.setup() error
- to fix: npm i @testing-library/user-event@14


## citations 
1. The Net Ninja, "React Testing Library Tutorial #12 - Finding Async Elements with FindBy" [link](https://www.youtube.com/watch?v=V2wWLM8VX5k)