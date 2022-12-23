import { useState } from 'react';

import reactLogo from '../../assets/react.svg';

import { getAppStyles } from './AppStyles';

export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <section css={getAppStyles}>
            <article>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} alt="React logo" />
                </a>
            </article>
            <h1>Vite + React</h1>
            <article>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </article>
            <p>Click on the Vite and React logos to learn more</p>
        </section>
    );
};
