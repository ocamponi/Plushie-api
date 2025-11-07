// fetch items from API endpoint and populate the content div
// NOTE: the API route is `/plushies` (defined in `routes/api.js`).
// Using `/data` will return 404 because no such route exists.
const getData = async () => {
    const response = await fetch('/plushies')
    if (response.ok) {
        const data = await response.json()
        document.querySelector('#content').innerHTML = `<h3>✅ MongoDB connected. </h3>`
        console.log(data)
        data.forEach(item => {
            let div = document.createElement('div')
            div.textContent = item.name
            document.querySelector('#content').appendChild(div)
        })
    }
    else {
        document.querySelector('#content').innerHTML = `<div>❌ MongoDB is not connected. Please check your connection string in .env file.</div>`
    }

}

getData()
