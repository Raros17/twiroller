import axios from "axios";
async function fetchData(){
    try {
    const url="http://localhost:3000/naver.com/"
    const response = await axios.get(url);
    const html = response.data;
    console.log(html)
    } catch(error){
        console.error('프록시 데이터 가져오다 오류남', error)
    }
}
export default fetchData;
//http://localhost:3000/twitter/09queen04/status/1784948172990886199