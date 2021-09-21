import request from "./request.js";

//获取博客列表数据
export async function getBlogTypes(){
    return await request.get("/api/blogtype");
}


//获取所有博客类型
export async function getBlog(page=1,limit=10,categoryid=-1){
    return await request.get("/api/blog", {
        params:{
            page,
            limit,
            categoryid,
        }
    });
}

//获取单个博客
export async function getSingleBlog(id){
    return await request.get(`/api/blog/${id}`);
}

//提交评论
export async function postComment(commentInfo){
    return await request.post(`/api/comment`,commentInfo);
}

//分页获取评论
export async function getComment(page=1,limit=10,blogid=-1){
    return await request.get(`/api/comment`);
}