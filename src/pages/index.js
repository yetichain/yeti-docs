import * as React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { firstRow, secondRow } from "../data/features";

async function addMaticNetwork() {
  try {
    const result = await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x00",
        rpcUrls: ["https://yetichain.com"],
        chainName: "yeti",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18
        },
        blockExplorerUrls: ["https://yetiscan.com/"]
      }]
    });
  } catch (error){
    console.log(error)
  }
}

function FirstRow({ title, linkUrl, imageUrl }) {
  return (
    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)}>
        <div className="show-card underline-text">
          <div className="icon-wrapper">
            <iframe src={imageUrl} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style={{position:"absolute", height: "80%"}} title="Hero" data-ready="true"></iframe>
          </div>
          <div className="title">{title}</div>
        </div>
      </Link>
    </div>
  );
}

function SecondRow({ title, linkUrl }) {
  return (
    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)} activeClassName="active">
        <div className="show-card underline-text">
          <div className="title">
            <span className="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 30 30">
                <path d="M 17.4922 22.1367 C 17.4922 22.1641 17.4609 22.1758 17.4414 22.1563 L 14.2656 19.0547 C 14.2578 19.0469 14.2539 19.0391 14.2539 19.0313 L 14.2539 18.4922 C 14.2539 18.4922 14.25 18.4883 14.2461 18.4883 L 14.2109 16.3047 C 14.2109 15.5898 13.9922 15.043 13.5586 14.6719 C 13.125 14.3008 12.4805 14.1133 11.625 14.1133 C 10.9688 14.1133 10.3867 14.168 9.88281 14.2813 C 9.80469 14.3008 9.72656 14.3164 9.64844 14.3359 C 9.63672 14.3398 9.625 14.3359 9.61719 14.3281 L 7.58594 12.1563 C 7.57031 12.1406 7.57813 12.1172 7.59766 12.1094 C 8.21094 11.8555 8.84766 11.6445 9.51563 11.4766 C 10.2344 11.3008 11.1016 11.2109 12.1211 11.2109 C 13.9922 11.2109 15.3555 11.6641 16.2109 12.5742 C 17.0664 13.4805 17.4922 14.7461 17.4922 16.3711 Z M 17.4922 23.2852 C 17.4922 23.3008 17.4766 23.3164 17.4609 23.3164 L 14.2188 23.3164 C 14.2031 23.3164 14.1875 23.3008 14.1875 23.2852 L 14.1875 22.0977 C 14.1875 22.0703 14.1563 22.0586 14.1367 22.0781 C 13.7266 22.5117 13.2422 22.8633 12.6836 23.125 C 12.0977 23.4023 11.3867 23.5391 10.5469 23.5391 C 9.97656 23.5391 9.44141 23.4609 8.94141 23.3047 C 8.4375 23.1484 8 22.9141 7.625 22.6016 C 7.25 22.2891 6.95703 21.9063 6.73828 21.4492 C 6.51953 20.9961 6.41406 20.4727 6.41406 19.875 L 6.41406 19.832 C 6.41406 19.1758 6.53125 18.6094 6.77344 18.1328 C 7.01172 17.6563 7.34375 17.2617 7.77344 16.9492 C 8.19922 16.6367 8.70703 16.4023 9.30078 16.2461 C 9.3125 16.2461 9.32031 16.2422 9.33203 16.2383 C 9.89063 16.0938 10.5078 16.0195 11.1797 16.0117 C 11.1875 16.0117 11.1953 16.0156 11.2031 16.0234 L 12.4883 17.3164 L 13.1563 17.9883 L 13.2852 18.1172 C 13.3047 18.1367 13.2852 18.1758 13.2578 18.168 C 12.8867 18.0859 12.4961 18.0469 12.0742 18.0469 C 11.8086 18.0469 11.5664 18.0625 11.3398 18.1016 C 10.9453 18.168 10.6133 18.2891 10.3438 18.4688 C 9.92578 18.7539 9.71484 19.1602 9.71484 19.6992 L 9.71484 19.7422 C 9.71484 20.2031 9.88672 20.5625 10.2344 20.8125 C 10.5781 21.0664 11.0273 21.1953 11.582 21.1953 C 12.3906 21.1953 13.0391 21 13.5273 20.6133 C 13.7383 20.4414 13.9063 20.25 14.0273 20.0313 C 14.0352 20.0156 14.0547 20.0117 14.0703 20.0195 L 17.4805 22.418 C 17.4883 22.4219 17.4922 22.4336 17.4922 22.4414 Z M 15.0742 7.69922 L 8.82813 7.69922 C 5.17578 7.69922 2.21484 10.6406 2.21484 14.2695 L 2.21484 20.4805 C 2.21484 24.1094 5.17578 27.0508 8.82813 27.0508 L 15.0742 27.0508 C 18.7266 27.0508 21.6875 24.1094 21.6875 20.4805 L 21.6875 14.2695 C 21.6875 10.6406 18.7266 7.69922 15.0742 7.69922"/>
              </svg>
            </span>
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
}

