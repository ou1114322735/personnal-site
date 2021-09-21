import request from "./request";
export async function getPersonal(){
    let data = await request.get("/api/resume");
    console.log(data);
    return  data
}
