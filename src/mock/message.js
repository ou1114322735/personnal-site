import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://img1.baidu.com/it/u=224248240,3138149232&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=589031203,4105143245&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=3120829687,3157190929&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=2859109585,1551346018&fm=15&fmt=auto&gp=0.jpg",
          ],
        },
      ],
    },
  });
});
