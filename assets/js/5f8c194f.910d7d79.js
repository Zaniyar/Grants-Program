"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2578],{92648:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(30828);const l={},p="PHP RPC Lib Follow up",o={unversionedId:"applications/php-rpc-lib-follow-up",id:"applications/php-rpc-lib-follow-up",title:"PHP RPC Lib Follow up",description:"Team Name:* gmajor",source:"@site/docs/applications/php-rpc-lib-follow-up.md",sourceDirName:"applications",slug:"/applications/php-rpc-lib-follow-up",permalink:"/Grants-Program/applications/php-rpc-lib-follow-up",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"php-rpc-lib-follow-up"},"PHP RPC Lib Follow up"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gmajor-encrypt"},"gmajor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F (Dai)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"As Gavin mentioned in this ",(0,n.kt)("a",{parentName:"p",href:"https://www.coindesk.com/tech/2021/05/25/polkadots-gavin-wood-webassembly-is-the-future-of-smart-contracts-but-legacy-evm-is-right-now/"},"CoinDesk article"),", WebAssembly is the future of smart contracts."),(0,n.kt)("p",null,"However, WebAssembly, as the main Smart Contract in the substrate ecosystem, lacks the necessary infrastructure. Except for the lib of contracts provided by polkadot.js, there are no more third parties that can query the contract storage and interact with the package."),(0,n.kt)("p",null,"PHP is one of ",(0,n.kt)("a",{parentName:"p",href:"https://www.stackscale.com/blog/most-popular-programming-languages/"},"the most popular development languages in the world"),", PHP is used by 77.8% of all the websites whose server-side programming language(",(0,n.kt)("a",{parentName:"p",href:"https://w3techs.com/technologies/details/pl-php"},"https://w3techs.com/technologies/details/pl-php"),")."),(0,n.kt)("p",null,"Traditional PHP Website developers will lack the necessary SDK if they come into contact with the substrate,\nHowever, the lack of support for contracts in the current ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/php-substrate-api"},"php-substrate-api")," makes it very difficult to use PHP as a development language to interact with the substrate."),(0,n.kt)("p",null,"Therefore, this proposal is an extension of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/php-substrate-api"},"php-substrate-api")," to improve the practicability of this package further and increase support for smart contracts."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Abi encode & decode, support contract metadata ",(0,n.kt)("strong",{parentName:"p"},"v0,v1,v2,v3,v4"),", this will be used to read and write smart contracts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Deploy wasm smart contract"))),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'$api = new SubstrateRpc("websocket_or_http_url");\n$api->rpc->contracts->new("wasm_code", "gas limit","value");\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read contract values")),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'$api = new SubstrateRpc("websocket_or_http_url");\n$api->rpc->contracts->balanceOf("from","contract");\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Send Contract transaction")),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'$api = new SubstrateRpc("websocket_or_http_url");\n$signer = new SubstrateRpc\\Util\\Keyring\\Signer("privatekey");// or HD\n$api->setSigner($signer);\n$tx = $api->tx->contracts->transfer("to_address", 10000);\n$tx->signAndSend();\n')),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"CIt can help PHP language developers easily access the substrate (polkadot) ecology"),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gmajor")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," gmajor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:gmajorencrypt@gmail.com"},"gmajorencrypt@gmail.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gmajor-encrypt"},"https://github.com/gmajor-encrypt"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("p",null,"individual"),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"I have many years of php development experience and nearly five years of blockchain development experience, familiar\nwith PHP, GOLANG, PYTHON, Nodejs, Rust"),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/php-scale-codec"},"https://github.com/gmajor-encrypt/php-scale-codec")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/php-substrate-api"},"https://github.com/gmajor-encrypt/php-substrate-api")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/sr25519-bindings"},"https://github.com/gmajor-encrypt/sr25519-bindings")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gmajor-encrypt/scale-codec-comparator"},"https://github.com/gmajor-encrypt/scale-codec-comparator")),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"Not yet"),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1.5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 10000 DAI")),(0,n.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10000 DAI")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"MIT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation on how to use this lib and how to test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"ABI"),(0,n.kt)("td",{parentName:"tr",align:null},"Abi encode & decode, contract ",(0,n.kt)("a",{parentName:"td",href:"https://use.ink/metadata/"},"metadata")," v0,v1,v2,v3,v4 will be supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Deploy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gmajor-encrypt/php-substrate-api"},"php-substrate-api")," implement new method of deploy wasm smart contract")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Read contract"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement method read contract values and decode as human readable, similar to ",(0,n.kt)("a",{parentName:"td",href:"https://polkadot.js.org/docs/api-contract/start/contract.read"},"api-contract-read"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Write contract"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement method send Contract transaction, similar to ",(0,n.kt)("a",{parentName:"td",href:"https://polkadot.js.org/docs/api-contract/start/contract.tx"},"api-contract-tx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"5."),(0,n.kt)("td",{parentName:"tr",align:null},"Test"),(0,n.kt)("td",{parentName:"tr",align:null},"Including all the unit tests mentioned above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"6."),(0,n.kt)("td",{parentName:"tr",align:null},"Example"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide some simple examples of using this lib")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"7."),(0,n.kt)("td",{parentName:"tr",align:null},"Packagist"),(0,n.kt)("td",{parentName:"tr",align:null},"Submit to ",(0,n.kt)("a",{parentName:"td",href:"https://packagist.org/"},"Packagist")," for composer to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"8."),(0,n.kt)("td",{parentName:"tr",align:null},"Github action"),(0,n.kt)("td",{parentName:"tr",align:null},"Auto Test when new commit")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"This milestone still lacks support for smart contract verification, there is no better solution at present, and will be supported after research"))}c.isMDXComponent=!0}}]);