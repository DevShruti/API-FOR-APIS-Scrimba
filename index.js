/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
  let response = await fetch(`https://api.publicapis.org/entries`)
   let data = await response.json()
   console.log(data)
   return data
}
function getAPIhtml(myAPI) {
    
}

function displayAPIs(myAPIs) {
        console.log(myAPIs.entries[0])
        let sampleAPIs = myAPIs.entries[0]
        document.body.innerHTML = `<div class = "my-api">
           <div class = "my-api-name">
           <a href="${sampleAPIs.Link}"target="_blank">
           ${sampleAPIs.API} (${sampleAPIs.Category}) </a>
           </div>
           <div class = "my-api-description">${sampleAPIs.Description}</div>
           <div class = "my-api-auth">${sampleAPIs.Auth ? sampleAPIs.Auth : 'none' }</div>
           <div class = "my-api-HTTPS">HTTPS? ${sampleAPIs.HTTPS}</div>
          </div>`
}

getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))