function Buttonizer({linkUrl}) {
  return (
    <div className="button-group">
      <button onClick={addMaticNetwork} className="button is-icon w-inline-flex">
        <div className="button-icon_left-element is-icon-medium">
          <div className="text-size-small">Add Network</div>
        </div>
        <div className="button-icon_right-element is-icon-medium">
          <div className="icon-1x1-medium w-embed">
            <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
      </button>
      <a href={linkUrl} target="_blank" className="button is-icon is-secondary w-inline-flex">
        <div className="button-icon_left-element is-icon-medium">
          <div className="text-size-small">Bridge to YETI</div>
        </div>
        <div className="button-icon_right-element is-icon-medium">
          <div className="icon-1x1-medium w-embed">
            <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <div className="bootstrap-wrapper">
        <br />
        <div className="container">
          <div className="row">
            <div className="index-page exclude">
            <section className="section container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-8 pop-text">
                <h2 className="mt-0">
                 YETI <span className="white-text">for Everyone</span>
                </h2>
                <h4 className="mt-0">Scalability with YETI <span className="white-text">performance and security</span></h4>
                <p className="lead grey-text">
                  YETI Documentation is the documentation portal providing 
                  extensive documentation, community resources, and guides for enthusiasts 
                  and developers interested in learning about or building on YETI.
                </p>
                <div class="padding-bottom custom-padding"></div>
                <Buttonizer linkUrl={'https://bridge.yetichain.com'} />
              </div>
              <div className="col-lg-4">
                <div className="tabs_animation-wrapper"><iframe src="https://player.vimeo.com/video/791154651?h=f4d511386d&badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&background=1" frameBorder="0" allow="autoplay" className="tabs-frame" title="Hero" data-ready="true" width="500"height="450" /></div>
              </div>
            </div>
            </section>
            </div>
            <div className="row">
              {firstRow &&
                firstRow.length &&
                firstRow.map((props, idx) => (
                  <FirstRow key={idx} {...props} />
                ))}
            </div>
            <br/>
            <br/>
          </div>
          <div className="row" style={{marginBottom: 32}}>
            <a href="https://yetichain.com" style={{color: "white", display: "inline-flex"}} className="pop-text">
              <h1>Ecosystem <span className="white-text">Apps</span></h1>
              <span className="button-icon_right-element is-icon-medium">
                <div className="w-embed">
                  <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </span>
            </a>
            <div className="row">
              {secondRow &&
                secondRow.length &&
                secondRow.map((props, idx) => (
                  <SecondRow key={idx} {...props} />
                ))}
            </div>           
          </div>
          <div className="row" style={{marginBottom: 32}}>
              <div className="col-md-12 p-8" style={{padding: "0px"}}>
                  <div className="show-card" style={{ background: "radial-gradient(75% 75% at 50% 25.87%,#472582 0,#6a23e7 100%)" }}>
                    <div className="call-to-action">
                      <div>
                        NETWORK STATUS
                        <p className="c2a-text">You can check the live status of YETI network using the following links for Mainnet Beta and Public Testnet.</p>
                      </div>
                      <div>
                        <a href="#" target="_blank" class="button white-button" style={{marginRight: 8}}>Mainnet Beta</a>
                        <a href="#" target="_blank" class="button white-button">Public Testnet</a>
                      </div>
                    </div>
                  </div>
              </div>          
          </div>
        </div>

        <section className="newsletter">
          <div className="newsletter_anim-wrapper pb_intersection">
            <div className="animation_embed w-embed w-iframe">
              <iframe src="https://player.vimeo.com/video/791149043?h=a0b62c3daa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style={{position: 'absolute', top:0, left:0, width:'100%', height:'100%'}} title="Hero" data-ready="true"></iframe>    
            </div>
          </div>
          <div className="padding-global">
            <div class="container-medium">  
              <div class="padding-section-large">
                <div class="newsletter-section_max-width">
                  <div class="tiny-text">STAY UP TO DATE</div>
                  <div class="padding-bottom padding-xsmall"></div>
                  <h3 class="heading-style-h4"><a href="https://twitter.com/yetichain" target="_blank"><span className="white-text">Fallow Twitter</span><span class="newsletter_link-icon" /></a></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
