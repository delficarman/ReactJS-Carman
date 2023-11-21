import axios from "axios";


const searchImages = async ()=> {
    
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID Jm8v2huW3ZTtfqz5WL55kZL5C3gErfWPmOVlE60m6zg"
        },
        params:{
            query:"Dogs"
        }
    })

    console.log(response);

}

export default searchImages;