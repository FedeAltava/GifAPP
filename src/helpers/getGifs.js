export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lbtaS4TeDXv0Y6PkuV7tiWIPaXnQa7H3&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    
    return gifs;
  } catch(error) {
    console.error("Error al contactar con la api:", error);
    throw new Error("Error al contactar con la api");
  }
};
