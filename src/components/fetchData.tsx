import axios from "axios";
import { Cheerio} from "cheerio";

async function fetchData(){
  const url="https://twitter.com/mhom_face/status/1784840288185598242"
  const response = await axios.get(url);
  const html = response.data;

  console.log(html)

}
export default fetchData;