import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    //"/md/resume",
    {
        text: "开发日志",
        icon: "book",
        link: "/md/dev-log/day01.md",
    },
    {
        text: "并发编程",
        icon: "gears",
        link: "/md/并发编程",
        line: "/md/并发编程/day01.md"
    },
]);
