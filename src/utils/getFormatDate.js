
export default function (timestamp,getAll) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date
        .getDate()
        .toString()
        .padStart(2, "0");
    let str =  `${date.getFullYear()}-${month}-${day}`;
    if(getAll) {
        const hour = date.getHours().toString().padStart(2,"0");
        const minute = date.getMinutes().toString().padStart(2,"0");
        const sec = date.getSeconds().toString().padStart(2,"0");
        str+=` ${hour}:${minute}:${sec}`
        return str;
    }
    return str;

}