import Mock from "mockjs";
Mock.mock("/api/resume", "get", {
    code: 0,
    msg: "",
    data: {
        personalInformation: {   //个人信息
            name: "欧儒",
            age: "18",
            sex: "男",
            address: "陕西西安",
            nation: "汉族",
            telephone: "15229863020",
            education: "本科",
            email: "1114322735@qq.com"
        },
        
        jobIntention:{      //求职意向
            position:"web前端开发工程师",
            city:"浙江杭州",
            salary:"12k * 16",
            entryTime:"2022.10.16",
        },

        educationBackground:{       //教育背景
            time:"2018.9 - 2022.6",
            university:"西安科技大学",
            major:"软件工程(本科)",
        },

        'itSkill|10':[   //个人技能
            {
                id: "@guid",
                description: "@cparagraph(1,3)",
            }
        ],

        project:[  //项目
            {
                name:"个人博客",
                background:"这是学校课设的一个小demo，没有写后台，原生js写的",
                "problem|3-5":[{
                    problem:"@cparagraph(1,3)",
                    id:"@guid"
                }],
                time:"2020.1-2020.3",
                role:"前端开发",
                id:"@guid"
            },
            {
                name:"学生系统",
                background:"这是学校课设的一个小demo，没有写后台，原生js写的",
                "problem|3-5":[{
                    problem:"@cparagraph(1,3)",
                    id:"@guid"
                }],
                time:"2020.1-2020.3",
                role:"前端开发",
                id:"@guid",
            }
        ],
        'awards|5':[{title:"@ctitle(5,15)",time:"@Date"}],
        
        'personalEvaluation|5':[  //个人评价
            "@cparagraph(3,10)"
        ]
    },
})