"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3124],{73536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r="tDOT",s={unversionedId:"applications/tdot",id:"applications/tdot",title:"tDOT",description:"- Team Name: NUTS Finance",source:"@site/applications/tdot.md",sourceDirName:"applications",slug:"/applications/tdot",permalink:"/Grants-Program/applications/tdot",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/tdot.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Stable Asset XCM Pallet",id:"milestone-1--stable-asset-xcm-pallet",level:3},{value:"Milestone 2 \u2014 tDOT Minting",id:"milestone-2--tdot-minting",level:3},{value:"Milestone 3 \u2014 tDOT Redeeming",id:"milestone-3--tdot-redeeming",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:d},p="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tdot"},"tDOT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," NUTS Finance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x679824d755B054a2a50358008472a6F400740319(DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/872#issuecomment-1424407082"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is a follow-up of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md"},"Stable Asset grant"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"DOT serves three distinct purposes in Polkadot: governance, staking and bonding. These critical functions have increased DOT's demand but also segregated DOT's liquidity across multiple applications."),(0,i.kt)("p",null,"Several parachains and protocols arise to enhance DOT's capital efficiency, which includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Staked DOT, e.g. Acala's LDOT and Parallel's xDOT"),(0,i.kt)("li",{parentName:"ul"},"Crowdloan DOT, e.g. Acala's LCDOT and Moonbeam's stDOT")),(0,i.kt)("p",null,"These DOT derivatives, which represents different forms of DOT across the Polkadot network, further spread out DOT's liquidity. DOT's liquidity fragementation has caused several crucial issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each DOT derivative need to bootstrap their own liquidity and find a stable pricing"),(0,i.kt)("li",{parentName:"ul"},"Polkadot application builders need to support multiple forms of DOT assets")),(0,i.kt)("p",null,"These hurdles are extremely difficult to overcome, given Polkadot network liquidity is still relatively low. tDOT aims at solving these issues by generating unified DOT liquidity across Polkadot applications."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"tDOT is a DOT-pegged derivative built on top of the stable asset protocol."),(0,i.kt)("p",null,"Stable asset is based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets."),(0,i.kt)("p",null,"taiKSM is the first KSM-pegged derivative deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura."),(0,i.kt)("img",{width:"707",alt:"image",src:"https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png"}),(0,i.kt)("p",null,"tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;"),(0,i.kt)("li",{parentName:"ul"},"Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;"),(0,i.kt)("li",{parentName:"ul"},"If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT.")),(0,i.kt)("p",null,"Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows a dynamic trading range between xDOT and DOT but ensures the value of pool derivative is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the exchange rate between xDOT and DOT trades at 1:1, tDOT is 100% collateralized and is backed by exactly 1 DOT. When the exchange rate shifts, tDOT is over-collateralized and the collateral ratio increases as the exchange rate shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values."),(0,i.kt)("p",null,"Since each xDOT-DOT pool can maintain pegging of its own pool derivative, it's a natural choice to unify these pool derivatives into a single tDOT. This brings extra benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It ensures a single tDOT and it can be bridged to any parachain;"),(0,i.kt)("li",{parentName:"ul"},"It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;"),(0,i.kt)("li",{parentName:"ul"},"It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;"),(0,i.kt)("li",{parentName:"ul"},"It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C.")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"tDOT will be minted on a single parachain which is the hosting parachain for tDOT. It can be migrated to a different parachain or even a dedicated parachain. The hosting parachain can deploy its own xDOT-DOT pools so that tDOT is minted locally."),(0,i.kt)("p",null,"Any other parachains such as Acala and Parallel which have their own native DOT derivatives can deploy xDOT-DOT pools on their own chains and mint tDOT on the hosting chain as remote minters. Their benefits include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The xDOT-DOT pool provides a stable swap between xDOT and DOT;"),(0,i.kt)("li",{parentName:"ul"},"The xDOT-DOT liquidity is locked in its original chain while minting tDOT so the parachains can retain its TVL;"),(0,i.kt)("li",{parentName:"ul"},"The minted tDOT can be bridged to other chains other than the hosting parachain. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton.")),(0,i.kt)("p",null,"For the whole Polkadot network, a standardized DOT derivative can service the entire Polkadot ecosystem; it can unify all forms of DOT liquidity and unleash maximum usability for DOT across Parachains."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Daniel Tang, Co-founder"),(0,i.kt)("li",{parentName:"ul"},"Terry Lam, Co-founder"),(0,i.kt)("li",{parentName:"ul"},"Shengda Ding, Co-founder")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Shengda Ding"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:shengda@nuts.finance"},"shengda@nuts.finance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://nuts.finance"},"https://nuts.finance"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ACoconut")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nutsfinance"},"https://github.com/nutsfinance"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/joeztang"},"https://www.linkedin.com/in/joeztang"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/terry-lam-80a71927"},"https://www.linkedin.com/in/terry-lam-80a71927")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dingshengda"},"https://www.linkedin.com/in/dingshengda"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 14,000 DAI")),(0,i.kt)("h3",{id:"milestone-1--stable-asset-xcm-pallet"},"Milestone 1 \u2014 Stable Asset XCM Pallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 week"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 4,000 DAI")),(0,i.kt)("p",null,"Stable Asset XCM pallet is a new module which will be deployed in the host chain only. It manages balances and limits for each individual stable asset pools and acts as the portal to mint and redeem tDOT."),(0,i.kt)("p",null,"Stable asset LPs will be divided into two layers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Local LP, which is the LP of individual stable asset pools and managed by stable asset pallet;"),(0,i.kt)("li",{parentName:"ul"},"Aggregate LP, which is the LP generated by local LPs and managed by stable asset XCM pallet.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3374016/179861856-ffeaf4f8-2501-4cd2-b0b1-f0ea6a998c52.png",alt:"image"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide documentation on the architecture of tDOT.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide comprehensive tests that covers stable asset pool management functionalities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide a Docker image with Substrate chain that demonstrate this project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset XCM"),(0,i.kt)("td",{parentName:"tr",align:null},"The stable asset XCM module tracks and manages individual stable asset pools across multiple parachains. It tracks balances of each stable asset pools in each parachain and sets mint limits for each pool.")))),(0,i.kt)("h3",{id:"milestone-2--tdot-minting"},"Milestone 2 \u2014 tDOT Minting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,i.kt)("p",null,"This milestone implements minting tDOT both locally on the host chain and remotely on the guest chains. In either case, minting is triggered in the stable asset pallet."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3374016/179863159-9f130f5b-3ff6-4f06-a85e-3d243c6d5c39.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3374016/179863205-7258e9a9-26f4-4a46-9b76-e0773fa8fbed.png",alt:"image"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide documentation on the architecture of tDOT and flow diagrams of tDOT minting process.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide comprehensive tests that covers minting tDOT locally in host chain and remotely in guest chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide a Docker image with Substrate chain that demonstrate this project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset Pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Users can mint tDOT on stable asset pallet with underlying asset or with local LP. If minting fails in host chain, the whole extrinsic is reverted. If minting fails in guest chain, user will get local LP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset XCM Pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the actual aggregate LP minting. It accepts XCM mint request from guest chain with local LP, and sends back XCM message if minting fails due to mint limit exceeds.")))),(0,i.kt)("h3",{id:"milestone-3--tdot-redeeming"},"Milestone 3 \u2014 tDOT Redeeming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,i.kt)("p",null,"This milestone implements redeeming tDOT on host chain."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3374016/179863963-5bee9e99-f4a1-42c8-a274-50f2c81420d3.png",alt:"image"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide documentation on the architecture of tDOT and flow diagrams of tDOT redeeming process.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide comprehensive tests that covers redeeming tDOT to host chain or to guest chains.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide a Docker image with Substrate chain that demonstrate this project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains the architecture of tDOT and how minting and redeeming tDOT works. The article will discuss potential attack vectors of tDOT and how does tDOT addresses it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset XCM Pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the aggregate LP redeeming request, eitehr in proportion or to a single asset. If redeeming to a local stable asset pool fails, the whole extrinsic is reverted. If redeeming to a remote stable asset pool fails, users will get local asset on the guest chain instead.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We will upgrade taiKSM to tKSM with similar architecture shortly after the launch of tDOT."))}u.isMDXComponent=!0}}]);