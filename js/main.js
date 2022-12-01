/*=============== FILTERS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]') 


tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { /* tc = tabcontent*/
            tc.classList.remove('filters_active')
            
        })

        target.classList.add('filters_active')

        tab.forEach(t => { /**t = tab */
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/ 