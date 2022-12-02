/*Filtrering*/
/***
 * 
 */
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]') 


tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { 
            tc.classList.remove('filters_active')
            
        })

        target.classList.add('filters_active')

        tab.forEach(t => { 
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
    
})

/*Mörkt läge*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'



// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*Scroll animering*/ 
const sr = ScrollReveal({
origin:'top',
distance:'60px',
duration:2500,
delay:400,
})

sr.reveal('.profile_border')
sr.reveal('.profile_name', {delay:500})
sr.reveal('.profile_profession', {delay:600})
sr.reveal('.profile_social', {delay:700})
sr.reveal('.profile_info-group', { interval:100,delay:700}) 
sr.reveal('.profile_buttons', {delay:800})
sr.reveal('.profile_content', {delay:900})
sr.reveal('.filters', {delay:1000})
sr.reveal('.footer_copy', {delay:700})