var main = [ // 所有正餐
    小七 = {
        title: "7-11",
        meals: [
            { name: "　　　　咖哩飯", price: 65 },
            { name: "　　　　握弁當", price: 39 },
            { name: "　　　國民便當", price: 55 },
        ]
    },
    阿美廚房 = {
        title: "阿美廚房",
        meals: [
            { name: "　　滷肉飯(大)", price: 50 },
            { name: "　　　　　炒飯", price: 60 }
        ]
    },
    瑞鴻小吃 = {
        title: "瑞鴻小吃",
        meals: [
            { name: "　擔擔麵(麻辣)", price: 50 },
            { name: "　　牛肉醬拌麵", price: 70 }
        ]
    },
    兩披索 = {
        title: "兩披索",
        meals: [
            { name: "　　大腸臭臭鍋", price: 120 },
            { name: "　　招牌石頭鍋", price: 120 }
        ]
    },
    楊家小館 = {
        title: "楊家小館",
        meals: [
            { name: "　　肉燥飯(大)", price: 45 },
            { name: "　　　乾麵(大)", price: 45 },
            { name: "　　干貝辣拌麵", price: 60 }
        ]
    }
]

var drink = [ // 所有飲料
    五十嵐 = {
        title: "50嵐",
        meals: [
            { name: "阿薩姆紅茶(中)", price: 20 },
            { name: "阿薩姆紅茶(大)", price: 25 },
            { name: "　茉莉綠茶(中)", price: 20 },
            { name: "　茉莉綠茶(大)", price: 25 },
            { name: "　黃金烏龍(中)", price: 20 },
            { name: "　黃金烏龍(大)", price: 25 },
            { name: "四季春青茶(中)", price: 20 },
            { name: "四季春青茶(大)", price: 25 },
            { name: "　波霸奶茶(中)", price: 30 }
        ]
    },
    喫茶小舖 = {
        title: "喫茶小舖",
        meals: [
            { name: "　桂花烏龍", price: 25 }
        ]
    }
]

function mainbs() { // main sort by shop
    if (v3 == "random") {
        console.log("\n ====== 什麼都不挑的你，可能想吃 ======\n")
        for (a = 0; a < main.length; a++) {
            for (b = 0; b < main[a].meals.length; b++) {
                ra = ri(0, (main.length)) // random shop
                rb = ri(0, (main[ra].meals.length)) //random 品項
                cc = main[ra].meals[rb].name
                trn = cc.trim()
                console.log("   ", main[ra].title, "的", trn, "(", main[ra].meals[rb].price, "元 )")
                break
            }
            break
        }
    }
    else if (typeof (v3) !== "string") {
        console.log("\n ====== 以下為所有正餐的選擇 ======\n")
        for (var i in main) {
            x = main[i] //店家
            console.log("   ■", x.title, "\n")
            for (var j in x.meals) {
                y = x.meals[j] //x.meals[j] 品項
                zn = y.name //x.meals[j].name 品項名
                zp = y.price //x.meals[j].price 品項價格
                console.log("   　□", zn, "---------------", "$", zp)
            }
            console.log(" ")
        }
    }
    else { //指定預算上限
        dic = []
        for (a = 0; a < main.length; a++) {
            for (b = 0; b < main[a].meals.length; b++) {
                if (main[a].meals[b].price <= v3) {
                    console.log(main[a].title)
                    zzz = main[a].meals[b].name
                    zzz1 = zzz.trim()
                    // console.log("zzz1 = ",zzz1)
                    dic.push(main[a]) // 店名
                    dic[a].title = (main[a], "=====")
                    dic[a].name = zzz1 // 品名
                    dic[a].price = main[a].meals[b].price // 價格
                }
            }
            // console.log("阿美 = ",dic[a].price)
        }
        console.log("dic = ", dic)
        // console.log("阿美 = ",dic[a].price)
        // console.log("dic = ",dic.name)
        // console.log("dic = ",dic[0][0])
        // ra = ri(0, arrayname.length - 1) // random shop
        // console.log("ra = ",ra)
        // rb = arrayprice[ra] //random 品項
        // // console.log("ra = ", ra)
        // // console.log(arrayname[ra])
        // console.log("\n如果預算有", v3, "元的話，我猜你想吃這個：\n")
        // console.log("   ", main[ra].title, "的", arrayname[ra], "(", rb, "元 )")
    }
}

