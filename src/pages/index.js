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
                <path d="M16,4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4v7h8Z"/><path d="M3,14v6a1,1,0,0,0,1,1h7V13H4A1,1,0,0,0,3,14Z"/><path d="M20,13H13v8h7a1,1,0,0,0,1-1V14A1,1,0,0,0,20,13Z"/>
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
