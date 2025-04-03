
export const GifGrid = ( { category } )=>{
    const getGifts = async()=>{
        const url = `http://api.giphy.com/v1/gifs/search?api_key=lbtaS4TeDXv0Y6PkuV7tiWIPaXnQa7H3&q=${category}&limit=20`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img=>({
            id: img.id,
            title: img.title,
            url : img.images.downsized_medium.url
        }));

        console.log(gifs)
    }
    getGifts();
    return (

        <>
            <h3>{ category }</h3>
        </>
    )
}