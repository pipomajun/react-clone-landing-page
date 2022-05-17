/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  padding: 32px 0px;
  background-color: #f9f5f0;
`;
const headerWrapperStyles = css`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  padding: 0px 40px;
  margin-left: auto;
  margin-right: auto;

  img {
    height: 17px;
  }
  div {
    font-size: 16px;
    line-height: 20px;
    float: right;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.2px;
    position: relative;
  }
`;
const heroStyles = css`
  display: block;
  background-color: #f9f5f0;
  width: 100vw;
`;
const heroContainerStyles = css`
  background-color: #f9f5f0;
  position: relative;
  display: flex;
  max-width: 1080px;
  padding: 80px 40px 120px;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  h1 {
    display: flex;
    width: 720px;
    margin-top: 0;
    font-size: 65px;
    line-height: 80px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 10px;
  }
  p {
    width: 720px;
    margin-top: 30px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 34px;
    text-align: left;
    letter-spacing: 0.3px;
  }
  #Email {
    width: 320px;
    height: 52px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 15px;
    letter-spacing: 0.2px;
    border: 1px solid #ccc;
  }
  .getRoasted {
    height: 52px;
    padding: 14px 32px;
    border: 2px solid #3170e9;
    border-radius: 10px;
    background-color: #387cff;
    box-shadow: 0 1px 25px 0 rgb(56 124 255 / 40%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
`;
const heroFormStyles = css`
  margin: 0 0 5px 0;
  .imgGrill {
    position: absolute;
    left: auto;
    top: auto;
    right: 40px;
    bottom: -10%;
    height: 420px;
  }
`;
const guaranteeStyles = css`
  display: flex;
  margin-left: 5px;
  align-items: center;
  .freeGuarantee {
    margin-right: 40px;
    display: flex;
    align-items: center;
    img {
      height: 18px;
    }
    span {
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 0.3px;
    }
  }
  .privateGuarantee {
    display: flex;
    align-items: center;
    img {
      height: 18px;
    }
    span {
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 0.3px;
    }
  }
`;
const infoStyles = css`
  background-color: white;
`;
const infoContainerStyles = css`
  max-width: 1080px;
  padding: 180px 40px 160px;
  margin-left: auto;
  margin-right: auto;

  .headerDivider {
    width: 50px;
    height: 2px;
    margin-right: auto;
    margin-bottom: 25px;
    margin-left: auto;
    border-top: 2px dotted #000;
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 50px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.2px;
  }
  .meetTheTeam {
    display: flex;
    margin-top: 80px;
    margin-bottom: 200px;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    span {
      margin-top: 10px;
      margin-left: 25px;
      color: #000;
      font-size: 13px;
      letter-spacing: 0.1px;
    }
  }
  .whatToLearnGrid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    margin-top: 80px;
    margin-bottom: 260px;
    grid-column-gap: 37px;
    grid-row-gap: 95px;
    /* #learnDivGrid {
      grid-column-start: 1fr;
      grid-column-end: 1fr;
      grid-row-start: 1fr;
      grid-row-end: 1fr;
    } */
    .learnDiv {
      display: flex;
      align-items: center;
      .learnDivImgContainer {
        margin-right: 40px;
        padding: 30px;
        border-radius: 20px;
        background-color: #f9f5f0;
        img {
          height: 40px;
          width: 40px;
        }
      }
      .learnDivInfo {
        font-size: 24px;
        line-height: 35px;
        font-weight: 500;
        span {
          color: #797979;
        }
      }
    }
  }
  .recommendationContainer {
    display: flex;
    margin-top: 80px;
    margin-bottom: 120px;
    align-items: center;
    .reviewText {
      display: flex;
      width: 50%;
      margin-right: 5%;
      align-items: flex-start;
      div {
        margin-top: 30px;
        font-family: Coustard, sans-serif;
        font-size: 70px;
      }
      span {
        margin-left: 25px;
        font-size: 21px;
        line-height: 38px;
      }
    }
    .reviewStars {
      display: flex;
      width: 45%;
      flex-direction: column;
      align-items: center;
      img {
        height: 60px;
        margin-bottom: 15px;
      }
      .reviewContainer {
        display: flex;
        align-items: center;
        .helpfulReview {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 15px;
          margin-left: 15px;
          .fiveStarsContainer {
            margin-bottom: 7px;
            display: flex;
            align-items: center;
            img {
              height: 20px;
              margin-right: 2px;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
  .secondFormContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #Email {
    width: 320px;
    height: 52px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 15px;
    letter-spacing: 0.2px;
    border: 1px solid #ccc;
  }
  .getRoasted {
    height: 52px;
    padding: 14px 32px;
    border: 2px solid #3170e9;
    border-radius: 10px;
    background-color: #387cff;
    box-shadow: 0 1px 25px 0 rgb(56 124 255 / 40%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
`;

function App() {
  return (
    <div>
      <div css={headerStyles}>
        <div css={headerWrapperStyles}>
          <img
            src="https://assets.website-files.com/600ea824f296c05edccbc9a8/61127bf50328a76baf48f935_rebank_logo.svg"
            alt=""
          />
          <div>Roast My Finance Stack</div>
        </div>
      </div>
      <div css={heroStyles}>
        <div css={heroContainerStyles}>
          <h1>Do finance work with confidence</h1>
          <p>
            Get a personalized video review of your finance stack &amp; expert
            recommendations you wish you'd had sooner
          </p>
          <div css={heroFormStyles}>
            <form>
              <input
                type="email"
                maxLength="256"
                name="Email"
                data-name="Email"
                placeholder="Your company email"
                id="Email"
                required=""
              />
              <input
                className="getRoasted"
                type="submit"
                value="Request a roast"
                data-wait="Doings things..."
                data-event-category="Roast My Finance Stack"
                data-event-action="Click"
                data-event-label="Request a roast — Hero"
              />
            </form>
            <div css={guaranteeStyles}>
              <div className="freeGuarantee">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  alt=""
                />
                <span>Absolutely free</span>
              </div>
              <div className="privateGuarantee">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  alt=""
                />
                <span>100% private</span>
              </div>
            </div>
            <img
              src="https://assets.website-files.com/600ea824f296c05edccbc9a8/624302507df35cd0dbd604e0_bbq.svg"
              alt=""
              className="imgGrill"
            />
          </div>
        </div>
      </div>
      <div css={infoStyles}>
        <div css={infoContainerStyles}>
          <h2>Tailored advice by finance pros</h2>
          <div className="headerDivider" />
          <div className="meetTheTeam">
            <div>
              <img
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625802676f8ce787b7ed854e_Group%202150-p-500.png"
                alt=""
              />
              <span>Juan, rebank CEO, Y Combinator startup founder</span>
            </div>
            <div>
              <img
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/62580267cb33ee824bbab83a_Group%202138-p-500.png"
                alt=""
              />
              <span>Leona, rebank CFO, MBA and international accountant</span>
            </div>
          </div>
          <h2>Learn how to</h2>
          <div className="headerDivider" />
          <div className="whatToLearnGrid">
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/62580fb6db15dd2650e7c907_globe-wire.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Structure your company
                <br />
                <span>to sell worldwide</span>
              </div>
            </div>
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119d129b026e6a035ec7_Money%20Bag.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Avoid transfer fees
                <br />
                <span>with zero-cost bank accounts</span>
              </div>
            </div>
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119d27e336487b0f7bee_calculator.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Escape hefty tax bills
                <br />
                <span>with the right paperwork</span>
              </div>
            </div>
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119c2f4fa902f91a0e23_letter.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Organize your finances
                <br />
                <span>with accounting integrations</span>
              </div>
            </div>
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119c21ac257df98dcf14_hat.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Accelerate your growth
                <br />
                <span>with the perfect team</span>
              </div>
            </div>
            <div className="learnDiv">
              <div className="learnDivImgContainer">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119df151e1a304176600_hourglass.svg"
                  alt=""
                />
              </div>
              <div className="learnDivInfo">
                Save time
                <br />
                <span>by automating workflows</span>
              </div>
            </div>
          </div>
          <h2>Recommend by world-class companies</h2>
          <div className="headerDivider" />
          <div className="recommendationContainer">
            <div className="reviewText">
              <div>"</div>
              <span>
                There are so many things to keep track of and it's easy to miss
                things. We had concerns about inter-company transfers. The roast
                touches on some really good points.
              </span>
            </div>
            <div className="reviewStars">
              <img
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806cd129b021c6102f413_skenario-logo.png"
                alt=""
              />
              <div className="reviewContainer">
                <div className="helpfulReview">
                  <div className="fiveStarsContainer">
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                  </div>
                  <div>Helpfulness</div>
                </div>
                <div className="helpfulReview">
                  <div className="fiveStarsContainer">
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                    <img
                      src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625806c7aac0ec86c79b3b95_star.svg"
                      alt=""
                    />
                  </div>
                  <div>Expertise</div>
                </div>
              </div>
            </div>
          </div>
          <div css={heroFormStyles} className="secondFormContainer">
            <form>
              <input
                type="email"
                maxLength="256"
                name="Email"
                data-name="Email"
                placeholder="Your company email"
                id="Email"
                required=""
              />
              <input
                className="getRoasted"
                type="submit"
                value="Request a roast"
                data-wait="Doings things..."
                data-event-category="Roast My Finance Stack"
                data-event-action="Click"
                data-event-label="Request a roast — Hero"
              />
            </form>
            <div css={guaranteeStyles}>
              <div className="freeGuarantee">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  alt=""
                />
                <span>Absolutely free</span>
              </div>
              <div className="privateGuarantee">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  alt=""
                />
                <span>100% private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
