const nombre = document.getElementById("name")
const descripcion = document.getElementById("description")
const geo = document.getElementById("geo_coordinates")
const transito = document.getElementById("transit")
const locacion = document.getElementById("location")

const form = document.getElementById("form")

    form.addEventListener("submit", e=> {
        

        let entrar = false

            if (nombre.value.length < 5)  {
                alert("Name box empty")
                entrar = true
            }

            if (descripcion.value.length < 5)  {
                alert("Description box empty")
                entrar = true
            }

            if (geo.value.length < 5)  {
                alert("GeoCoordinates box empty")
                entrar = true
            }

            if (transito.value.length < 5)  {
                
                entrar = true
            }

            if (locacion.value.length < 5)  {
        
                entrar = true
            }

            if (entrar) {
                alert("Any box empty")
                e.preventDefault()
            }

    })