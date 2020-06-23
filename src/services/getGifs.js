const apiKey = '7cpjcXqLGULE4BqK2UrGWDBNspSvz5v3'




export default function getGifs({ keyword = 'corazonvioleta' } = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

    return fetch(apiUrl)
        .then(resp => resp.json())
        .then(response => {
            const { data } = response

            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {images, title, id}= image
                    const{url}= images.downsized_medium
                    return{ title, id, url}
                })
                return gifs;
            }
        })
}
