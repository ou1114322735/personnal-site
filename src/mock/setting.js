import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
      avatar: "http://www.duyiedu.com/source/img/logo.png",
      siteTitle: "欧儒的个人空间",
      github: "my-github",
      qq: "1114322735",
      qqQrCode:
      "http://i2.tiimg.com/735597/1a876b53a92d7449.jpg",
      weixin: "15229863020",
      blog:"https://blog.csdn.net/weixin_45270885?spm=1011.2124.3001.5343",
      weixinQrCode:
        "http://i2.tiimg.com/735597/1a876b53a92d7449.jpg",
      mail: "1114322735@qq.com",
      icp: "Copyright ©2020 by OR",
      githubName: "ouru's github",
      favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
  });