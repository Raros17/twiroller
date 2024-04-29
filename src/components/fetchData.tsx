import axios from "axios";
import { Cheerio} from "cheerio";

async function fetchData(){
    try {
    const url="http://localhost:3000/twitter/llllback/status/1784864219088998514"
    const response = await axios.get(url);
    const html = response.data;
    console.log(html)
    } catch(error){
        console.error('프록시 데이터 가져오다 오류남', error)
    }
}
export default fetchData;