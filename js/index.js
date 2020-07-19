// get the references to active HTML elements 

const btns = document.querySelectorAll('.controls button'); // event target object

const newContent = document.querySelector('.new-content');

// create event handler

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'c1'){
       
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/clean-power.jpg" alt="Clean Power"/>
                                <figcaption>Clean Power</figcaption>
                             </figure>
                             <p>Renewable fuels are fuels produced from renewable resources. Examples include: biofuels and Hydrogen fuel. This is in contrast to non-renewable fuels such as natural gas, LPG, petroleum and other fossil fuels and nuclear energy.
                            </p>`;       
        
       
    } else if(clickedButton.value === 'c2'){
        
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/bio-fuels.jpg" alt="Bio Fuels"/>
                                <figcaption>Bio Fuels</figcaption>
                             </figure>
                             <p>Alongside reducing energy demand and boosting the use of clean
                                electricity, we will continue to
                                require liquid and gas fuels  in
                                transportation, heating and cooling,
                                and some industrial processes. We
                                must reduce the impact of those
                                fuels by expanding Canada’s capacity
                                to produce and use cleaner fuels –
                                biofuels and biogas from plants and
                                waste, for example – that can heat
                                homes, power vehicles and support
                                manufacturing with much less carbon
                                pollution.
                            </p>`; 
    } else {
        
         newContent.innerHTML=`<figure class="newContent">
                                <img src="img/oil-cleaner.jpg" alt="Oil Cleaners"/>
                                <figcaption>Bio Fuels</figcaption>
                             </figure>
                             <p>In the changing global marketplace,
                                competitiveness in the oil and gas
                                sector will depend on cutting both
                                costs and greenhouse gas emissions.
                                By improving efficiency, using
                                clean power and cleaner fuels, and
                                introducing new technologies to
                                capture and store carbon emissions,
                                Canada’s oil and gas industry can
                                shrink its carbon footprint and
                                increase its energy productivity. 
                            </p>`; 
    }
    
    
}

//register event-target-object for specific type of event

//btns[0].addEventListener('click', addContent);
//btns[1].addEventListener('click', addContent);


for(let btn of btns){
  btn.addEventListener('click', addContent);
}
