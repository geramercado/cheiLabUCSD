window.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('#search')
    const tableContainer = document.querySelector('#results tbody')
    const resultsContainer = document.querySelector('#resultsContainer')
    const errorsContainer = document.querySelector('.errorsContainer')
    let search_criteria = ''

    if(search){
        search.addEventListener('input', event => {
            search_criteria = event.target.value.toUpperCase()
            showResults()
        })
    }

    // send request using fetch
        const searchData = async () => {
            let searchData = new FormData()
            searchData.append('search_criteria', search_criteria)

            try {

                const response = await fetch('./search_data.php', {
                    method: 'POST',
                    body: searchData
                })

                return response.json()
                
            } catch (error) {
                alert(`${'We have a problen, this is: '}${error.message}`)
                console.log(error)
            }
        } 
        

        
        // funtion to show data
        const showResults = () => {
            searchData()
            .then(dataResults => {
                console.log(dataResults)

                tableContainer.innerHTML = ''

                if (typeof dataResults.data !== 'undefined' && !dataResults.data) {
                    errorsContainer.style.display = 'block'
                    errorsContainer.querySelector('p').innerHTML = `No results` 
                    resultsContainer.style.display = 'none'
                    
                } else {
                    resultsContainer.style.display = 'block'
                    errorsContainer.style.display = 'none'

                    for (const build of dataResults) {
                        const row = document.createElement('tr')
                        row.innerHTML = `
                        
                        <td>${build.id_building}</td>
                        <td>${build.name}</td>
                        <td>${build.description}</td>
                        <td>${build.geo_coordinates}</td>
                        <td>${build.transit}</td>
                        <td>${build.location}</td>
                        `
                        tableContainer.appendChild(row)
                    }
                }

            })
           
        }

    showResults()

} )