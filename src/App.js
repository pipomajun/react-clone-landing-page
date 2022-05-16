/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as UniswapLogo } from './images/uniswapLogo.svg';

const headerStyles = css`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 1rem 4rem;
  position: sticky;
`;
const headerWrapperStyles = css`
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const navListStyles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li > a {
    text-decoration: none;
    color: #f5f5f5;
    opacity: 0.6;
    padding: 1rem;
  }
  li > a:hover {
    opacity: 1;
  }
  li > button {
    padding: 0.5rem 0.85rem;
    border-radius: 12px;
    cursor: pointer;
    background-color: #e80371;
    color: white;
  }
`;
const bodyStyles = css`
  display: flex;
  margin: 0 auto;
  padding: 0 1rem 1rem 1rem;
  justify-content: center;
`;
const backgroundContainer = css`
  width: 100vw;
  height: 100vh;
  max-height: 860px;
`;
const backgroundStyles1 = css`
  background: url(./images/glimmer_bg.svg);
`;
const backgroundStyles2 = css`
  background: url(./images/unicorn_banner.png);
  z-index: 4;
`;
function App() {
  return (
    <div>
      <header css={headerStyles}>
        <div css={headerWrapperStyles}>
          <UniswapLogo />
          <nav>
            <ul css={navListStyles}>
              <li>
                <a href="/">Ecosystem</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Governance</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <button>Launch App</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div css={bodyStyles}>
          <span css={backgroundContainer}>
            <span css={backgroundStyles1} />
            <span css={backgroundStyles2} />
          </span>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
