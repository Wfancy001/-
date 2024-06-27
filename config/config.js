var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "吴凡",
    sex: "男",
    age: "21",
    phone: "15679227567",
    email: "WF1836641391@Outlook.com this`s true",
    address: "现居江西省庐山市",
    qq: "1836641391",
    log: "个人简历",
    excpect_work: "web前端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是吴凡，景德镇艺术职业大学大三在读学生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫吴凡，性别男，景德镇艺术职业大学大三在读。目前的期望岗位是web前端开发</p>" +
        "<p>我计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当。</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["工作能力", 80, "red"],
            ["人缘", 77, "blue"],
            ["工作态度", 85, "#1abc9c"],
            ["人品", 87, "rgba(0,0,0)"],
            ["工作速度", 70, "yellow"],
            ["学习能力", 90, "pink"]
        ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "", "期末作业", "这里记录了我网页设计的学习成果<br>2024/6"],
        ["./images/pro-2.png", "", "网购学堂展示", "<br>2024/6"],
        ["./images/pro-3.png", "", "读者反馈", ""]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["————————", "",
            "<p><strong>暂无工作经历，期待您的联系。</strong></p>" +
            "<p></p>" +
            "<p></p>"
        ],

        ["————————", "",
            "<p><strong>暂无工作经历，期待您的联系。</strong></p>" +
            "<p></p>" +
            "<p></p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["01", "机动车驾驶证", ""],
        ["02", "日语N3证书", ""],
        ["03", "计算机二级证书", ""],
        ["04", "教师资格证", ""]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["", "", ""],
        ["", "", ""],
        ["./svg/github.svg", "https://github.com/Wfancy001", "我的GitHub主页"],
        ["", "", ""],
        ["", "", ""]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
