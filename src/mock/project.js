import Mock from "mockjs";
Mock.mock("/api/project","get", {
    code: 0,
    msg: "",
    data: [
      {
        id: "@guid",
        name: "学生信息管理",
        url: "http://82.156.113.48:8080/student",
        github: null,
        description: ["这是学校课设的一个小demo，没有写后台，原生js写的"],
        thumb: "@image(300x250, @color, #fff, student)",
      },
      {
        id: "@guid",
        name: "推箱子",
        url: "http://82.156.113.48:8080/pushbox/",
        github: null,
        description: ["es6模块化小案例，写的第一个模块化小demo"],
        thumb: "@image(300x250, @color, #fff, push)",
      },
      {
        id: "@guid",
        name: "网易云音乐",
        url: "http://82.156.113.48:8080/qqmusic/html/",
        github: null,
        description: ["使用自动化构建工具gulp搭建的一个移动端小项目"],
        thumb: "@image(300x250, @color, #fff, music)",
      },
      {
        id: "@guid",
        name: "Todos",
        url: "http://82.156.113.48:8080/todos",
        github: null,
        description: ["vue3经典小案例"],
        thumb: "@image(300x250, @color, #fff, todos)",
      },
      {
        id: "@guid",
        name: "StarBucks",
        url: "http://82.156.113.48:8080/starbucks",
        github: null,
        description: ["bootstrap实战，仿写星巴克主页，响应式布局"],
        thumb: "@image(300x250, @color, #fff, StarBucks)",
      },
    ],
})