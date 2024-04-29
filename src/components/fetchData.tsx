import axios from "axios";
import { Cheerio} from "cheerio";

async function fetchData(){
    try {
    const url="http://localhost:3000/twitter/AN_ILIAD/status/1784865042791547185"
    const response = await axios.get(url);
    const html = response.data;
    console.log(html)
    } catch(error){
        console.error('프록시 데이터 가져오다 오류남', error)
    }
}
export default fetchData;