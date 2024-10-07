export default function NavigationMenu(): string {
  return `	
 <style>
 /* sutta central line order fixes */
#segmented_text_content .reference {
    grid-row: -1;
 
}
sc-navigation-linden-leaves{
background-color: rgb(64, 60, 60);
color: rgb(255, 255, 255);
display: block;
font-family: "Skolar Sans PE Variable", "Noto Sans", sans-serif, "Noto Sans", "Source Sans Pro", sans-serif;
height: 48px;
position: relative;
transform: none;
width: vw;
z-index: 200;
}

sc-navigation-linden-leaves a{
    color:#fff;
}

.breadcrumbs-wrapper {
display: flex;
overflow-x: auto;
overflow-y: hidden;
flex-direction: row;
box-sizing: border-box;
height: 48px;
margin-top: 0px;
margin-right: 0px;
margin-bottom: 0px;
margin-left: 0px;
padding-top: 8px;
padding-right: 0px;
scroll-snap-type: x mandatory;
}

.home-link svg, .breadcrumbs-wrapper a {
fill: white;
color: white;
}

#segmented_text_content .root {
    grid-row: 2;
    grid-column:2;
}


/*menu stuffs */

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


:root {
    --lightgrey:#ccc;
    --darkgrey:#888;  
    --black:#000;  
    --darkbrown:#9e6f04;
    --ochre:#c68b05;

    --padding-sm:10px;
    
}

body {
  background: orange;
  font-family: 'Noto Sans', Arial, Helvetica, Sans-serif, Verdana, Tahoma;
  color: black;
}

.sc-custommenu{
    background-color: rgb(255, 251, 255);
    max-width:575px;
    box-shadow: 2px 2px 30px rgba(20, 20, 20, 0.5);
    padding: 5px 10px;
    height:calc(100vh - 4rem);
    height: 100vh;
    overflow-y: scroll;
    font-size: 16px;
    border-radius: 0 10px 10px 0;
}

aside{
    grid-area: sidebar;
}

.scc-search{
/*    border-bottom: 1px solid rgba(0,0,0,.05);*/
    padding-bottom: var(--padding-sm);
    padding-top: var(--padding-sm);
}

.scc-links {
    line-height: 125%;
    border-bottom: 1px solid;
    border-color: var(--lightgrey);
    text-align: left;   
}

.scc-links a{
    text-decoration: none;
    color:#000;
    position: relative;
    border-radius: 0;
    padding-top: 5px;
}
.scc-links li a:hover{
    
    text-shadow: 1px 2px 1px white;
    
}

.scc-links li button:hover, .scc-links li a:hover {
    color: var(--darkbrown);
}




.expander{
    margin-left: 1px;
    padding-top:var(--padding-sm);
    position:relative;
}



chapterid{
    margin-right:5px;
    width: 75px;
    padding-left: 2px;
    

}

translation{
    width: 40%;
    display: inline-block;
    line-height:22px
}


root{
    margin-left:1ex;
    width: 40%;
    display: block;
}

root, chapterid{
    font-size: 80%;
    position: relative;
    display: inline-block;
    color: var(--darkgrey);
    text-transform: uppercase;
    vertical-align: baseline;
    line-height:22px
    
}
.scc-links .fourth root{
    font-size: 12px;
}






.text-language button{
    font-size: 28px;
    border-top: 1px solid rgba(0,0,0,.05);
    width: 100%;
    font-weight: 400;
    padding-left: var(--padding-sm);
}


button[aria-expanded=false]{
    background: transparent;
} 
button[aria-expanded=true]{
    background-color: #fff8f3;
    background-image:linear-gradient(to top, rgba(255, 255, 255, 0) 83.19%, rgba(0, 0, 0, 0.2))
    color:darkgoldenrod;
} 
.btn-check:focus+.btn, .btn:focus{
    outline: none;
/*    box-shadow:0 0 0 .25rem rgb(253 184 13 / 25%);*/
box-shadow: none;
}


.btn[aria-expanded=true]{
    color:var(--ochre);
}
.btn[aria-expanded=true]:hover{
    background-image:linear-gradient(rgba(255, 255, 255, 0) 20.59%, rgba(127, 82, 21, 1))b;
}


 .first{
    border-top: 1px solid #ccc;
    width:100%;
    font-family: "Noto Serif", serif;
    background-color: #fff;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 98%, rgba(250, 250,250, 1));
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    wdth:125%;
}
 .first li{
 border-bottom: var(--lightgrey) 1px solid;
 
}

.scc-links .second li:last-of-type{
    border-bottom: none;
    padding-bottom: 10px;
    background-image: linear-gradient(rgba(64, 62, 62, 0.2), rgba(255, 255, 255, 0) 0.46%);
}
.second{
    color: #000;
    padding-left:0;
    font-family: 'Noto Sans', Arial, Helvetica, Sans-serif, Verdana, Tahoma;
    padding-bottom: 10px;
    padding-top: 0px;
    border-bottom: 1px solid var(--lightgrey);
    background-color: rgba(223, 215, 205, .3);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 95%, rgba(0, 0, 0, 0.2));
    font-weight: 400;
}
.second li, .second li a{
    font-size: 20px;
    line-height: 25px;
    font-weight: 300; 
}
.second root{
    line-height: 25px;
}

.second li{
    padding:5px 0;
}
.second a{
       
    padding-bottom: 0;
    padding-left: 5px;
}

.scc-links .first .btn[aria-expanded=true]{
    font-weight: 700;

    background-color: var(--ochre);
    color: #fff;
}
.scc-links .second .btn[aria-expanded=true]{
    background:transparent;
    color: var(--darkbrown);
}


.third {
    display: block;
    position: relative;
    border-top:1px solid var(--darkgrey);
    width: 100%;
    padding: 0 15px;
    padding-right: 0;
    border-bottom: 1px solid var(--darkgrey);
    box-shadow:0 3px 3px -2px inset rgba(0, 0, 0, 0.4) ;    
        background-color: rgba(233, 225, 205, .6) !important ;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 99%, rgba(0, 0, 0, 0.2));;    
}

.third li:hover{
    border-bottom:1px solid #fff;
}

.third li, .third li a{
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;    
}
.third a{
    padding-top: 0;
    padding-bottom: 0;
    color:#333;
}

.fourth{
    padding-bottom:12px;
    background-color: rgba(250,250,250, 0.4);
    background-image: linear-gradient(rgba(64, 62, 62, 0.2), rgba(255, 255, 255, 0.6) 0.46%);
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    margin-left: -20px;
    padding-left: 22px;
    
}
.fourth li, .fourth li a{
    font-size: 16px;
    font-weight: 500;    
}

.fourth a{
    padding:5px 0;
}

.fifth{
    padding:5px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.8);
        background-color: white;
        margin:10px 0 0 -16px;
        padding-left:20px; 
        border-bottom: 2px solid var(--darkgrey);
        background-image: linear-gradient(rgba(64, 62, 62, 0.2), rgba(255, 255, 255, 0.6) 0.46%);
}
.fifth  a{
    font-size: 10pt;
    width: 100% ;
}
.fifth li{
    padding:5px 5px;
}
.fifth li:hover{
    box-shadow: inset -1px -1px 5px rgb(107 77 77 / 50%);
    border-bottom-color: #999;
}


.text-group li{
    padding-left: 10px;

}
.scc-links .btn{
    padding-top: .25rem;
    padding-bottom: .25rem;
border: 0;
text-align: left;
border-radius: 0;
width: 100%;
}
.scc-links .third .btn{
    width: calc(100% - 8px);
}

.scc-links li a:nth-of-type(2){
display: inline-block;
/*padding: .25rem 0;*/
border: 0;
width: calc(100% - 2em);
text-align: left;
margin-left: -16px;
}



.expander{
    right:14px;
    top:5px;
    vertical-align: top;
}


.expander[aria-expanded=false] { 
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3e%3cpath fill='none' stroke='rgba%280,0,0,1%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 4h17v17H3zM12 8v8m-4-4h8'/%3e%3c/svg%3e");
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 1px;
}

.expander[aria-expanded=true] { 
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3e%3cpath fill='none' stroke='rgba%280,0,0,1%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h18v18H3zM8 12h8'/%3e%3c/svg%3e");
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 1px;
}




span.info{
/*    display: block;*/
    width:14px;
    position: relative;
    width: 20px;
}

.info blurb, blurb{
 visibility: hidden;
  width: 320px;
  background-color: rgb(85 85 85 / 96%);
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;

   position: absolute;
  z-index: 1;
  bottom: 155%;
  left: 70%;
  margin-left: -310px;
    /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 14px;
  font-weight: 100;
  text-shadow: none;
  box-shadow: 2px 2px 30px rgb(85 85 85 / 90%);
}

/* Tooltip arrow */
.info blurb::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 5%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(85 85 85 / 87%) transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.info:hover blurb {
  visibility: visible;
  opacity: 1;
  color: white;
  text-shadow: none;
}


 </style>
 
  <aside class="scc-sidebar sc-custommenu">

		<form class="scc-search d-flex">
			<span class="collapse"><input type="search" class="form-control ds-input" id="search-input" placeholder="Citation" aria-label="Sutta number..." autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" dir="auto"><pre aria-hidden="true" ></pre><span class="ds-dropdown-menu" role="listbox" id="citation-jumper"><div class="ds-dataset-1"></div></span></span>
		</form>

		<form class="scc-settings d-flex">
			<div class="form-check form-switch collapse">
				<input class="form-check-input" type="checkbox" role="switch" id="vaggaswitch" data-bs-toggle="collapse" data-bs-target=".vagga" aria-expanded="false" aria-controls="mn-vaggas sn-Devatasamyutta">
				<label class="form-check-label" for="vaggaswitch">Show chapters</label>
			</div>
		</form>
		<nav class=" scc-links ">	
			<ul id="threebaskets" class="first list-unstyled mb-0">
				<li id="sutta-basket" class="second list-unstyled collapse basket"><translation>Discourses</translation><root>Suttapiṭaka</root>
					<ul>
						<li id="long"><translation>Long</translation> <root>Dīgha</root></li>
						<li id="middle"><translation>Middle</translation> <root>Majjhima</root></li>
						<li id="linked"><translation>Linked</translation> <root>Saṃyutta</root></li>
						<li id="numbered"><translation>Numbered</translation> <root>Aṅguttara</root></li>
						<li id="minor"><translation>Minor</translation> <root>Khuddaka</root></li>
						<li id="othersutta"><translation>Other</translation> <root>Other Suttas</root></li>
					</ul>
				</li>
				<li id="vinaya-basket" class="second list-unstyled collapse basket"><translation>Monastic Law</translation><root>Vinayapiṭaka</root></li>
				<li id="abhidhamma-basket" class="second list-unstyled collapse basket"><translation>Systematic Treastise</translation><root>Abhidhammapiṭaka</root>
					<blurb>Abhidhamma texts are systematic summaries and analyses of the teachings drawn from the earlier discourses. The Abhidhamma (spelled abhidharma in Sanskrit) is intended for advanced students who have mastered the teachings of the discourses.</blurb>
				</li>
			</ul>	
			<ul id="alllanguages" class="first list-unstyled mb-0 accordion accordion-flush" >	
				<li class="text-language accordion-item" id="pali">
					<h2 class="accordion-header">
					<button class="btn d-inline-flex align-items-left collapsed accordion-button" data-bs-toggle="collapse" data-bs-target="#pali-lang" aria-expanded="false">Pāḷi</button>
				</h2>
					<div  class="language ">

						<ul class="second list-unstyled collapse accordion-collapse " id="pali-lang" data-bs-parent="#alllanguages">
							<li class="text-type">
								<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#pali-discourses" aria-expanded="false">
									<translation>Discourses</translation><root>suttas</root>
								</a>
								<ul class="third collapse list-unstyled accordion-button" data-bs-parent="#pali-lang" id="pali-discourses">
									<li id="dn" class="long suttas">
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#dn-sections">            
											<title>expand</title>+
										</a>  

										<a class="btn d-inline-flex" href="https:suttacentral.net/dn">
											<chapterid>DN</chapterid>
											<translation>Long Discourses</translation>
											<root>Dīghanikāya</root>
										</a>
										<ul id="dn-sections" class="collapse multi-collapse list-unstyled fourth" >
											<li>
												<a href="https://suttacentral.net/dn-silakkhandhavagga" class="btn d-inline-flex">
													<chapterid>DN1-10</chapterid>
													<translation>The Entire Spectrum of Ethics</translation>
													<root>Sīlakkhandhavagga</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/dn-mahavagga" class="btn d-inline-flex">
													<chapterid>DN10-20</chapterid>
													<translation>The Great Chapter</translation>
													<root>Mahāvagga</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/dn-pathikavagga"  class="btn d-inline-flex">
													<chapterid>DN20-30</chapterid>
													<translation>About Pāṭikaputta</translation>
													<root>Pāthikavagga</root>
												</a>
											</li>
										</ul>
									</li>
									<li id="mn" class="middle suttas">
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#mn-sections">            
											<title>expand</title>+
										</a>  
										<a class="btn d-inline-flex" href="https://suttacentral.net/mn" class="btn d-inline-flex">
											<chapterid>mn</chapterid>
											<translation>Middle Discourses</translation> 
											<root>Majjhimanikāya</root>
										</a>
										<ul  id="mn-sections" class="collapse multi-collapse list-unstyled fourth">
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#mn-mulapannasa" aria-expanded="false">
													<!--  <title>expand</title>+ -->
												</a>
												<a href="https://suttacentral.net/mn-mulapannasa" class="btn d-inline-flex">
													<chapterid>MN 1–50</chapterid>
													<translation>The First Fifty</translation>
													<root>Mūlapaṇṇāsa</root>                        
												</a>
												<ul class="fifth list-unstyled collapse" id="mn-mulapannasa">
													<li>
														<a href="https://suttacentral.net/mn-mulapariyayavagga" class="btn d-inline-flex">
															<chapterid>MN 1–10</chapterid>
															<translation>The Chapter on the Root of All Things</translation>
															<root>Mūlapariyāyavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-sihanadavagga" class="btn d-inline-flex">
															<chapterid>MN 11–20</chapterid>
															<translation>The Chapter on the Lion’s Roar</translation>
															<root>Sīhanādavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-opammavagga" class="btn d-inline-flex">
															<chapterid>MN 21–30</chapterid>
															<translation>The Chapter of Similes</translation>
															<root>Opammavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-mahayamakavagga" class="btn d-inline-flex">
															<chapterid>MN 31–40</chapterid>
															<translation>The Greater Chapter on Pairs</translation>
															<root>Mahāyamakavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-culayamakavagga" class="btn d-inline-flex">
															<chapterid>MN 41–50</chapterid>
															<translation>The Lesser Chapter on Pair</translation>
															<root>Cūḷayamakavagga</root>
														</a>
													</li>
												</ul>
											</li>

											<li>

												<a class="expander" data-bs-toggle="collapse" data-bs-target="#mn-majjhimapannasa" aria-expanded="false">
													<title>expand</title>+
												</a>  
												<a href="https://suttacentral.net/mn-majjhimapannasa" class="btn d-inline-flex">
													<chapterid>MN 50–100</chapterid>
													<translation>The Middle Fifty</translation>
													<root>Majjhimapaṇṇāsa</root>
												</a>
												<ul class="fifth collapse list-unstyled" id="mn-majjhimapannasa">
													<li>
														<a href="https://suttacentral.net/mn-gahapativagga" class="btn d-inline-flex">
															<chapterid>MN 51–60</chapterid>
															<translation>The Chapter on Householders</translation>
															<root>Gahapativagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-bhikkhuvagga" class="btn d-inline-flex">
															<chapterid>MN 61–70</chapterid>
															<translation>The Chapter on Mendicants</translation>
															<root>Bhikkhuvagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-paribbajakavagga" class="btn d-inline-flex">
															<chapterid>MN 71–80</chapterid>
															<translation>The Chapter on Wanderers</translation>
															<root>Paribbājakavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-rajavagga" class="btn d-inline-flex">
															<chapterid>MN 81–90</chapterid>
															<translation>The Chapter on Kings</translation>
															<root>Rājavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-brahmanavagga" class="btn d-inline-flex">
															<chapterid>MN 91–100</chapterid>
															<translation>The Chapter on Brahmins</translation>
															<root>Brāhmaṇavagga</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#mn-uparipannasa" aria-expanded="false">
													<title>expand</title>+
												</a>
												<a href="https://suttacentral.net/mn-uparipannasa" class="btn d-inline-flex">
													<chapterid>101–150</chapterid>
													<translation>The Final Fifty</translation>
													<root>Uparipaṇṇāsa</root>
												</a>
												<ul class="fifth list-unstyled collapse" id="mn-uparipannasa">
													<li>
														<a href="https://suttacentral.net/mn-devadahavagga" class="btn d-inline-flex">
															<chapterid>MN 101–110</chapterid>
															<translation>The Chapter Beginning With Devadaha</translation>
															<root>Devadahavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-anupadavagga" class="btn d-inline-flex">
															<chapterid>MN 111–120</chapterid>
															<translation>The Chapter Beginning with One By One</translation>
															<root>Anupadavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-sunnatavagga" class="btn d-inline-flex">
															<chapterid>MN 121–130</chapterid>
															<translation>The Chapter Beginning with Emptiness</translation>
															<root>Suññatavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-vibhangavagga" class="btn d-inline-flex">
															<chapterid>MN 131–140</chapterid>
															<translation>The Chapter on Analysis</translation>
															<root>Vibhaṅgavagga</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/mn-salayatanavagga" class="btn d-inline-flex">
															<chapterid>MN 141–150</chapterid>
															<translation>The Chapter on the Six Senses</translation>
															<root>Saḷāyatanavagga</root>
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li id="sn" class="linked suttas">

										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#sn-sections">                                  
											<title>Expand</title>+
										</a>  
										<a href="https://suttacentral.net/pitaka/sutta/linked/sn" class="btn d-inline-flex">
											<chapterid>SN</chapterid>
											<translation>Linked Discourses</translation>
											<root>Saṁyuttanikāya</root>
										</a>
										<ul id="sn-sections" class="collapse multi-collapse list-unstyled fourth">
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#sn-sagathavaggasamyutta" aria-expanded="true">                          
													<title>Expand</title>
												</a>
												<a href="https://suttacentral.net/sn-sagathavaggasamyutta" class="btn d-inline-flex">
													<chapterid>SN 1–11</chapterid>
													<translation>The Group of Linked Discourses With Verses</translation>
													<root>Sagāthāvaggasaṁyutta</root>
												</a>
												<ul class="fifth collapse show samyutta list-unstyled" id="sn-sagathavaggasamyutta">
													<li>
														<a href="https://suttacentral.net/sn1" class="btn d-inline-flex">
															<chapterid>sn1</chapterid>
															<translation>Linked Discourses With Deities</translation>
															<root>Devatāsaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn2" class="btn d-inline-flex">
															<chapterid>sn2</chapterid>
															<translation>Linked Discourses on Gods</translation>
															<root>Devaputtasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn3" class="btn d-inline-flex">
															<chapterid>sn3</chapterid>
															<translation>Linked Discourses With King Pasenadi of Kosala</translation>
															<root>Kosalasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn4" class="btn d-inline-flex">
															<chapterid>sn4</chapterid>
															<translation>Linked Discourses With Māra</translation>
															<root>Mārasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn5" class="btn d-inline-flex">
															<chapterid>sn5</chapterid>
															<translation>Linked Discourses With Nuns</translation>
															<root>Bhikkhunīsaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn6" class="btn d-inline-flex">
															<chapterid>sn6</chapterid>
															<translation>Linked Discourses With Brahmā Gods</translation>
															<root>Brahmasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn7" class="btn d-inline-flex">
															<chapterid>sn7</chapterid>
															<translation>Linked Discourses with Brahmins</translation>
															<root>Brāhmaṇasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn8" class="btn d-inline-flex">
															<chapterid>sn8</chapterid>
															<translation>Linked Discourses With Vaṅgīsa</translation>
															<root>Vaṅgīsasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn9" class="btn d-inline-flex">
															<chapterid>sn9</chapterid>
															<translation>Linked Discourses in the Woods</translation>
															<root>Vanasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn10" class="btn d-inline-flex">
															<chapterid>sn10</chapterid>
															<translation>Linked Discourses with Spirits</translation>
															<root>Yakkhasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn11" class="btn d-inline-flex">
															<chapterid>sn11</chapterid>
															<translation>Linked Discourses with Sakka</translation>
															<root>Sakkasaṁyutta</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#sn-nidanavaggasamyutta" aria-expanded="true">                          
													<title>Expand</title>+
												</a>
												<a href="https://suttacentral.net/sn-nidanavaggasamyutta" class="btn d-inline-flex">
													<chapterid>SN 12–21</chapterid>
													<translation>The Group of Linked Discourses Beginning With Causation</translation>
													<root>Nidānavaggasaṁyutta</root>
												</a>
												<ul class="fifth collapse show samyutta list-unstyled" id="sn-nidanavaggasamyutta">
													<li>
														<a href="https://suttacentral.net/sn12" class="btn d-inline-flex">
															<chapterid>sn12</chapterid>
															<translation>Linked Discourses on Causation</translation>
															<root>Nidānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn13" class="btn d-inline-flex">
															<chapterid>sn13</chapterid>
															<translation>Linked Discourses on Comprehension</translation>
															<root>Abhisamayasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn14" class="btn d-inline-flex">
															<chapterid>sn14</chapterid>
															<translation>Linked Discourses on the Elements</translation>
															<root>Dhātusaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn15" class="btn d-inline-flex">
															<chapterid>sn15</chapterid>
															<translation>Linked Discourses on the Unknowable Beginning</translation>
															<root>Anamataggasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn16" class="btn d-inline-flex">
															<chapterid>sn16</chapterid>
															<translation>Linked Discourses with Kassapa</translation>
															<root>Kassapasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn17" class="btn d-inline-flex">
															<chapterid>sn17</chapterid>
															<translation>Linked Discourses on Gains and Honor</translation>
															<root>Lābhasakkārasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn18" class="btn d-inline-flex">
															<chapterid>sn18</chapterid>
															<translation>Linked Discourses with Rāhula</translation>
															<root>Rāhulasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn19" class="btn d-inline-flex">
															<chapterid>sn19</chapterid>
															<translation>Linked Discourses with Lakkhaṇa</translation>
															<root>Lakkhaṇasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn20" class="btn d-inline-flex">
															<chapterid>sn20</chapterid>
															<translation>Linked Discourses with Similes</translation>
															<root>Opammasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn21" class="btn d-inline-flex">
															<chapterid>sn21</chapterid>
															<translation>Linked Discourses with Monks</translation>
															<root>Bhikkhusaṁyutta</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#sn-khandhavaggasamyutta" aria-expanded="true">
													<title>Expand</title>+
												</a>
												<a href="https://suttacentral.net/sn-khandhavaggasamyutta" class="btn d-inline-flex">
													<chapterid>sn 22–34</chapterid>
													<translation>The Group of Linked Discourses Beginning With the Aggregates</translation>
													<root>Khandhavaggasaṁyutta</root>
												</a>
												<ul class="fifth collapse show samyutta list-unstyled" id="sn-khandhavaggasamyutta">
													<li>
														<a href="https://suttacentral.net/sn22" class="btn d-inline-flex">
															<chapterid>sn22</chapterid>
															<translation>Linked Discourses on the Aggregates</translation>
															<root>Khandhasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn23" class="btn d-inline-flex">
															<chapterid>sn23</chapterid>
															<translation>Linked Discourses with Rādha</translation>
															<root>Rādhasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn24" class="btn d-inline-flex">
															<chapterid>sn24</chapterid>
															<translation>Linked Discourses on Views</translation>
															<root>Diṭṭhisaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn25" class="btn d-inline-flex">
															<chapterid>sn25</chapterid>
															<translation>Linked Discourses on Arrival at the Truth</translation>
															<root>Okkantasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn26" class="btn d-inline-flex">
															<chapterid>sn26</chapterid>
															<translation>Linked Discourses on Arising</translation>
															<root>Uppādasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn27" class="btn d-inline-flex">
															<chapterid>sn27</chapterid>
															<translation>Linked Discourses on Corruptions</translation>
															<root>Kilesasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn28" class="btn d-inline-flex">
															<chapterid>sn28</chapterid>
															<translation>Linked Discourses with Sāriputta</translation>
															<root>Sāriputtasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn29" class="btn d-inline-flex">
															<chapterid>sn29</chapterid>
															<translation>Linked Discourses on Dragons</translation>
															<root>Nāgasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn30" class="btn d-inline-flex">
															<chapterid>sn30</chapterid>
															<translation>Linked Discourses on Phoenixes</translation>
															<root>Supaṇṇasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn31" class="btn d-inline-flex">
															<chapterid>sn31</chapterid>
															<translation>Linked Discourses on Centaurs</translation>
															<root>Gandhabbakāyasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn32" class="btn d-inline-flex">
															<chapterid>sn32</chapterid>
															<translation>Linked Discourses on Cloud Gods</translation>
															<root>Valāhakasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn33" class="btn d-inline-flex">
															<chapterid>sn33</chapterid>
															<translation>Linked Discourses with Vacchagotta</translation>
															<root>Vacchagottasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn34" class="btn d-inline-flex">
															<chapterid>sn34</chapterid>
															<translation>Linked Discourses on Absorption</translation>
															<root>Jhānasaṁyutta</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#sn-salayatanavaggasamyutta" aria-expanded="true">
													<title>expand</title> +
												</a>
												<a href="https://suttacentral.net/sn-salayatanavaggasamyutta">
													<chapterid>sn 35–44</chapterid>
													<translation>The Group of Linked Discourses Beginning With the Six Sense Fields</translation>
													<root>Saḷāyatanavaggasaṁyutta</root>
												</a>
												<ul class="fifth collapse show  samyutta list-unstyled" id="sn-salayatanavaggasamyutta">
													<li>
														<a href="https://suttacentral.net/sn35" class="btn d-inline-flex">
															<chapterid>sn35</chapterid>
															<translation>Linked Discourses on the Six Sense Fields</translation>
															<root>Saḷāyatanasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn36" class="btn d-inline-flex">
															<chapterid>sn36</chapterid>
															<translation>Linked Discourses on Feeling</translation>
															<root>Vedanāsaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn37" class="btn d-inline-flex">
															<chapterid>sn37</chapterid>
															<translation>Linked Discourses on Females</translation>
															<root>Mātugāmasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn38" class="btn d-inline-flex">
															<chapterid>sn38</chapterid>
															<translation>Linked Discourses with Jambukhādaka</translation>
															<root>Jambukhādakasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn39" class="btn d-inline-flex">
															<chapterid>sn39</chapterid>
															<translation>Linked Discourses with Samaṇḍaka</translation>
															<root>Sāmaṇḍakasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn40" class="btn d-inline-flex">
															<chapterid>sn40</chapterid>
															<translation>Linked Discourses with Moggallāna</translation>
															<root>Moggallānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn41" class="btn d-inline-flex">
															<chapterid>sn41</chapterid>
															<translation>Linked Discourses with Citta the Householder</translation>
															<root>Cittasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn42" class="btn d-inline-flex">
															<chapterid>sn42</chapterid>
															<translation>Linked Discourses with Chiefs</translation>
															<root>Gāmaṇisaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn43" class="btn d-inline-flex">
															<chapterid>sn43</chapterid>
															<translation>Linked Discourses on the Unconditioned</translation>
															<root>Asaṅkhatasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn44" class="btn d-inline-flex">
															<chapterid>sn44</chapterid>
															<translation>Linked Discourses on the Undeclared</translation>
															<root>Abyākatasaṁyutta</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a class="expander" data-bs-toggle="collapse" data-bs-target="#sn-mahavaggasamyutta" aria-expanded="true">
													<title>expand</title> +
												</a>
												<a href="https://suttacentral.net/sn-mahavaggasamyutta" class="btn d-inline-flex">
													<chapterid>SN 45–56</chapterid>
													<translation>The Group of Linked Discourses on the Path</translation>
													<root>Mahāvaggasaṁyutta</root>
												</a>
												<ul class="fifth collapse show samyutta list-unstyled" id="sn-mahavaggasamyutta">
													<li>
														<a href="https://suttacentral.net/sn45" class="btn d-inline-flex">
															<chapterid>sn45</chapterid>
															<translation>Linked Discourses on the Eightfold Path</translation>
															<root>Maggasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn46" class="btn d-inline-flex">
															<chapterid>sn46</chapterid>
															<translation>Linked Discourses on the Awakening Factors</translation>
															<root>Bojjhaṅgasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn47" class="btn d-inline-flex">
															<chapterid>sn47</chapterid>
															<translation>Linked Discourses on Mindfulness Meditation</translation>
															<root>Satipaṭṭhānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn48" class="btn d-inline-flex">
															<chapterid>sn48</chapterid>
															<translation>Linked Discourses on the Faculties</translation>
															<root>Indriyasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn49" class="btn d-inline-flex">
															<chapterid>sn49</chapterid>
															<translation>Linked Discourses on the Right Efforts</translation>
															<root>Sammappadhānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn50" class="btn d-inline-flex">
															<chapterid>sn50</chapterid>
															<translation>Linked Discourses on the Five Powers</translation>
															<root>Balasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn51" class="btn d-inline-flex">
															<chapterid>sn51</chapterid>
															<translation>Linked Discourses on the Bases of Psychic Power</translation>
															<root>Iddhipādasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn52" class="btn d-inline-flex">
															<chapterid>sn52</chapterid>
															<translation>Linked Discourses with Anuruddha</translation>
															<root>Anuruddhasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn53" class="btn d-inline-flex">
															<chapterid>sn53</chapterid>
															<translation>Linked Discourses on Absorption</translation>
															<root>Jhānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn54" class="btn d-inline-flex">
															<chapterid>sn54</chapterid>
															<translation>Linked Discourses on Breath Meditation</translation>
															<root>Ānāpānasaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn55" class="btn d-inline-flex">
															<chapterid>sn55</chapterid>
															<translation>Linked Discourses on Stream-Entry</translation>
															<root>Sotāpattisaṁyutta</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/sn56" class="btn d-inline-flex">
															<chapterid>sn56</chapterid>
															<translation>Linked Discourses on the Truths</translation>
															<root>Saccasaṁyutta</root>
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<!-- end pi-sn -->
									<li id="an" class="numbered suttas">
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#an-sections">            
											<title>expand</title> +
										</a>  
										<a class="btn d-inline-flex" href="https://suttacentral.net/an" class="btn d-inline-flex">
											<chapterid>AN</chapterid>
											<translation>Numbered Discourses</translation>
											<root>Aṅguttaranikāya</root>
										</a>
										<ul id="an-sections" class="collapse multi-collapse list-unstyled fourth" >
											<li>
												<a href="https://suttacentral.net/an1" class="btn d-inline-flex">
													<chapterid>an1</chapterid>
													<translation>The Book of the Ones</translation> 
													<root>Ekakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an2" class="btn d-inline-flex">
													<chapterid>an2</chapterid>
													<translation>The Book of the Twos</translation> 
													<root>Dukanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an3" class="btn d-inline-flex">
													<chapterid>an3</chapterid>
													<translation>The Book of the Threes</translation> 
													<root>Tikanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an4" class="btn d-inline-flex">
													<chapterid>an4</chapterid>
													<translation>The Book of the Fours</translation> 
													<root>Catukkanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an5" class="btn d-inline-flex">
													<chapterid>an5</chapterid>
													<translation>The Book of the Fives</translation> 
													<root>Pañcakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an6" class="btn d-inline-flex">
													<chapterid>an6</chapterid>
													<translation>The Book of the Sixes</translation> 
													<root>Chakkanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an7" class="btn d-inline-flex">
													<chapterid>an7</chapterid>
													<translation>The Book of the Sevens</translation> 
													<root>Sattakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an8" class="btn d-inline-flex">
													<chapterid>an8</chapterid>
													<translation>The Book of the Eights</translation> 
													<root>Aṭṭhakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an9" class="btn d-inline-flex">
													<chapterid>an9</chapterid>
													<translation>The Book of the Nines</translation> 
													<root>Navakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an10" class="btn d-inline-flex">
													<chapterid>an10</chapterid>
													<translation>The Book of the Tens</translation> 
													<root>Dasakanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/an11" class="btn d-inline-flex">
													<chapterid>an11</chapterid>
													<translation>The Book of the Elevens</translation> 
													<root>Ekādasakanipāta</root>
												</a>
											</li>
										</ul>
									</li>
									<li id="kn" class="minor suttas">
										<a href="#" class="expander" data-bs-toggle="collapse" data-bs-target="#kn-sections" aria-expanded="false">
											<title>expand</title>+
										</a>
										<a href="https://suttacentral.net/kn" class="btn d-inline-flex">
											<chapterid>kn</chapterid>
											<translation>Minor Collection</translation> 
											<root>Khuddakanikāya</root>
										</a>
										<ul id="kn-sections" class="collapse multi-collapse list-unstyled fourth">
											<li>
												<a href="https://suttacentral.net/kp" class="btn d-inline-flex">
													<chapterid>kp</chapterid>
													<translation>Minor Readings</translation> 
													<root>Khuddakapāṭha</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/dhp" class="btn d-inline-flex">
													<chapterid>dhp</chapterid>
													<translation>Sayings of the Dhamma</translation> 
													<root>Dhammapada</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/ud" class="btn d-inline-flex">
													<chapterid>ud</chapterid>
													<translation>Heartfelt Saying</translation> 
													<root>Udāna</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/iti" class="btn d-inline-flex">
													<chapterid>iti</chapterid>
													<translation>So It Was Said</translation> 
													<root>Itivuttaka</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/snp" class="btn d-inline-flex">
													<chapterid>snp</chapterid>
													<translation>Anthology of Discourses</translation> 
													<root>Suttanipāta</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/vv" class="btn d-inline-flex">
													<chapterid>vv</chapterid>
													<translation>Stories of Heavenly Mansions</translation> 
													<root>Vimānavatthu</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/pv" class="btn d-inline-flex">
													<chapterid>pv</chapterid>
													<translation>Stories of Hungry Ghosts</translation> 
													<root>Petavatthu</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/thag" class="btn d-inline-flex">
													<chapterid>thag</chapterid>
													<translation>Verses of the Senior Monks</translation> 
													<root>Theragāthā</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/thig" class="btn d-inline-flex">
													<chapterid>thig</chapterid>
													<translation>Verses of the Senior Nuns</translation> 
													<root>Therīgāthā</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/tha-ap" class="btn d-inline-flex" class="btn d-inline-flex">
													<chapterid>Tha-ap</chapterid>
													<translation>Past Life Legends of the Senior Monks</translation>
													<root>Therāpadāna</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/thi-ap" class="btn d-inline-flex" class="btn d-inline-flex">
													<chapterid>Thi-ap</chapterid>
													<translation>Past Life Legends of the Senior Nuns</translation>
													<root>Therīapadāna</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/bv" class="btn d-inline-flex">
													<chapterid>bv</chapterid>
													<translation>Chronicle of the Buddhas</translation> 
													<root>Buddhavaṁsa</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/cp" class="btn d-inline-flex">
													<chapterid>cp</chapterid>
													<translation>Canon of Conduct</translation> 
													<root>Cariyāpiṭaka</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/ja" class="btn d-inline-flex">
													<chapterid>ja</chapterid>
													<translation>Past Life Stories of the Buddha</translation> 
													<root>Jātaka</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/mnd" class="btn d-inline-flex">
													<chapterid>mnd</chapterid>
													<translation>Longer Exposition</translation> 
													<root>Mahāniddesa</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/cnd" class="btn d-inline-flex">
													<chapterid>cnd</chapterid>
													<translation>Shorter Exposition</translation> 
													<root>Cūḷaniddesa</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/ps" class="btn d-inline-flex">
													<chapterid>ps</chapterid>
													<translation>The Path of Discrimination</translation> 
													<root>Paṭisambhidāmagga</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/ne" class="btn d-inline-flex">
													<chapterid>ne</chapterid>
													<translation>The Guidebook</translation> 
													<root>Netti</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/pe" class="btn d-inline-flex">
													<chapterid>pe</chapterid>
													<translation>Interpretation of the Canon</translation> 
													<root>Peṭakopadesa</root>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/mil" class="btn d-inline-flex">
													<chapterid>mil</chapterid>
													<translation>Questions of King Milinda</translation> 
													<root>Milindapañha</root>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li id="tv-vi" class="text-type vinaya">
								<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#pali-vin" aria-expanded="false">
									<!-- <chapterid>tv vi</chapterid> -->
									<translation>Theravāda Monastic Law</translation>
									<root>Vinayapiṭaka</root>
								</a>
								<ul class="third collapse list-unstyled accordion-button" data-bs-parent="#pali-lang" id="pali-vin">
									<li>
										<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#pli-tv" aria-expanded="false">            
											<title>expand</title>+
										</a> 
										<a href="https://suttacentral.net/pli-tv-vi" class="btn d-inline-flex">
											<chapterid>pli tv vi</chapterid>
											<translation>Rules and Their Analysis</translation></translation>
											<root>Suttavibhaṅga</root>
										</a>
										<ul class="collapse multi-collapse list-unstyled fourth" id="pli-tv">
											<li>
												<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-bu-vb">            
													<title>expand</title>+
												</a> 
												<a href="https://suttacentral.net/pli-tv-bu-vb" class="btn d-inline-flex">
													<chapterid>bu-vb</chapterid>
													<translation>Monks’ Rules and Their Analysis</translation>
													<root>Bhikkhuvibhaṅga</root>
												</a>
												<ul class="fifth list-unstyled collapse" id="pli-tv-bu-vb">
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-pj" class="btn d-inline-flex">
															<chapterid>bu-vb-pj</chapterid>
															<translation>Expulsion</translation>
															<root>Pārājika</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-ss" class="btn d-inline-flex">
															<chapterid>bu-vb-ss</chapterid>
															<translation>Suspension</translation>
															<root>Saṅghādisesa</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-ay" class="btn d-inline-flex">
															<chapterid>bu-vb-ay</chapterid>
															<translation>Undetermined</translation>
															<root>Aniyata</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-np" class="btn d-inline-flex">
															<chapterid>bu-vb-np</chapterid>
															<translation>Relinquishment With Confession</translation>
															<root>Nissaggiya Pācittiya</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-pc" class="btn d-inline-flex">
															<chapterid>bu-vb-pc</chapterid>
															<translation>Confession</translation>
															<root>Pācittiya</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-pd" class="btn d-inline-flex">
															<chapterid>bu-vb-pd</chapterid>
															<translation>Acknowledgment</translation>
															<root>Pāṭidesanīya</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-sk" class="btn d-inline-flex">
															<chapterid>bu-vb-sk</chapterid>
															<translation>Rules for Training</translation>
															<root>Sekhiya</root>
														</a>
													</li>
													<li>
														<a href="https://suttacentral.net/pli-tv-bu-vb-as" class="btn d-inline-flex">
															<chapterid>bu-vb-as</chapterid>
															<translation>Settling Legal Issues</translation>
															<root>Adhikaraṇasamatha</root>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-bi-vb">            
													<title>expand</title>+
													<a href="https://suttacentral.net/pli-tv-bi-vb" class="btn d-inline-flex">
														<chapterid>bi-vb</chapterid>
														<translation>Nuns’ Rules and Their Analysis</translation>
														<root>Bhikkhunīvibhaṅga</root>
													</a>
													<ul class="fifth list-unstyled collapse" id="pli-tv-bi-vb">
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-pj" class="btn d-inline-flex">
																<chapterid>bi-vb-pj</chapterid>
																<translation>Expulsion</translation>
																<root>Pārājika</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-ss" class="btn d-inline-flex">
																<chapterid>bi-vb-ss</chapterid>
																<translation>Suspension</translation>
																<root>Saṅghādisesa</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-np" class="btn d-inline-flex">
																<chapterid>bi-vb-np</chapterid>
																<translation>Relinquishment With Confession</translation>
																<root>Nissaggiya Pācittiya</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-pc" class="btn d-inline-flex">
																<chapterid>bi-vb-pc</chapterid>
																<translation>Confession</translation>
																<root>Pācittiya</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-pd" class="btn d-inline-flex">
																<chapterid>bi-vb-pd</chapterid>
																<translation>Acknowledgment</translation>
																<root>Pāṭidesanīya</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-bi-vb-sk" class="btn d-inline-flex">
																<chapterid>bi-vb-sk</chapterid>
																<translation>Rules for Training</translation>
																<root>Sekhiya</root>
															</a>
														</li>
														<li>            
															<a href="https://suttacentral.net/pli-tv-bi-vb-as" class="btn d-inline-flex">
																<chapterid>bi-vb-as</chapterid>
																<translation>Settling Legal Issues</translation>
																<root>Adhikaraṇasamatha</root>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-kd">            
												<title>expand</title>+
											</a>         
											<a href="https://suttacentral.net/pli-tv-kd" class="btn d-inline-flex">
												<chapterid>kd</chapterid>
												<translation>Chapters on Legal Topics</translation>
												<root>Khandhaka</root>
											</a>
											<ul class="collapse multi-collapse list-unstyled fourth" id="pli-tv-kd">
												<li>
													<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-mv">            
														<title>expand</title>+
													</a>
													<a href="https://suttacentral.net/pli-tv-kd">
														<translation>The Great Chapter</translation>
														<root>Mahāvagga</root>
													</a>

													<ul class="fifth list-unstyled collapse" id="pli-tv-mv">
														<li>
															<a href="https://suttacentral.net/pli-tv-kd1" class="btn d-inline-flex">
																<chapterid>kd1</chapterid>
																<translation>Going Forth</translation>
																<root>Mahākhandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd2" class="btn d-inline-flex">
																<chapterid>kd2</chapterid>
																<translation>Sabbath</translation>
																<root>Uposathak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd3" class="btn d-inline-flex">
																<chapterid>kd3</chapterid>
																<translation>Rains Season</translation>
																<root>Vassūpanāyikak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd4" class="btn d-inline-flex">
																<chapterid>kd4</chapterid>
																<translation>Invitation</translation>
																<root>Pavāraṇāk­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd5" class="btn d-inline-flex">
																<chapterid>kd5</chapterid>
																<translation>Leather</translation>
																<root>Cammak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd6" class="btn d-inline-flex">
																<chapterid>kd6</chapterid>
																<translation>Medicine</translation>
																<root>Bhesajjak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd7" class="btn d-inline-flex">
																<chapterid>kd7</chapterid>
																<translation>Robe-Making Season</translation>
																<root>Kathinak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd8" class="btn d-inline-flex">
																<chapterid>kd8</chapterid>
																<translation>Robes</translation>
																<root>Cīvarak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd9" class="btn d-inline-flex">
																<chapterid>kd9</chapterid>
																<translation>At Campa</translation>
																<root>Campeyyak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd10" class="btn d-inline-flex">
																<chapterid>kd10</chapterid>
																<translation>At Kosambi</translation>
																<root>Kosambakak­khandhaka</root>
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-cu">            
														<title>expand</title>+
													</a>                  
													<a href="https://suttacentral.net/pli-tv-kd">
														<translation>The Lesser Chapter</translation>
														<root>Cūḷavagga</root>
													</a>
													<ul class="fifth list-unstyled collapse" id="pli-tv-cu">
														<li>
															<a href="https://suttacentral.net/pli-tv-kd11" class="btn d-inline-flex">
																<chapterid>kd11</chapterid>
																<translation>Saṅgha Procedures</translation>
																<root>Kammak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd12" class="btn d-inline-flex">
																<chapterid>kd12</chapterid>
																<translation>Probation</translation>
																<root>Pārivāsikak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd13" class="btn d-inline-flex">
																<chapterid>kd13</chapterid>
																<translation>Collected Procedures</translation>
																<root>Samuccayak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd14" class="btn d-inline-flex">
																<chapterid>kd14</chapterid>
																<translation>Settlement</translation>
																<root>Samathak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd15" class="btn d-inline-flex">
																<chapterid>kd15</chapterid>
																<translation>Minor Matters</translation>
																<root>Khuddakavatthuk­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd16" class="btn d-inline-flex">
																<chapterid>kd16</chapterid>
																<translation>Lodgings</translation>
																<root>Senāsanak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd17" class="btn d-inline-flex">
																<chapterid>kd17</chapterid>
																<translation>Schism in the Saṅgha</translation>
																<root>Saṁghabhedakak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd18" class="btn d-inline-flex">
																<chapterid>kd18</chapterid>
																<translation>Duties</translation>
																<root>Vattak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd19" class="btn d-inline-flex">
																<chapterid>kd19</chapterid>
																<translation>Setting Aside the Sabbath</translation>
																<root>Pātimokkhaṭṭhapanak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd20" class="btn d-inline-flex">
																<chapterid>kd20</chapterid>
																<translation>Nuns</translation>
																<root>Bhikkhunik­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd21" class="btn d-inline-flex">
																<chapterid>kd21</chapterid>
																<translation>Council of the Five Hundred</translation>
																<root>Pañcasatikak­khandhaka</root>
															</a>
														</li>
														<li>
															<a href="https://suttacentral.net/pli-tv-kd22" class="btn d-inline-flex">
																<chapterid>kd22</chapterid>
																<translation>Council of the Seven Hundred</translation>
																<root>Sattasatikak­khandhaka</root>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pli-tv-pvr">            
												<title>expand</title>+
											</a> 
											<a href="https://suttacentral.net/pli-tv-pvr" class="btn d-inline-flex">
												<chapterid>pvr</chapterid>
												<translation>The Compendium</translation>
												<root>Parivāra</root>
											</a>
											<ul class="collapse multi-collapse list-unstyled fourth" id="pli-tv-pvr">
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr1.1" class="btn d-inline-flex">
														<chapterid>pvr1.1</chapterid>
														<translation>Laying-Down-Where?</translation>
														<root>Katthapaññattivāra</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr2.1" class="btn d-inline-flex">
														<chapterid>pvr2.1</chapterid>
														<translation>Laying-Down-Where?</translation>
														<root>Katthapaññattivāra</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr3" class="btn d-inline-flex">
														<chapterid>pvr3</chapterid>
														<translation>Summary Of Origins</translation>
														<root>Samuṭṭhānasīsasaṅkhepa</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr4" class="btn d-inline-flex">
														<chapterid>pvr4</chapterid>
														<translation>Consecutive Repetitions</translation>
														<root>Antarapeyyāla</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr5" class="btn d-inline-flex">
														<chapterid>pvr5</chapterid>
														<translation>Synopsis of Settlements</translation>
														<root>Samathabheda</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr6" class="btn d-inline-flex">
														<chapterid>pvr6</chapterid>
														<translation>Questions on the Khandhakas</translation>
														<root>Khandhakapucchāvāra</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr7" class="btn d-inline-flex">
														<chapterid>pvr7</chapterid>
														<translation>Numbered sections</translation>
														<root>Ekuttarikanaya</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr8" class="btn d-inline-flex">
														<chapterid>pvr8</chapterid>
														<translation>Questions on the Beginning of Sabbath</translation>
														<root>Uposathādipucchāvissajjanā</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr9" class="btn d-inline-flex">
														<chapterid>pvr9</chapterid>
														<translation>Exposition Of Reasons</translation>
														<root>Atthavasapakaraṇa</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr10" class="btn d-inline-flex">
														<chapterid>pvr10</chapterid>
														<translation>Collection Of Stanzas</translation>
														<root>Gāthāsaṅgaṇika</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr11" class="btn d-inline-flex">
														<chapterid>pvr11</chapterid>
														<translation>Synopsis Of Legal Questions</translation>
														<root>Adhikaraṇabheda</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr12" class="btn d-inline-flex">
														<chapterid>pvr12</chapterid>
														<translation>An Additional Collection Of Stanzas</translation>
														<root>Codanādipucchāvissajjanā</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr13" class="btn d-inline-flex">
														<chapterid>pvr13</chapterid>
														<translation>Reproving</translation>
														<root>Codanākaṇḍa</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr14" class="btn d-inline-flex">
														<chapterid>pvr14</chapterid>
														<translation>The Lesser Collection</translation>
														<root>Anuvijjakassapaṭipatti</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr15" class="btn d-inline-flex">
														<chapterid>pvr15</chapterid>
														<translation>The Greater Collection</translation>
														<root>Mahāsaṅgāma</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr16" class="btn d-inline-flex">
														<chapterid>pvr16</chapterid>
														<translation>Synopsis of Robe-Making Season</translation>
														<root>Kathinabheda</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr17" class="btn d-inline-flex">
														<chapterid>pvr17</chapterid>
														<translation>Question of Upāli in Sets of Five</translation>
														<root>Upālipañcaka</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr18" class="btn d-inline-flex">
														<chapterid>pvr18</chapterid>
														<translation>Origins of Offenses</translation>
														<root>Atthāpattisamuṭṭhāna</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr19" class="btn d-inline-flex">
														<chapterid>pvr19</chapterid>
														<translation>Second Collection Of Stanzas</translation>
														<root>Dutiyagāthāsaṅgaṇika</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr20" class="btn d-inline-flex">
														<chapterid>pvr20</chapterid>
														<translation>The Sweat Inducing Stanzas</translation>
														<root>Sedamocanagāthā</root>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/pli-tv-pvr21" class="btn d-inline-flex">
														<chapterid>pvr21</chapterid>
														<translation>The Five Divisions</translation>
														<root>Pañcavagga</root>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li> 
								<!-- end vinaya -->
								<li class="text-type"><a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#pali-abhidhamma" aria-expanded="false">


									<!-- <chapterid>Tv Ab</chapterid> -->
									<translation>Systematic Treatises of the Theravāda School </translation>
									<root>Theravāda Abhidhamma</root>
									<blurb>The seven books of the canonical Theravāda Abhidhamma.</blurb>
								</a>
							</li>
							<ul class="list-unstyled third collapse accordion-button" data-bs-parent="#pali-lang" id="pali-abhidhamma">
								<li class="text-group">
									<a href="https://suttacentral.net/ds" class="d-inline-flex btn">
										<chapterid>Ds</chapterid>
										<translation>Compendium of Phenomena </translation>
										<root>Dhammasaṅgaṇī</root>
										<blurb>The Dhammasaṅgaṇī (Compendium of Phenomena) is built on the idea of a <i lang='pi' translate='no'>mātikā</i>, a lists of contents or matrix. A <i lang='pi' translate='no'>mātikā</i> acts as a simple instance of a template that is applied and transformed in ever more complex forms throughout the work. The Dhammasaṅgaṇī <i lang='pi' translate='no'>mātikās</i> list sets of phenomena (<i lang='pi' translate='no'>dhammas</i>). Most of these are doctrinal terms familiar from the suttas, although some are specialized Abhidhamma terms. The Dhammasaṅgaṇī starts with three <i lang='pi' translate='no'>mātikās</i>. The first classifies <i lang='pi' translate='no'>dhammas</i> into 22 sets of three (<i lang='pi' translate='no'>tika</i>), and the next two use sets of two (<i lang='pi' translate='no'>duka</i>), 100 pairs for Abhidhamma terms, and 42 for Sutta terms. The first of the triple sets is the momentous group: wholesome, unwholesome, and undetermined. This serves as a framework for classifying all the various phenomena. While it seems simple enough, even this detail was controversial, as some schools rejected the existence of the undetermined, or morally neutral, category.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/vb" class="d-inline-flex btn">
										<chapterid>Vb</chapterid>
										<translation>Book of Analysis </translation>
										<root>Vibhaṅga</root>
										<blurb>The Vibhaṅga (Book of Analysis) consists of 18 chapters arranged by topic. The list of topics is closely related to the Saṁyutta Nikāya—aggregates, senses, dependent origination, etc. Most of the chapters have a threefold structure. (1) Analysis according to the suttas: this quotes a key passage from the suttas on the relvant topic and offers a modest analysis. (2) Analysis according to the Abhidhamma: applies the sets of synonyms and terms as developed in the Dhammasaṅgaṇī. (3) Catechism: tests the students knowledge with systematic questioning. A few sections, such as Vb 18 Dhammahadaya, do not fit this system. They may have originated as independent treatises.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/dt" class="d-inline-flex btn">
										<chapterid>Dt</chapterid>
										<translation>Discussion of Elements </translation>
										<root>Dhātukathā</root>
										<blurb>The Dhātukathā (Discussion of Elements) shows how the <i lang='pi' translate='no'>mātikās</i> relate to the 5 aggregates, 12 bases and 18 elements. It is organized according to fourteen methods.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/pp" class="d-inline-flex btn">
										<chapterid>Pp</chapterid>
										<translation>Description of Personality Types </translation>
										<root>Puggalapaññatti</root>
										<blurb>The Puggalapaññatti (Designation of Person) departs from the strictly phenomenological approach of most Abhidhamma texts to present a compendium of passages relating to different kinds of individual. These are set out in a <i lang='pi' translate='no'>mātikā</i> listing kinds of individuals numerically organized from one to ten. As suggested by the numerical arrangement, these terms are mostly derived from the Aṅguttara Nikāya, with modest changes in wording. The main concern is to classify personal or psychological tendencies as they relate to the development of the Buddhist path.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/kv" class="d-inline-flex btn">
										<chapterid>Kv</chapterid>
										<translation>Points of Controversy </translation>
										<root>Kathāvatthu</root>
										<blurb>The Kathāvatthu (Points of Controversy) is a collection of over 200 discussions on points of interpretation of Buddhist doctrine. These consist of a debate between unnamed protagonists. Each relies either on logic or quotations from the suttas to support their arguments. Some of the discussions concern central problems in Buddhist philosophy, such as the nature of not-self, or the problem of continuity and impermanence. Many, however, are very minor. While the text does not identify the points of view, most of the significant points may be identified with the doctrines held by various Buddhist schools. Note that none of the controverted points deal with Brahmanical, Jaina, or other non-Buddhist views. Nor are there any significant differences when it comes to the suttas; each debater assumes that they share a common sutta basis. The Kathāvatthu is the only book of the Abhidhamma ascribed by the Theravāda to a specific author, Moggaliputtatissa, a senior monk at the time of King Ashoka. The core of the work probably formed then, but it grew substantially over time. A couple of the core discussions appear to share a common basis with the Vijñānakāya.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/ya" class="d-inline-flex btn">
										<chapterid>Ya</chapterid>
										<translation>The Pairs </translation>
										<root>Yamaka</root>
										<blurb>The Yamaka (Pairs) consists of ten chapters on different topics, starting with the roots of wholesome or unwholesome conduct. It applies a series of pairs of questions, with the object of fully determining the scope of application of terms. For example, are all <i lang='pi' translate='no'>rūpa</i> (physical phenomena) part of the aggregate of physical phenomena? No, because there are idiomatic uses of <i lang='pi' translate='no'>rūpa</i> such as <i lang='pi' translate='no'>evarūpa</i> (“of such a sort”). But are all instances of the aggregate of physical phenomena? Yes.</blurb>
									</a>
								</li>
								<li class="text-group">
									<a href="https://suttacentral.net/patthana" class="d-inline-flex btn">
										<chapterid>Patthana</chapterid>
										<translation>Conditional Relations </translation>
										<root>Paṭṭhāna</root>
										<blurb>Paṭṭhāna (Conditional Relations) sets out a simple <i lang='pi' translate='no'>mātikā</i> listing 24 kinds of condition. For example, the first is the “root condition” (<i lang='pi' translate='no'>hetupaccayo</i>), dealing with how acts are caused by the unwholesome roots of greed, hate, and delusion, or their opposites. This <i lang='pi' translate='no'>mātikā</i> is then applied to the <i lang='pi' translate='no'>mātikās</i> of Dhammasaṅgaṇī, creating a bewildering complexity of possible combinations. The Paṭṭhāna is always heavily abbreviated, but if it were to be fully spelled out, it would probably be the largest book ever created, with many billions of combinations. The Dhammasaṅgaṇī and the Paṭṭhāna bookend the Abhidhamma collection, the first dealing with phenomena, the latter with their relations. While method and the details have expanded considerably, the approach can be seen as a detailed application of the underlying principles of dependent origination.</blurb>
									</a>
								</li>
							</ul>
						</li>
						<!-- end pi-abhidhamma -->        				
					</ul>		
				</li>
				<!-- end pali -->
				<li class="text-language accordion-item">
					<button class="btn d-inline-flex align-items-left collapsed accordion-button" data-bs-toggle="collapse" data-bs-target="#chinese-lang" aria-expanded="false">Chinese</button>

					<ul class="list-unstyled list-unstyled second  accordion-collapse collapse" id="chinese-lang" data-bs-parent="#alllanguages">
						<li class="text-type"><a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#chinese-discourses" aria-expanded="false"><translation>Discourses&nbsp;</translation><root>sūtra</root></a>
							<div  id="chinese-discourses" class="collapse third accordion-button" data-bs-parent="#chinese-lang">
								<ul class="list-unstyled third">
									<li class="text-group">
										<a href="https://suttacentral.net/da" class="btn d-inline-flex">
											<chapterid>DA</chapterid>
											<translation>Long Discourses</translation>
											<root>Dīrghāgama</root>
										</a>
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/da-ot" class="btn d-inline-flex">
											<chapterid>DA ot</chapterid>
											<translation>Other Long Discourses</translation>
											<root>Dīrgha Sūtras</root>
										</a>
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/ma" class="btn d-inline-flex">
											<chapterid>MA</chapterid>
											<translation>Middle  Discourses</translation>
											<root>Madhyamāgama</root>
										</a>
									</li> 
									
									<li class="text-group">
										<a href="https://suttacentral.net/ma-ot" class="btn d-inline-flex">
											<chapterid>MA ot</chapterid>
											<translation>Other Middle  Discourses</translation>
											<root>Other Madhyama Sūtras</root>
										</a> 
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/sa" class="btn d-inline-flex">
											<chapterid>SA</chapterid>
											<translation>Linked Discourses Compilation (1st)</translation>
											<root>Saṁyuktāgama 雜阿含經</root>
										</a> 
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/sa-2" class="btn d-inline-flex">
											<chapterid>SA-2</chapterid>
											<translation>Linked Discourses Compilation (2nd)</translation>
											<root>Saṁyuktāgama (2nd) 別譯雜阿含經</root>
										</a> 
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/sa-3" class="btn d-inline-flex">
											<chapterid>SA-3</chapterid>
											<translation>Linked Discourses Compilation (3nd)</translation>
											<root>Saṁyuktāgama (3rd) 雜阿含經</root>
										</a> 
									</li>
									<li class="text-group">
										<a href="https://suttacentral.net/sa-ot" class="btn d-inline-flex">
											<chapterid>SA-ot</chapterid>
											<translation>Other Linked Discourses</translation>
											<root>Other Saṁyukta Sūtras</root>
										</a> 
										<blurb>22 shorter discourses that in the Taishō edition of the Chinese canon have been gathered in the second volume, at sūtra numbers 102–124, following the three Saṁyuktāgama collections. These are miscellaneous translations of various discourses from the Saṁyutta, made at various times by various translators.</blurb>
									</li>
								</ul>	

							</li>
							<!-- end lzh-sutta -->
							<li class="text-group">
								<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#lzh-vin" aria-expanded="false">

									<translation>Monastic Law</translation>
									<root>Vinaya</root>
								</a>
								<ul class="list-unstyled third collapse  accordion-button" data-bs-parent="#chinese-lang" id="lzh-vin">
									<li class="text-type">

										<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-mg-vin" aria-expanded="false">
											+
										</a>

										<a href="https://suttacentral.net/lzh-mg-vi" class="d-inline-flex btn">
											<chapterid>Lzh Mg Vi</chapterid>
											<translation>Monastic Law of the Mahāsaṅghika School</translation>
											<root>Mahāsaṅghika Vinaya</root>
											<blurb>The Monastic Law for the Mahāsaṁghika school in Chinese. This school originally flourished in the area of Magadha in India and is now extinct. It was created during the first schism, and therefore its Vinaya has some unique features not found in other schools. Most of the Vinaya texts we have today were brought from Pāṭaliputra in India to China by the Chinese monk Faxian. He then translated them into Chinese together with the Indian monk Buddhabhadra from 416–418 CE.</blurb>
										</a>

										<ul id="lzh-mg-vin" class="collapse  fourth list-unstyled"> 
											<li>
												<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-mg-bu-vb" aria-expanded="false">
													+
												</a>
												<a href="https://suttacentral.net/lzh-mg-bu-vb" class="d-inline-flex btn">
													<chapterid>Lzh Mg Bu Vb</chapterid>
													<translation>Monks’ Rules and Their Analysis</translation>
													<root>Bhikkhu Vibhaṅga</root>
													<blurb>The Bhikkhu-vibhaṅga (“the analysis of the monks’ rules”) contains the monastic code for monks, the Bhikkhu-pātimokkha, embedded in explanatory material. The Vibhaṅga is divided into nine chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
												</a>
											</li>
											<ul class="fifth collapse list-unstyled" id="lzh-mg-bu-vb">
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-pj" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Expulsion</translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-ss" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Suspension</translation>
														<root>Saṅghādisesa</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-ay" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Undetermined</translation>
														<root>Aniyata</root>
														<blurb></blurb>
													</a>
												</li>

												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-np" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Relinquishment With Confession</translation>
														<root>Nissaggiya Pācittiya</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-pc" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Confession</translation>
														<root>Pācittiya</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-pd" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Acknowledgment</translation>
														<root>Pāṭidesanīya</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-sk" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Rules for Training</translation>
														<root>Sekhiya</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bu-vb-as" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Settling Legal Issues</translation>
														<root>Adhikaraṇasamatha</root>
														<blurb></blurb>
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="https://suttacentral.net/lzh-mg-bu-pn" class="d-inline-flex btn">
												<chapterid>Lzh Mg Bu Pn</chapterid>
												<translation>Assorted Rules for Monks</translation>
												<root>Bhikkhu Pakiṇṇaka</root>
												<blurb>The Bhikkhu-pakiṇṇaka (“the assorted rules for monks”) is a collection of miscellaneous rules and regulations for monks outside the Pātimokkha. Many of the rules also apply to nuns. This collection only exists in the Mahāsaṁghika school and its sub-schools.</blurb>
											</a>
										</li>
										<li>
											<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-mg-bi-vb" aria-expanded="false">
												+
											</a>
											<a href="https://suttacentral.net/lzh-mg-bi-vb" class="d-inline-flex btn">
												<chapterid>Lzh Mg Bi Vb</chapterid>
												<translation>Nuns’ Rules and Their Analysis</translation>
												<root>Bhikkhunī Vibhaṅga</root>
												<blurb>The Bhikkhunī-vibhaṅga (“the analysis of the nuns’ rules”) contains the monastic code for nuns, the Bhikkhunī-pātimokkha, embedded in explanatory material. The Bhikkhunī-vibhaṅga is divided into eight chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
											</a>
											<ul class="collapse fifth list-unstyled" id="lzh-mg-bi-vb">
												<li>
													<a href="https://suttacentral.net/lzh-mg-bi-vb-pj" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Expulsion</translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>
												<li>
													<a href="https://suttacentral.net/lzh-mg-bi-vb-ss" class="d-inline-flex btn">
														<chapterid></chapterid>
														<translation>Suspension</translation>
														<root>Saṅghādisesa</root>
														<blurb></blurb>
													</a>
												</li>

												<a href="https://suttacentral.net/lzh-mg-bi-vb-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession</translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-vb-np1-10" class="d-inline-flex btn">
													<chapterid> Lzh Mg Bi Vb Np 1–10</chapterid>
													<translation>Nissaggiya Pācittiya 1–10</translation>
													<root>Nissaggiya Pācittiya 1–10</root>
													<blurb></blurb>
												</a>
											</li>


											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-vb-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession</translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-vb-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment</translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-vb-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training</translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-vb-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues</translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="https://suttacentral.net/lzh-mg-bi-pn" class="d-inline-flex btn">
											<chapterid>Lzh Mg Bi Pn</chapterid>
											<translation>Assorted Rules for Nuns</translation>
											<root>Bhikkhunī Pakiṇṇaka</root>
											<blurb>The Bhikkhunī-pakiṇṇaka (“the assorted rules for nuns”) is a collection of miscellaneous rules and regulations for nuns outside the Pātimokkha. This collection only exists in the Mahāsaṁghika school and its sub-schools.</blurb>
										</a>
									</li>

									<li>
										<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-mg-bu-pm" aria-expanded="false">
											+
										</a>
										<a href="https://suttacentral.net/lzh-mg-bu-pm" class="d-inline-flex btn">
											<chapterid>Lzh Mg Bu Pm</chapterid>
											<translation>Monks’ Rules</translation>
											<root>Bhikkhu Pātimokkha</root>
											<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 218 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-mg-bu-pm">
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion</translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension</translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-ay" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Undetermined</translation>
													<root>Aniyata</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession</translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession</translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment</translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training</translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bu-pm-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues</translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<!-- end bu pm   -->
									<li>
										<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-mg-bi-pm" aria-expanded="false">
											+
										</a>
										<a href="https://suttacentral.net/lzh-mg-bi-pm" class="d-inline-flex btn">
											<chapterid>Lzh Mg Bi Pm</chapterid>
											<translation>Nuns’ Rules</translation>
											<root>Bhikkhunī Pātimokkha</root>
											<blurb>The Bhikkhunī-pātimokkha, “the monastic code for nuns,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 290 such rules for the nuns, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-mg-bi-pm">
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion</translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension</translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession</translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession</translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment</translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training</translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-mg-bi-pm-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues</translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
										<!-- end lzh mg bi pm 5 -->
									</li>
									<li id="spp">
										<a href="https://suttacentral.net/lzh-mg-spp" class="d-inline-flex btn">
													<chapterid>spp</chapterid>
													<translation>Questions for Śāriputra</translation>
													<root>Śāriputraparipṛcchā</root>
													<blurb></blurb>
												</a>
									</li>
								</ul>
								<!-- end lz-mg-vin 4 -->
							</li>
							<!-- end lzh-mg-vinaya -->
							<li class="text-type">
								<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-sarv-vi" aria-expanded="false">+</a>

								<a href="https://suttacentral.net/lzh-mg-vi" class="d-inline-flex btn">
									<chapterid>Lzh Sar Vi</chapterid>
									<translation>Monastic Law of the Sāvastivādan School</translation>
									<root>Sāvastivadin Vinaya</root>
									<blurb>The Monastic Law for the Sarvāstivāda school in Chinese. This school spread throughout North India and Central Asia. The Sarvāstivāda Vinaya was the most common Vinaya in China before they changed to the Dharmaguptaka. The Sarvāstivāda school is now extinct. Most of the Vinaya texts we have today were translated from about 404–409 CE by the Kashmiri monks Kumārajīva and Puṇyatāra. When Puṇyatāra died, Dharmaruci replaced him and finished the translation.</blurb>
								</a>



								<ul class="fourth collapse list-unstyled" id="lzh-sarv-vi" >

									<li>
										<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-sarv-bu-vb" aria-expanded="false">+</a>
										<a href="https://suttacentral.net/lzh-sarv-bu-vb" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bu Vb</chapterid>
											<translation>Monks’ Rules and Their Analysis </translation>
											<root>Bhikkhu Vibhaṅga</root>
											<blurb>The Bhikkhu-vibhaṅga (“the analysis of the monks’ rules”) contains the monastic code for monks, the Bhikkhu-pātimokkha, embedded in explanatory material. The Vibhaṅga is divided into eight chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
										</a>


										<ul class="fifth collapse list-unstyled" id="lzh-sarv-bu-vb" >
											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion </translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension </translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-ay" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Undetermined </translation>
													<root>Aniyata</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>
											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-vb-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues </translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>													
										</ul> 											
									</li>	
									<!-- end bu vb-->

									<li>
										<a href="https://suttacentral.net/lzh-sarv-kd" class="d-inline-flex btn">
											<chapterid>Sarv Kd</chapterid>
											<translation>Chapters on Legal Topics </translation>
											<root>Khandhaka</root>
											<blurb>The Khandhakas (“the Chapters”) comprise the rules and regulations of both Sanghas that fall outside of the monastic code, the pātimokkha. There are about 20 individual Khandhakas, most of which discuss a more or less unified topic. The Khandhakas include a variety of material, such as assorted biographical material of a number of eminent disciples and some notorious ones. They also incorporate a few Jātakas and other tales, as well as the stories of the first communal recitation after the Buddha’s passing away and the famous Vesālī affair, sometimes known as “the second council.” The whole collection is structured around the life of the Buddha after his awakening.</blurb>
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-bi-vb" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bi Vb</chapterid>
											<translation>Nuns’ Rules and Their Analysis </translation>
											<root>Bhikkhunī Vibhaṅga</root>
											<blurb>The Bhikkhunī-vibhaṅga (“the analysis of the nuns’ rules”) contains the monastic code for nuns, the Bhikkhunī-pātimokkha, embedded in explanatory material. The Bhikkhunī-vibhaṅga is divided into five chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-sar-bi-vb">
											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion </translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension </translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-vb-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<!-- end bi vb -->
									<li>
										<a href="https://suttacentral.net/lzh-sarv-ve" class="d-inline-flex btn">
											<chapterid>Sarv VE</chapterid>
											<translation>Numbered Passages </translation>
											<root>Ekottara</root>
											<blurb>The Ekottara (“the numbered passages”) is a text found in the Sarvāstivāda and Dharmaguptaka schools. It is a parallel of a chapter in the Theravāda Parivāra.</blurb>
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-upp" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Upp</chapterid>
											<translation>Questions of Upāli </translation>
											<root>Upāliparipucchā</root>
											<blurb>The Upāliparipucchā (“the questions of Upāli”) is found in the Sarvāstivāda school and as two independent texts not affiliated with a school. In other schools, the Upāliparipucchā is included in other works, such as the Mūlasarvāstivāda Uttaragantha and the Theravāda Parivāra.</blurb>
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-ba" class="d-inline-flex btn">
											<chapterid>BA</chapterid>
											<translation>Monks’ Recitation </translation>
											<root>Bhikkhu Ajjhāya</root>
											<blurb>The Bhikkhu-ajjhāya (“the monks’ recitation”) is a text only found in the Sarvāstivāda school.</blurb>
										</a>
									</li>

									<li>
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#lzh-sarv-bu-pm">            
											<title>expand</title>+
										</a> 
										<a href="https://suttacentral.net/lzh-sarv-bu-pm" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bu Pm</chapterid>
											<translation>Monks’ Rules (1st) </translation>
											<root>Bhikkhu Pātimokkha (1st)</root>
											<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 263 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-sarv-bu-pm">

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion </translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension </translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-ay" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Undetermined </translation>
													<root>Aniyata</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues </translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#lzh-sarv-bu-pm-2">            
											<title>expand</title>+
										</a> 

										<a href="https://suttacentral.net/lzh-sarv-bu-pm-2" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bu Pm 2</chapterid>
											<translation>Monks’ Rules (2nd) </translation>
											<root>Bhikkhu Pātimokkha (2nd)</root>
											<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 263 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-sarv-bu-pm-2">

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion </translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension </translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-ay" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Undetermined </translation>
													<root>Aniyata</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bu-pm-2-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues </translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#lzh-sarv-bi-pm">            
											<title>expand</title>+
										</a> 

										<a href="https://suttacentral.net/lzh-sarv-bi-pm" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bi Pm</chapterid>
											<translation>Nuns’ Rules </translation>
											<root>Bhikkhunī Pātimokkha</root>
											<blurb>The Bhikkhunī-pātimokkha, “the monastic code for nuns,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 355 such rules for the nuns, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
										<ul class="fifth collapse list-unstyled" id="lzh-sarv-bi-pm">

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-pj" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Expulsion </translation>
													<root>Pārājika</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-ss" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Suspension </translation>
													<root>Saṅghādisesa</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-as" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Settling Legal Issues </translation>
													<root>Adhikaraṇasamatha</root>
													<blurb></blurb>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#lzh-sarv-bi-pm">            
											<title>expand</title>+
										</a> 

										<a href="https://suttacentral.net/lzh-sarv-bi-pm-dh" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bi Pm Dh</chapterid>
											<translation>Nuns’ Rules (Dunhuang edition) </translation>
											<root>Bhikkhunī Pātimokkha (Dunhaung)</root>
											<blurb>The Bhikkhunī-pātimokkha, “the monastic code for nuns,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 355 such rules for the nuns, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>

										<ul class="fifth collapse list-unstyled"  id="lzh-mg-bi-pm-dh">
											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-dh-np" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Relinquishment With Confession </translation>
													<root>Nissaggiya Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-dh-pc" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Confession </translation>
													<root>Pācittiya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-dh-pd" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Acknowledgment </translation>
													<root>Pāṭidesanīya</root>
													<blurb></blurb>
												</a>
											</li>

											<li>
												<a href="https://suttacentral.net/lzh-sarv-bi-pm-dh-sk" class="d-inline-flex btn">
													<chapterid></chapterid>
													<translation>Rules for Training </translation>
													<root>Sekhiya</root>
													<blurb></blurb>
												</a>													
											</li>
										</ul>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-bu-kam" class="d-inline-flex btn">
											<chapterid></chapterid>
											<translation>Monks’ Legal Proceedings (1st)</translation>
											<root>Bhikkhu Kammavācā (1st)</root>
											<blurb>The Bhikkhu-kammavācā (“the monks’ legal proceedings”) are compilations of the formulas that are recited by monks to carry out the legal proceedings of the Sangha. They were excerpted from the Vibhaṅga.</blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/lzh-sarv-bu-kam-2" class="d-inline-flex btn">
											<chapterid></chapterid>
											<translation>Monks’ Legal Proceedings (2nd)</translation>
											<root>Bhikkhu Kammavācā (2nd)</root>
											<blurb>The Bhikkhu-kammavācā (“the monks’ legal proceedings”) are compilations of the formulas that are recited by monks to carry out the legal proceedings of the Sangha. They were excerpted from the Vibhaṅga.</blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/lzh-sarv-mt" class="d-inline-flex btn">
											<chapterid>Sarv Mt</chapterid>
											<translation>Matrix </translation>
											<root>Mātikā</root>
											<blurb>The Mātikā (“the matrix”) is an outline of Vinaya topics.</blurb>
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-matika" class="d-inline-flex btn">
											<chapterid>lzh-sarv-matika</chapterid>
											<translation>Matrix</translation>
											<root>Mātikā</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/lzh-sarv-vi-misc" class="d-inline-flex btn">
											<chapterid>Misc Sarv Vi</chapterid>
											<translation>Miscellaneous Section of Sarvāstivāda Vinaya </translation>
											<root>Miscellaneous</root>
											<blurb>The miscellaneous section of the Sarvāstivāda Vinaya contains two texts, one on monks’ Vinaya and the other on nuns’ Vinaya.</blurb>
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-sarv-bi-vb-gd" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bi Vb Gd</chapterid>
											<translation>8 Important Principles </translation>
											<root>比丘尼八敬法 (8 Garudhamma)</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/lzh-sarv-bu-vb-29cases" class="d-inline-flex btn">
											<chapterid>Lzh Sarv Bu Vb: 29 Cases</chapterid>
											<translation>29 Cases</translation>
											<root>二十九事 (29 Cases)</root>
											<blurb></blurb>
										</a>
									</li>

								</ul>

							</li>
							<!-- end lzh-sv-vinaya -->										
							<li class="text-type">
								<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#lzh-mu-vi"> <title>expand</title>+</a>  
								<a href="https://suttacentral.net/lzh-mu-vi" class="d-inline-flex btn">
									<chapterid>Lzh Mu Vi</chapterid>
									<translation>Monastic Law of the Mūlasarvāstivāda School</translation>
									<root>Mūlasarvāstivāda Vinaya</root>
									<blurb>The Monastic Law for the Mūlasarvāstivāda school in Chinese. The debate about the origins of this school is still ongoing but it is clear that it had a large influence on Central Asia. Monastics of the Tibetan tradition follow this Vinaya. Most of the Vinaya texts in Chinese we have today were translated between 695 and 713 CE by Yijing. We also have a full Vinaya translation in Tibetan, and a part of the original Sanskrit.</blurb>
								</a>

								<ul id="lzh-mu-vi" class="fifth collapse list-unstyled">
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-bu-vb" class="d-inline-flex btn">
											<chapterid>Lzh Mu Bu Vb</chapterid>
											<translation>Monks’ Rules and Their Analysis</translation>
											<root>Bhikkhu Vibhaṅga</root>
											<blurb>The Bhikkhu-vibhaṅga (“the analysis of the monks’ rules”) contains the monastic code for monks, the Bhikkhu-pātimokkha, embedded in explanatory material. The Vibhaṅga is divided into eight chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-bi-vb" class="d-inline-flex btn">
											<chapterid>Lzh Mu Bi Vb</chapterid>
											<translation>Nuns’ Rules and Their Analysis</translation>
											<root>Bhikkhunī Vibhaṅga</root>
											<blurb>The Bhikkhunī-vibhaṅga (“the analysis of the nuns’ rules”) contains the monastic code for nuns, the Bhikkhunī-pātimokkha, embedded in explanatory material. The Bhikkhunī-vibhaṅga is divided into seven chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-kd" class="d-inline-flex btn">
											<chapterid>Lzh Mu Kd</chapterid>
											<translation>Chapters on Legal Topics</translation>
											<root>Khandhaka</root>
											<blurb>The Khandhakas (“the Chapters”) comprise the rules and regulations of both Sanghas that fall outside of the monastic code, the pātimokkha. There are about 20 individual Khandhakas, most of which discuss a more or less unified topic. The Khandhakas include a variety of material, such as assorted biographical material of a number of eminent disciples and some notorious ones. They also incorporate a few Jātakas and other tales, as well as the stories of the first communal recitation after the Buddha’s passing away and the famous Vesālī affair, sometimes known as “the second council.” The whole collection is structured around the life of the Buddha after his awakening.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-khv" class="d-inline-flex btn">
											<chapterid>Lzh Mu Khv</chapterid>
											<translation>Minor Matters</translation>
											<root>Khuddakavatthu</root>
											<blurb>The Khuddakavatthu (“the minor matters”) is a minor Vinaya work preserved in Chinese and Tibetan translations.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-bu-pm" class="d-inline-flex btn">
											<chapterid>Lzh Mu Bu Pm</chapterid>
											<translation>Monks’ Rules</translation>
											<root>Bhikkhu Pātimokkha</root>
											<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 248 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-bi-pm" class="d-inline-flex btn">
											<chapterid>Lzh Mu Bi Pm</chapterid>
											<translation>Nuns’ Rules</translation>
											<root>Bhikkhunī Pātimokkha</root>
											<blurb>The Bhikkhunī-pātimokkha, “the monastic code for nuns,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 357 such rules for the nuns, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</a>
									</li>
									<li class="text-type">
										<a href="https://suttacentral.net/lzh-mu-bu-kam" class="d-inline-flex btn">
											<chapterid>Lzh Mu Bu Kam</chapterid>
											<translation>Monks’ Legal Proceedings</translation>
											<root>Bhikkhu Kammavācā</root>
											<blurb>The Bhikkhu-kammavācā (“the monks’ legal proceedings”) are compilations of the formulas that are recited by monks to carry out the legal proceedings of the Sangha. They were excerpted from the Vibhaṅga.</blurb>
										</a>
									</li>
								</ul>
							</li>
							<!-- end lzh-mv-vinaya -->												
							<li>
								<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#lzh-ot-vin" aria-expanded="false">Other Chinese Vinaya Texts</a>
								<blurb>
									These are some individual texts that do not belong to any of the schools above. They are either from schools whose Vinaya texts have been mostly lost, or are works that have not yet been attributed to a school.
								</blurb>
								<ul class="collapse fourth list-unstyled" id="lzh-ot-vin">
									<li>
										<a href="https://suttacentral.net/sammitiya" class="btn d-inline-flex">
											<chapterid>sammitiya</chapterid>
											<translation>Treatise of the Saṁmitīya School</translation>
											<root>Saṁmitīya Śāstra (T1461)</root>

											<span class="info">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
												<blurb>
												The Saṁmitīya-śāstra, T1461, is the only extant Vinaya text of the Saṁmitīya school. It consists of 22 verses together with a commentary that analyze the categories of the Vinaya.
												</blurb>
											</span>										
										</a>
									</li>

									<li>
										<a href="https://suttacentral.net/lzh-ka-bu-pm" class="btn d-inline-flex">
											<chapterid>lzh ka bu pm</chapterid>
											<translation>Monks’ Rules of the Kāśyapīya School</translation>
											<root>Kāśyapīya Bhikkhu Pātimokkha</root>

										<span class="info">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
											<blurb>This Bhikkhu-pātimokkha belongs to the Kāśyapīya school. This school was founded by the monks sent to the Himalayan region as missionaries by Aśoka. The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 246 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
										</span>										
										</a>
									</li>
									<li>
										<aa href="https://suttacentral.net/lzh-upp-bu" class="btn d-inline-flex">
											<chapterid>lzh upp bu</chapterid>
											<translation>Questions of Upāli</translation>
											<root>Upāliparipṛcchā (T1466)</root>
										</a>
										<span class="info">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
											<blurb>The Upāliparipucchā (“the questions of Upāli”) is found in the Sarvāstivāda school and as two independent texts not affiliated with a school. In other schools, an Upāliparipucchā is included in other works, such as the Mūlasarvāstivāsa Uttaragantha and the Theravāda Parivāra. This version, 優波離問佛經 at Taishō Vol. 24, No. 1466, was translated by Guṇaśāla in the Song Dynasty in one scroll.</blurb>
										</span>										
									</li>
									<li>
										<aa href="https://suttacentral.net/om" class="btn d-inline-flex">
											<chapterid>Other Mt</chapterid>
											<translation>Matrix</translation>
											<root>Mātikā</root>
										</a>
										<span class="info">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
											<blurb>
												The Mātikā (“the matrix”) is an outline of Vinaya topics.
											</blurb>
										</span>										
									</li>
								</ul>
							</li>
							<!-- end other lzh vin -->
						</ul>		
					</li>
					<!-- end lzh-vinaya -->

					<li class="text-group"><a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#lzh-ab" aria-expanded="false">
						<translation>Systematic Treastise</translation>
						<root>Abhidhamma</root>
						<blurb>Abhidhamma texts are systematic summaries and analyses of the teachings drawn from the earlier discourses. The Abhidhamma (spelled abhidharma in Sanskrit) is intended for advanced students who have mastered the teachings of the discourses.</blurb>
					</a>
					<ul  id="lzh-ab" class="collapse list-unstyled third  accordion-button" data-bs-parent="#chinese-lang">
						<li class="text-type">
							<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-dg-ab" aria-expanded="false"> +</a>
							<a href="https://suttacentral.net/lzh-dg-ab" class="d-inline-flex btn">
								<translation>Systematic Treastise of the Dharmaguptaka school</translation>
								<root>Dharmaguptaka Abhidhamma</root>
								<blurb>Abhidharma of the Dharmaguptaka school in Chinese translation.</blurb>
							</a>
							<ul  id="lzh-dg-ab" class="collapse list-unstyled fourth">
								<li class="text-type">
									<a href="https://suttacentral.net/sab" class="d-inline-flex btn">
										<chapterid>Sab</chapterid>
										<translation>Sāriputta’s Systematic Treatise </translation>
										<root>Śāripūtrābhidharma</root>
										<blurb>The Śāriputrābhidharmaśāstra (Shelifu Apitan Lun, 舍利弗阿毘曇論) is the only extant work of the Dharmaguptaka Abhidhamma, and was translated in thirty facsicles by Dharmayaśas and Dharmagupta in CE 408 at Ch'ang An (長安). It shares some content with the Vibhaṅga and Dharmaskandha, and other details with other texts. It seems this book may contain the entire Abhidhamma system of the Dharmaguptakas. In the Taishō edition of the Chinese canon, it is text number 1548, located at T vol. 28, 525a.</blurb>
									</a>
								</li>
							</ul>
						</li>
						<!-- end lzh-dg-ab -->


						<li class="text-type">
							<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#lzh-sarv-ab" aria-expanded="false"> +</a>
							<a href="https://suttacentral.net/lzh-sarv-ab" class="d-inline-flex btn">
								<translation>Systematic Treastise of the Sarvāstivāda school</translation>
								<root>Sarvāstivāda Abhidhamma</root>
								<blurb>All seven of the canonical texts of Sarvāstivāda Abhidharma are available in Chinese translation. This complex and sophisticated set of treatises was highly influential in later forms of Buddhism especially from Northern India.</blurb>
							</a>
							<ul id="lzh-sarv-ab" class="fourth collapse list-unstyled">
								<li class="text-type">
									<a href="https://suttacentral.net/sg" class="d-inline-flex btn">
										<chapterid>Sg</chapterid>
										<translation>Elucidation of the Discourse of Reciting in Concert </translation>
										<root>Saṅgītiparyāya</root>
										<blurb>Regarded as one of the earliest of the Abhidhamma books, this is essentially a commentary on the Saṅgīti Sutta (DN 33) from the Sarvāstivāda perspective. The full title as recorded in the Chinese text is Abhidharmasaṅgītīparyāyapādaśāstra (Apidamo Ji Yi Men Zu Lun, 阿毘達磨集異門足論). Like all Sarvāstivāda works, the original would have been in Sanskrit. It was written by Mahākausthila (according to the Sanskrit and Tibetan sources) or Śāriputra (according to the Chinese sources). The Chinese recension was translated in 20 fascicles by Xuanzang in CE 660–664. In the Taishō edition of the Chinese canon, it is text number 1536, located at T vol. 26, 367a.</blurb>
									</a>
								</li> 

								<li class="text-type">
									<a href="https://suttacentral.net/vk" class="d-inline-flex btn">
										<chapterid>Vk</chapterid>
										<translation>Groups of Consciousness </translation>
										<root>Vijñānakāya</root>
										<blurb>The full title is Abhidharmavijñānakāyapādaśāstra (Apidamo Shi Shen Zu Lun, 阿毘達磨識身足論).This is a counterpart of the Pali Kathāvatthu, and may share a common historical basis. The text mentions the Theravādin Moggaliputtatissa, author of the Kathāvatthu, as an opponent in the debate on the key Sarvāstivāda doctrine that all phenomena exist in the past, future, and present. The text discusses far fewer points than the Kathāvatthu, however. It was composed by Devakṣema and translated into Chinese in sixteen fascicles by Xuanzang in March 3rd–September 19th, CE 649 at Hung-fa Hall (弘法院), Northern Palace (北-闕), and Tz'uen Monastery (慈恩寺). In the Taishō edition of the Chinese canon, it is text number 1539, located at T vol. 26, 531a.</blurb>
									</a>
								</li> 

								<li class="text-type">
									<a href="https://suttacentral.net/pk" class="d-inline-flex btn">
										<chapterid>Pk</chapterid>
										<translation>Treatise on Phenomena </translation>
										<root>Prakaraṇapada</root>
										<blurb>The full title is Abhidharmaprakaraṇapādaśāstra (Apidamo Pin Lei Zu Lun, 阿毘達磨品類足論). It was composed by Vasumitra and translated in eighteen fascicles by Xuanzang on October 10th–November 30th, CE 660 at Yü-hua Monastery (玉華寺). This was a central Abhidharma treatise, which influenced even non-Sarvāstivādin texts such as the Mahāprajñapāramītopadeśa. In the Taishō edition of the Chinese canon, it is text number 1542, located at T vol. 26, 692b. Another partial translation by Guṇabhadra and Bodhiyaśas in CE 435–443 may be found at T 1541 under the title 衆事分阿毘曇論.</blurb>
									</a>
								</li> 

								<li class="text-type">
									<a href="https://suttacentral.net/jp" class="d-inline-flex btn">
										<chapterid>Jp</chapterid>
										<translation>Establishment of Knowledge </translation>
										<root>Jñānaprasthāna</root>
										<blurb>The full title is Abhidharmajñānaprasthānaśāstra (Apidamo Fa Zhi Zu Lun, 阿毘達磨發智論). It was composed by Kātyāyanīputra and translated in twenty fascicles by Xuanzang on February 14th, 657–June 20th, 660 in Yü-hua Monastery (玉華寺), Hsi-ching (西京). The largest of the Sarvāstivādin Abhidhamma books, this formed the basis for the later Sarvāstivāda treatises, and hence the modern study of Abhidharma especially in Tibetan Buddhism. In the Taishō edition of the Chinese canon, the authoritative translation by Xuanzang is text number 1544, located at T vol. 26, 918a. There was an earlier translation by Saṅghadeva and Zhu-fo-nian in CE 383, which may be found at T 1543, T vol. 26, 771a.</blurb>
									</a>
								</li> 

								<li class="text-type">
									<a href="https://suttacentral.net/mvs" class="d-inline-flex btn">
										<chapterid>Mvs</chapterid>
										<translation>Great Commentary </translation>
										<root>Mahāvibhāṣā Śāstra</root>
										<blurb>The full title is Abhidharmamahāvibhāṣaśāstra (Apidamo Dapiposha Lun, 阿毘達磨大毘婆沙論). This is the major commentarial treatise of the Sarvāstivādin school. It was compiled by Katyāyāniputra, but attributed to 500 arahants around 600 years after the Buddha. This possibly refers to a council held under the auspices of King Kanishka. Translated by Xuanzang August 18th, 656–July 27th, 659. It doesn’t fall within the scope of SuttaCentral, except it contains a few recognized sutta parallels as quotations. In the Taishō edition of the Chinese canon, it is text number 1545, located at T vol. 27, 1a.</blurb>
									</a>
								</li> 

							</ul>
						</li>
						<!-- end lzh-sarv-ab -->
					</ul>
				</li>
				<!-- end lzh-abhidhamma -->		 						
			</ul>
		</div>
	</li>
	<!-- end chinese -->
	<li class="text-language accordion-item">
		<button class="btn d-inline-flex align-items-left collapsed accordion-button" data-bs-toggle="collapse" data-bs-target="#sanskrit-lang" aria-expanded="false">Sanskrit</button>
		<ul id="sanskrit-lang" class="list-unstyled collapse second accordion" data-bs-parent="#alllanguages">
			<li class="text-type">
				<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#san-vin" aria-expanded="false">
					<translation>Monastic Law</translation>
					<root>Vinaya</root>
				</a>

				<ul class="list-unstyled collapse third  accordion-button" data-bs-parent="#sanskrit-lang" id="san-vin">
					<li class="text-group">
						<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#san-mg-vin" aria-expanded="false">            
							<title>expand</title>+
						</a>
						<a href="https://suttacentral.net/san-mg" class="btn d-inline-flex" class="btn d-inline-flex">
							<chapterid>San Mg Vi</chapterid>
							<translation>The Monastic Law of the Mahāsaṁghika School</translation>
							<root>Sanksrit Mahāsaṇghika Vinaya</root>
							<span class="info">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
								<blurb>The Monastic Law for the Mahāsaṁghika school in Sanskrit. This school originally flourished in the area of Magadha in India and is now extinct. It was created during the first schism, and therefore its Vinaya has some unique features not found in other schools. Only the Bhikkhu-pātimokkha has been preserved in Sanskrit.</blurb>
							</span>
						</a>							
						<ul class="list-unstyled collapse third accordion-button" data-bs-parent="#sanskrit-lang" id="san-mg-vin">
							<li class="text-type">
								<a href="https://suttacentral.net/san-mg-bu-pm" class="btn d-inline-flex">
									<chapterid>san-mg-bu-pm</chapterid>
									<translation>Monks Rules</translation>
									<root>Bhikkhu Patimokkha</root>
								</a>
							</li>
						</ul>
					</li>
					<!-- end san-ms-vinaya -->
					<li class="text-type">
						<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#san-lo-vi" aria-expanded="false">            
							<title>expand</title>+
						</a>
						<a href="https://suttacentral.net/san-lo-vi" class="d-inline-flex btn" class="btn d-inline-flex">
							<chapterid>San Lo Vi</chapterid>
							<translation>Monastic Law of the Lokuttaravāda School</translation>
							<root>Sanskrit Lokuttaravāda Vinaya</root>
							<span class="info">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
								<blurb>The Monastic Law for the Lokuttaravāda school in Sanskrit. This is a sub-school of the Mahāsaṁghika and is now extinct. It is not known where the adherents of this school lived, but in the early 7th century, a community existed in Bāmīyan. The text is incomplete, and most of what we have today was discovered in Tibet as palm-leaf manuscripts by Tripiṭakācārya Śri Rāhula Sānkṛtyāyana between 1935–1938. It is of special importance for bhikkhunī Vinaya studies, since it has the only complete Bhikkhunī-vibhaṅga in an Indian language besides the Pāli.</blurb>
							</span>
						</a>
						<ul  id="san-lo-vi" class="collapse list-unstyled  fourth ">
							<li>
								<a href="https://suttacentral.net/san-lo-bi-nidana" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>Nidana</chapterid>
									<translation>Origins</translation>
									<root>Nidāna</root>
									<blurb>The Nidāna (“introduction”) contains the story of the foundation of the nuns’ order and the eight <i lang='pi' translate='no'>garudhamma</i> (“important rules”).</blurb>
								</a>
							</li>
							<li>													
								<a href="https://suttacentral.net/san-lo-bi-vb-nidana-v" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid></chapterid>
									<translation>Origin Story</translation>
									<root>Nidāna</root>
									<blurb></blurb>
								</a>
							</li>
							<li>
								<a href="https://suttacentral.net/san-lo-bi-vb-gd" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid></chapterid>
									<translation>Important Principles</translation>
									<root>Garudhamma</root>
									<blurb></blurb>
								</a>
							</li>
							<li>
								<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#san-lo-bi-vb" aria-expanded="false">            
									<title>expand</title>+
								</a>
								<a href="https://suttacentral.net/san-lo-bi-vb" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>San Lo Bi Vb</chapterid>
									<translation>Nuns’ Rules and Their Analysis</translation>
									<root>Bhikkhunī Vibhaṅga</root>
									<blurb>The Bhikkhunī-vibhaṅga (“the analysis of the nuns’ rules”) contains the monastic code for nuns, the Bhikkhunī-pātimokkha, embedded in explanatory material. The Bhikkhunī-vibhaṅga is divided into eight chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
								</a>

								<ul id="san-lo-bi-vb" class="collapse fifth list-unstyled">
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-pj" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Expulsion</translation>
											<root>Pārājika</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-ss" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Suspension</translation>
											<root>Saṅghādisesa</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-np" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Relinquishment With Confession</translation>
											<root>Nissaggiya Pācittiya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-pc" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Confession</translation>
											<root>Pācittiya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-pd" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Acknowledgment</translation>
											<root>Pāṭidesanīya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bi-vb-sk" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Rules for Training</translation>
											<root>Sekhiya</root>
											<blurb></blurb>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://suttacentral.net/san-lo-bi-pn" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>San Lo Bi Pn</chapterid>
									<translation>Assorted Rules for Nuns</translation>
									<root>Bhikkhunī Pakiṇṇaka</root>
									<blurb>The Bhikkhunī-pakiṇṇaka (“the assorted rules for nuns”) is a collection of miscellaneous rules and regulations for nuns outside the Pātimokkha. This collection only exists in the Mahāsaṁghika school and its sub-schools.</blurb>
								</a>
							</li>
							<li>
								<a href="#" class="expander"  data-bs-toggle="collapse" data-bs-target="#san-lo-bu-pm" aria-expanded="false">            
									<title>expand</title>+
								</a>
								<a href="https://suttacentral.net/san-lo-bu-pm" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>San Lo Bu Pm</chapterid>
									<translation>Monks’ Rules</translation>
									<root>Bhikkhu Pātimokkha</root>
									<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 218 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”) and the <i lang='pi' translate='no'>dhamma-anudhamma</i> (“the rules and their applications”), which are principles to be applied rather than rules in the strict sense.</blurb>
								</a>
								<ul id="san-lo-bu-pm" class="collapse fifth list-unstyled">
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-pj" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Expulsion</translation>
											<root>Pārājika</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-ss" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Suspension</translation>
											<root>Saṅghādisesa</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-ay" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Undetermined</translation>
											<root>Aniyata</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-np" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Relinquishment With Confession</translation>
											<root>Nissaggiya Pācittiya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-pc" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Confession</translation>
											<root>Pācittiya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-pd" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Acknowledgment</translation>
											<root>Pāṭidesanīya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-sk" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Rules for Training</translation>
											<root>Sekhiya</root>
											<blurb></blurb>
										</a>
									</li>
									<li>
										<a href="https://suttacentral.net/san-lo-bu-pm-as" class="d-inline-flex btn" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Settling Legal Issues</translation>
											<root>Adhikaraṇasamatha</root>
											<blurb></blurb>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://suttacentral.net/san-lo-asc" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>San Asc</chapterid>
									<translation>Supplementary Regulations</translation>
									<root>Abhisamācārika</root>
									<blurb>The Abhisamācārika (“the supplementary regulations”) is a text only found in the Mahāsaṅghika school and its sub-schools. The text has been transmitted in a Chinese translation, and in a Sanskrit version that belongs to the Lokuttaravāda school.</blurb>
								</a>
							</li>
							<li>
								<a href="https://suttacentral.net/san-lo-mvu" class="d-inline-flex btn" class="btn d-inline-flex">
									<chapterid>Mvu</chapterid>
									<translation>The Great Story</translation>
									<root>Mahāvastu</root>
									<blurb>The Mahāvastu (“the great story”) is a biography of the Buddha that belongs to the Lokuttaravāda school. It is part of their Vinaya but also includes a large amount of Jātaka and Apadāna stories.</blurb>
								</a>
							</li>

						</ul>
					</li>
					<!-- end san-lo-vi -->
					<li class="text-group">
						<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#san-ot-vin" aria-expanded="false">Other Sanskrit Vinaya Texts</a>
								<blurb>
									These are some individual texts that do not belong to any of the schools above. They are either from schools whose Vinaya texts have been mostly lost, or are works that have not yet been attributed to a school.
								</blurb>
								
						<ul id="san-ot-vin" class="fourth collapse list-unstyled">
											<li class="text-type">
													<a href="https://suttacentral.net/san-bu-pm-qizil" class="d-inline-flex btn">
														<chapterid>San Bu Pm Qizil</chapterid>
														<translation>Monks’ Rules (Qizil edition) </translation>
														<root>Bhikkhu Pātimokkha (Qizil)</root>
														<span class="info">
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
															<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are at least 260 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
														</span>
													</a>
												</li> 
												<ul id="san-bu-pm-qizil" class="fourth collapse">
													 <li class="text-type">
															<a href="https://suttacentral.net/san-bu-pm-qizil-pj" class="d-inline-flex btn">
																<chapterid>null</chapterid>
																<translation>Expulsion </translation>
																<root>Pārājika</root>
															<blurb>null</blurb>
															</a>
														</li> 
													 <li class="text-type">
															<a href="https://suttacentral.net/san-bu-pm-qizil-ss" class="d-inline-flex btn">
																<chapterid>null</chapterid>
																<translation>Suspension </translation>
																<root>Saṅghādisesa</root>
															<blurb>null</blurb>
															</a>
														</li> 
													 <li class="text-type">
															<a href="https://suttacentral.net/san-bu-pm-qizil-np" class="d-inline-flex btn">
																<chapterid>null</chapterid>
																<translation>Relinquishment With Confession </translation>
																<root>Nissaggiya Pācittiya</root>
															<blurb>null</blurb>
															</a>
														</li> 
													 <li class="text-type">
															<a href="https://suttacentral.net/san-bu-pm-qizil-pc" class="d-inline-flex btn">
																<chapterid>null</chapterid>
																<translation>Confession </translation>
																<root>Pācittiya</root>
															<blurb>null</blurb>
															</a>
														</li> 
													 <li class="text-type">
															<a href="https://suttacentral.net/san-bu-pm-qizil-sk" class="d-inline-flex btn">
																<chapterid>null</chapterid>
																<translation>Rules for Training </translation>
																<root>Sekhiya</root>
															<blurb>null</blurb>
															</a>
														</li> 
													</ul>
												</li> 
						</ul>
					</li>
					<!-- end qizil vin -->
				</ul>
				<!-- end san-vin -->
			</li>

			<li class="text-type">
				<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#san-ab" aria-expanded="false">
					<translation>Systematic Treastise&nbsp;</translation>
					<root>Abhidhamma</root>
					<blurb>Abhidhamma texts are systematic summaries and analyses of the teachings drawn from the earlier discourses. The Abhidhamma (spelled abhidharma in Sanskrit) is intended for advanced students who have mastered the teachings of the discourses.</blurb>
				</a>
				<ul  id="san-ab" class="collapse  third list-unstyled  accordion-button" data-bs-parent="#sanskrit-lang">
					<li>
						<a href="https://suttacentral.net/san-sarv-ab" class="d-inline-flex btn">
							<chapterid>san-sarv-ab</chapterid>
							<translation>Systematic Treatises of the Sarvāstivāda School</translation>
							<root>Sarvāstivāda Abhidharma</root>
						</a>

						<!-- end sar-abhi -->
					</ul>
				</li>
				<!-- end san-abhidhamma -->		 												
			</ul>
		</li>	



		<!-- end sanskrit -->			
		<li class="text-language accordion-item">
			<button class="btn d-inline-flex align-items-left collapsed accordion-button" data-bs-toggle="collapse" data-bs-target="#other-lang" aria-expanded="false">Other Languages</button>

			<ul id="other-lang"  class="list-unstyled second accordion-collapse collapse ">
				<li class="text-type sutta otherlang"><a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#other-discourses" aria-expanded="false">
					<translation>Discourses</translation>
					<root>Sūtra</root>
				</a>

				<ul id="other-discourses" class="collapse third list-unstyled  accordion-button" data-bs-parent="#other-lang" >
					<li class="text-group">
						<a href="https://suttacentral.net/do" class="btn d-inline-flex">
							<chapterid>DO</chapterid>
							<translation>Long Discourses</translation></a>
						</li>

						<li class="text-group">
							<a href="https://suttacentral.net/mo" class="btn d-inline-flex">
								<chapterid>MO</chapterid>
								<translation>Middle Discourses</translation>
							</a>
						</li>
					</ul>	

				</li>
				<!-- end oth-sutta -->
				<li class="text-type vinaya otherlang">
					<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#ot-vin" aria-expanded="false">
						<translation>Monastic Law</translation>
						<root>Vinaya</root></a>
						<ul  id="ot-vin" class="collapse  third  list-unstyled  accordion-button" data-bs-parent="#other-lang">
							

							<li class="text-group">
								<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#pgd-dg-vin" aria-expanded="false">
									<chapterid></chapterid>
									<translation>Monastic Law</translation>
									<root>Gandhari Dharmaguptaka Vinaya</root></a>

									<ul  id="pgd-dg-vin" class="collapse  fourth  list-unstyled">
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#pgd-pm"> 
												<title>expand</title>+
											</a>  
											<a href="https://suttacentral.net/pgd-pm" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#pgd-pm" aria-expanded="false">
												<chapterid></chapterid>
												<translation>Monks' Rules</translation>
												<root>Bhikkhu Patimokkha</root>
											</a>
											<ul class="fifth collapse list-unstyled" id="pgd-pm">
												<li>
													<a href="https://suttacentral.net/pgd-pm-bf13-np" class="d-inline-flex btn" class="btn d-inline-flex">
														<chapterid></chapterid>
														<translation>Relinquishment With Confession </translation>
														<root>Nissaggiya Pācittiya</root>
														<blurb></blurb>
													</a>
												</li>										
												<!-- end pgd bu pm -->
											</ul>
										</li>
									</ul>
								</li>
								<!-- end pgd-dg-vinaya -->
								<li class="text-group">
									<a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#xct-ms-vin" aria-expanded="false">

										<chapterid></chapterid>
										<translation>Monastic Law</translation>
										<root>Tibetan Mūlasarvāstivāda Vinaya</root>
									</a>
									
									<ul  id="xct-ms-vin" class="collapse  fourth  list-unstyled">
										<li>
											<a href="https://suttacentral.net/xct-mu-kd" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Kd</chapterid>
												<translation>Chapters on Legal Topics </translation>
												<root>Khandhaka</root>
												<blurb>The Khandhakas (“the Chapters”) comprise the rules and regulations of both Sanghas that fall outside of the monastic code, the pātimokkha. There are about 20 individual Khandhakas, most of which discuss a more or less unified topic. The Khandhakas include a variety of material, such as assorted biographical material of a number of eminent disciples and some notorious ones. They also incorporate a few Jātakas and other tales. The whole collection is structured around the life of the Buddha after his awakening.</blurb>
											</a>
										</li>
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#xct-mu-bu-pm">            
												<title>expand</title>+
											</a>  
											<a href="https://suttacentral.net/xct-mu-bu-pm" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Bu Pm</chapterid>
												<translation>Code of Discipline for Monks</translation>
												<root>Bhikkhu Pātimokkha</root>
												<blurb>The Bhikkhu-pātimokkha, “the monastic code for monks,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 258 such rules for the monks, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
											</a>
											<ul class="fifth collapse list-unstyled" id="xct-mu-bu-pm">
												<li>
													<a href="https://suttacentral.net/xct-mu-bu-pm-pj" class="d-inline-flex btn" class="btn d-inline-flex">
														<chapterid></chapterid>
														<translation>Expulsion </translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>		
											</ul>
										</li>

										
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#xct-mu-bu-vb"> 
												<title>expand</title>+
											</a>  
											<a href="https://suttacentral.net/xct-mu-bu-vb" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Bu Vb</chapterid>
												<translation>Monks’ Rules and Their Analysis </translation>
												<root>Bhikkhu Vibhaṅga</root>
												<blurb>The Bhikkhu-vibhaṅga (“the analysis of the monks’ rules”) contains the monastic code for monks, the Bhikkhu-pātimokkha, embedded in explanatory material. The Vibhaṅga is divided into eight chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them, with the exception of the <i lang='pi' translate='no'>aniyatas</i> (“the undetermined”), and the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
											</a>
											<ul class="fifth collapse list-unstyled" id="xct-mu-bu-vb">

												<li>
													<a href="https://suttacentral.net/xct-mu-bu-vb-pj" class="d-inline-flex btn" class="btn d-inline-flex">
														<chapterid></chapterid>
														<translation>Expulsion </translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>
											</ul>
										</li>
										<!-- end xct mu bu vb	 -->
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#xct-mu-bi-pm"> 
												<title>expand</title>+
											</a>  
											<a href="https://suttacentral.net/xct-mu-bi-pm" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Bi Pm</chapterid>
												<translation>Nuns’ Rules </translation>
												<root>Bhikkhunī Pātimokkha</root>
												<blurb>The Bhikkhunī-pātimokkha, “the monastic code for nuns,” contains the core rules of monastic life in the form of a long list without any explanatory material. There are 366 such rules for the nuns, grouped according to the type of offense incurred for breaking the rule, with the exception of the <i lang='pi' translate='no'>adhikaraṇasamathadhamma</i> (“the principles for resolving legal issues”), which are principles to be applied rather than rules in the strict sense.</blurb>
											</a>

											<ul class="fifth list-unstyled collapse" id="xct-mu-bi-pm">
												<li>
													<a href="https://suttacentral.net/xct-mu-bi-pm-pj" class="d-inline-flex btn" class="btn d-inline-flex">
														<chapterid></chapterid>
														<translation>Expulsion </translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>
											</ul>	
										</li>
										<!-- end xt mu bi pm -->
										<li>
											<a href="#" class="expander" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#xct-mu-bi-vb">            
												<title>expand</title>+
											</a>  
											<a href="https://suttacentral.net/xct-mu-bi-vb" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Bi Vb</chapterid>
												<translation>Nuns’ Rules and Their Analysis </translation>
												<root>Bhikkhunī Vibhaṅga</root>
												<blurb>The Bhikkhunī-vibhaṅga (“the analysis of the nuns’ rules”) contains the monastic code for nuns, the Bhikkhunī-pātimokkha, embedded in explanatory material. The Bhikkhunī-vibhaṅga is divided into six chapters, each dealing with a separate class of rules, grouped according to the offense incurred in breaking them. Each rule together with its explanatory material forms an independent unit, a sub-chapter.</blurb>
											</a>
											<ul class="fifth collapse list-unstyled" id="xct-mu-bi-vb">

												<li>
													<a href="https://suttacentral.net/xct-mu-bi-vb-pj" class="d-inline-flex btn" class="btn d-inline-flex">
														<chapterid></chapterid>
														<translation>Expulsion </translation>
														<root>Pārājika</root>
														<blurb></blurb>
													</a>
												</li>
											</ul>
										</li>	
										<li>
											<a href="https://suttacentral.net/xct-mu-khv" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Khv</chapterid>
												<translation>Minor Matters </translation>
												<root>Khuddakavatthu</root>
												<blurb>The Khuddakavatthu (“the minor matters”) is a minor Vinaya work preserved in Chinese and Tibetan translations.</blurb>
											</a>
										</li>
										<li>
											<a href="https://suttacentral.net/xct-mu-bu-kam" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>Xct Mu Kam</chapterid>
												<translation>Monks’ Legal Proceedings </translation>
												<root>Bhikkhu Kammavācā</root>
												<blurb>The Bhikkhu-kammavācā (“the monks’ legal proceedings”) are compilations of the formulas that are recited by monks to carry out the legal proceedings of the Sangha. They were excerpted from the Vibhaṅga.</blurb>
											</a>
										</li>
										<li>
											<a href="https://suttacentral.net/xct-mu-utg" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>xct mu utg</chapterid>
												<translation>Aappendix (1st)</translation>
												<root>Uttaragantha (1st)</root>
												<blurb>The first Uttaragantha (“the first appendix”) contains appendices, such as the Upāliparipucchā (“the questions of Upāli”) which is a parallel of a chapter in the Theravāda Parivāra.</blurb>
											</a>
										</li>
										<li>
											<a href="https://suttacentral.net/xct-mu-utg-2" class="d-inline-flex btn" class="btn d-inline-flex">
												<chapterid>xct mu utg 2</chapterid>
												<translation>Aapendix (2nd)</translation>
												<root>Uttaragantha (2nd)</root>
												<blurb>The first Uttaragantha (“the first appendix”) contains appendices, such as the Upāliparipucchā (“the questions of Upāli”) which is a parallel of a chapter in the Theravāda Parivāra.</blurb>
											</a>
										</li>
									</ul>
								</li>
								<!-- end xtc-nu-vi -->										

								<li class="text-group"><a href="#" class="d-inline-flex btn"  data-bs-toggle="collapse" data-bs-target="#other-vin" aria-expanded="false">
												<chapterid></chapterid>
												<translation>Other Vinaya Texts</translation>
												<root></root>
									<span class="info">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
										<blurb>
										These are some individual texts that do not belong to any of the schools above. They are either from schools whose Vinaya texts have been mostly lost, or are works that have not yet been attributed to a school.
										</blurb>
									</span>
									</a>
								<ul class="collapse fourth list-unstyled" id="other-vin">
									<li>
										<a href="https://suttacentral.net/pgd-pm-bf13" class="btn d-inline-flex">
											<chapterid></chapterid>
											<translation>Monks' Rules</translation>
											<root>Bhikkhu Pāṭimokkha</root>

											<span class="info">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
												<blurb>
												Pāṭimokkha in Gandhari
												</blurb>
											</span>										
										</a>
									</li>

							<!-- end other-vin -->										
						</ul>

					</ul>

				</li>
				<!-- end other -->			
			</ul>
		</nav>
	</aside>`;
}