//==================================================================================
//==================================================================================

function drinkbs() { // drink sort by shop
    if (v3 == "random") {
        console.log("\n ====== 什麼都不挑的你，可能想喝 ======\n")
        for (a = 0; a < drink.length; a++) {
            for (b = 0; b < drink[a].meals.length; b++) {
                ra = ri(0, (drink.length)) // random shop
                rb = ri(0, (drink[ra].meals.length)) //random 品項
                cc = drink[ra].meals[rb].name
                trn = cc.trim()
                console.log("   ", drink[ra].title, "的", trn, "(", drink[ra].meals[rb].price, "元 )")
                break
            }
            break
        }
    }
    else if (typeof (v3) !== "string") {
        console.log("\n ====== 以下為所有飲料的選擇 ======\n")
        for (var i in drink) {
            x = drink[i] //店家
            console.log("   ■", x.title, "\n")
            for (var j in x.meals) {
                y = x.meals[j] //x.meals[j] 品項
                zn = y.name //x.meals[j].name 品項名
                zp = y.price //x.meals[j].price 品項價格
                console.log("   　□", zn, "---------------", "$", zp)
            }
            console.log(" ")
        }
    }
    else { //指定預算上限
        for (a = 0; a < drink.length; a++) {
            for (b = 0; b < drink[a].meals.length; b++) {
                rn = ri(0, (drink[a].meals.length)) // random number
                console.log("\n預算低於", v3, "元的話，我猜你想喝這個：\n")
                na = drink[a].meals[rn].name
                trn = na.trim()
                console.log("   ", drink[a].title, "的", trn, "(", drink[a].meals[rn].price, "元 )")
                break
            }
            break
        }
    }
}

function ri(a, b) { return Math.floor(a + Math.random() * (b - a)); } //random integer
function rs(a) { return a[ri(0, a.length)]; } //random select 

v2 = process.argv[2];
v3 = process.argv[3];


if (v2 == "info" || v2 == "help") { // 說明
    console.log("\n「 我是一個機器人，儘管沒有人工智慧，但我能幫你推薦晚餐 ^^")
    console.log("   只可惜我們之前沒有翻譯蒟蒻，所以我們之間沒辦法溝通 T^T")
    console.log("   但是莫急 莫慌 莫害怕，只要學會以下的單字跟文法，我們還是能做朋友唷 :D 」\n")
    console.log("   ★ 字母是空格的編號   (x)   (y)") // v2 = (x), v3 = (y)
    console.log("      > node project.js _____ _____\n")
    console.log("   ☆ 在考慮要吃正餐還是喝飲料？　試著將 (x) 設為 main 或 drink")
    console.log("      > node project.js main // 所有的正餐應有盡有 ")
    console.log("      > node project.js drink // 所有的飲料任君挑選 \n")
    console.log("   ★ 呃，可以看一下全部的菜單嗎？　沒問題，把 (x) 設定為 all 吧！")
    console.log("      > node project.js all\n")
    console.log("   ☆ 患有選擇障礙症末期？　別擔心，在 (y) 的欄位輸入 random")
    console.log("      > node project.js all random // 我不挑，任何正餐或飲料都可以")
    console.log("      > node project.js main random // 如果你現在很餓，就輸入這個吧！")
    console.log("      > node project.js drink random // 口渴了？讓我來幫你推薦飲料吧！\n")
    console.log("   ★ 想設定預算上限？　將 (y) 設定為一個正整數!")
    console.log("      > node project.js drink 10 // 10塊錢的飲料可能只有麥香了QQ \n")
}
if (v2 == "main") {
    mainbs()
}

if (v2 == "drink") {//顯示所有飲料
    drinkbs()

}

if (v2 == "all") {
    console.log("\n ====== 你想吃的跟能喝都列出來囉～ ======")
    mainbs()
    drinkbs()
}