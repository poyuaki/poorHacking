let hackingContents = {
  text:[
    "const TARGET_IP: number = document.read(\"./info/target.txt\", 1);",
    "　",
    "const console:useConsoleObj = wireguraapi.console();",
    "try{",
    "console.getEventListener(\"ip\",event=>{",
    "if(ip === TARGET_IP){",
    "const con: boolean = console.challengeRequest(ip);",
    "console.viewText(\"wait\");",
    "/* success */",
    "if(con){",
    "const sendFile: string = \"./virus/love_mail.exe\";",
    "console.viewSuccess(\"success\");",
    "　",
    "while(console.capacity(ip) < 100) console.sendData(ip, sendFile, \"auto\");",
    "if(console.capacity(ip) === 100){",
    "console.breakIp(ip,\"no-conf\");",
    "console.blockProtocol(\"TCP\",\"UDP\");",
    "console.makeBackDoor();",
    "console.exit();",
    "}",
    "}else{",
    "const targetDocument: string = console.document(\"target_log\");",
    "targetDocument.addText(`date:${console.getDate()}\\nipAdress:${ip}\\n`);",
    "　",
    "const macAdress: number = console.arp(ip);",
    "console.breakMacAdress(macAdress,\"no-conf\");",
    "}",
    "}else{",
    "const memoryDocument: string = console.document(\"ip_log\");",
    "memoryDocument.addText(`date:${console.getDate()}\\nipAdress:${ip}\\n`);",
    "}",
    "}",
    "}catch(error){",
    "console.viewError(error);",
    "const errorDocument: string = console.document(\"error_log\");",
    "errorDocument.addText(`date:${console.getDate()}\\n);",
    "if(console.isAttackedVirus){",
    "console.reset();",
    "const myIp: number = console.userInfo.ip;",
    "console.changeIpAddress(myIp);",
    "console.close();",
    "if(!console.open()){",
    "const attackIp: number = console.moreIp();",
    "document.write(\"./info/target.txt\", String(attackIp));",
    "end();",
    "}",
    "}",
    "}",
  ],
  test:[
  ],
  deep: 0,
  nowIndex: 0, //どこの文字を表示するのか
  nowTextCount: 0, //どこの言葉を表示するのか
  complete: false, //入力が完了したか
  end: false, //success画面を出すか
  error: false, //エラーを出すか
  errorId: 0, //エラーID
  errorMessage:[
    "Fatal Error:Invalid code!<br>Press the Enter key to refresh!",
    "Fatal Error:Failed to send message!",
    "Warning:The variable \"Udon\" was not found.",
    "Warning:The function \"soba\" was not found.",
    "Warning:I'm looking for a happy ending to Nier.",
    "Fatal Error:Devola and Popola is very cute."
  ],
  errorIdList: [], //現在表示しているエラーIDを格納する配列
  isPhone: false, //スマホかどうか
  deleteCursor: false,
  isViewFooter: true,
  colorObj: {
    colorType: ['chartreuse', 'white'],
    nowColorIndex: 0
  }
}

//スマホモードかどうかを非同期通信で確認
fetch("./isPhone.php")
.then(function (response) { return response.json() }) //JSONに変換
.then(function (data) {
    if (data.isPhone == "1") {
      document.getElementById("alert").style.display = "block"
      document.getElementById("alert").innerHTML = "This site is for only PC."
    }
})

/**
 * Pタグを生成
 *
 * @param {Number} id pタグに付与するIDの頭の数
 */
function createNewP (id) {
  let el = document.createElement("p")
  el.setAttribute("id",`text-${id}`)
  let parent = document.getElementById("main")
  parent.appendChild(el)
  document.getElementById(`text-${id}`).style.marginLeft = `${hackingContents.deep * 30 + 5}px`
  document.getElementById(`text-${id}`).classList.add("text")
}

/**
 * エラーアラートを生成する
 *
 * @param {Number} id pタグに付与するIDの頭の数
 */
function createNewErorr (id) {
  if (hackingContents.errorIdList > 50) return
  const el = document.createElement("p")
  el.setAttribute("id",`error-${id}`)
  const parent = document.getElementById("alert-div")
  parent.appendChild(el)
  const target = document.getElementById(`error-${id}`)
  target.classList.add("alert")
  target.classList.add("error")
  const top = Math.random() * 95
  const left = Math.random() * 95
  const index = Math.floor(Math.random() * hackingContents.errorMessage.length)
  target.style.top = `${top}%`
  target.style.left = `${left}%`
  target.innerHTML = hackingContents.errorMessage[index]
  if(hackingContents.errorIdList.length > 20){
    document.body.style.backgroundColor = "red"
  }
  hackingContents.errorIdList.push(id)
}

function ChangeTextColor () {
  const targetColorText = hackingContents.colorObj.colorType[hackingContents.colorObj.nowColorIndex]
  for (let i = 0; i < hackingContents.colorObj.colorType.length; i++) {
    const isTarget = document.getElementById(targetColorText + 'Font') === document.getElementById(hackingContents.colorObj.colorType[i] + 'Font')
    if (isTarget) {
      const elements = document.getElementsByClassName('text')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = targetColorText
      }
      document.getElementById(hackingContents.colorObj.colorType[i] + 'Font').style.opacity = '0.5'
    } else {
      document.getElementById(hackingContents.colorObj.colorType[i] + 'Font').style.opacity = '1'
    }
  }
}

createNewP(hackingContents.nowTextCount) //初回のタグ生成

/**
 * ハッキング成功時の動作
 */
function CompleteHacking () {
  if(hackingContents.complete) return
  document.getElementById("alert").innerHTML = "Confirmed code generation.<br>Press enter to run this code."
  hackingContents.complete = true
  document.getElementById("alert").classList.add("areyouready")
  document.getElementById("alert").style.display = "block"
}

document.addEventListener("keydown", event => {
  let key = event.key // イベントキーの取得
  if (key == "Shift" && !hackingContents.end) { // shiftキーが押されたら
    if (hackingContents.error) createNewErorr(++hackingContents.errorId)
    /* 最初に表示するアラートの生成 */
    let target = document.getElementById("alert")
    target.classList.add("error")
    target.innerHTML = "Fatal Error:Invalid code!<br>Press the Enter key to refresh!"
    target.style.display = "block"
    hackingContents.error = true
    return
  }
  if (key == "Enter" && hackingContents.error) { // エラーアラートを削除
    let target = document.getElementById("alert")
    target.classList.remove("error")
    target.style.display = "none"
    hackingContents.error = false
    for (let i = 0;i < hackingContents.errorIdList.length;i++) {
      setTimeout(() => {
        document.getElementById(`error-${hackingContents.errorIdList[0]}`).remove()
        hackingContents.errorIdList.shift()
      }, i * 100) // 100ms間隔で順番に削除
    }
    return
  }
  else if (key === 'Control') {
    document.getElementById('footer').style.display = 'block'
    hackingContents.isViewFooter = true
  } else if (key !== 'Enter') {   // エンターキーでなければ
    if ((key === 'ArrowLeft' || key === 'ArrowRight') && hackingContents.isViewFooter) {
      if (key === 'ArrowLeft' && hackingContents.colorObj.nowColorIndex != 0) hackingContents.colorObj.nowColorIndex--
      else if (key === 'ArrowRight' && hackingContents.colorObj.nowColorIndex + 1 !== hackingContents.colorObj.colorType.length) hackingContents.colorObj.nowColorIndex++
      ChangeTextColor()
    } else {
      document.getElementById('footer').style.display = 'none'
      hackingContents.isViewFooter = false
    }
    // 全ての文字を打ち切れたら
    if (hackingContents.nowTextCount == hackingContents.text.length) {
      CompleteHacking()
      return
    }
    let subNum = 3 // 一回キーを入力した時にすすむ文字数
    // もしも残りの文字数がsubNum未満だったら
    if (hackingContents.text[hackingContents.nowTextCount].length - document.getElementById(`text-${hackingContents.nowTextCount}`).innerText.length < subNum) {
      subNum = hackingContents.text[hackingContents.nowTextCount].length - document.getElementById(`text-${hackingContents.nowTextCount}`).innerText.length
    }
    // 表示する文字を取得
    const addChar = hackingContents.text[hackingContents.nowTextCount].substr(hackingContents.nowIndex, subNum)
    document.getElementById(`text-${hackingContents.nowTextCount}`).innerHTML += addChar
    hackingContents.nowIndex += subNum

    // インデントの調整
    if ((addChar.substr(addChar.length - 1,1) == "}" || addChar.substr(0,1) == "}") && (hackingContents.nowIndex == hackingContents.text[hackingContents.nowTextCount].length || hackingContents.nowIndex - subNum === 0)) {
      hackingContents.deep--
      document.getElementById(`text-${hackingContents.nowTextCount}`).style.marginLeft = `${hackingContents.deep * 30 + 5}px`
    }else if (addChar.substr(addChar.length - 1,1) == "{" && hackingContents.nowIndex == hackingContents.text[hackingContents.nowTextCount].length) {
      hackingContents.deep++
    }

    // もしも今の言葉が全て埋まったら
    if (hackingContents.nowIndex == hackingContents.text[hackingContents.nowTextCount].length) {
      document.getElementById(`text-${hackingContents.nowTextCount}`).style.border = "none"
      hackingContents.nowIndex = 0 // 初期化
      hackingContents.nowTextCount++
      createNewP(hackingContents.nowTextCount) //新たなpタグを生成
      /* 画面の一番下にスクロール */
      let element = document.documentElement
      let bottom = element.scrollHeight - element.clientHeight
      window.scroll(0, bottom)
      ChangeTextColor()
    }
  }else if (key == "Enter" && hackingContents.complete && !hackingContents.end) {
    // コンプリート
    hackingContents.end = true
    document.getElementById("alert").style.display = "none"
    let el = document.createElement("p")
    el.setAttribute("id",`wait`)
    let parent = document.getElementById("main")
    parent.appendChild(el)
    document.getElementById("wait").classList.add("text")
    document.getElementById("wait").style.border = "none"
    document.getElementById("wait").innerHTML = "wait"
    let element = document.documentElement
    let bottom = element.scrollHeight - element.clientHeight
    window.scroll(0, bottom)
    for (let i = 1; i < 5; i++) {
      setTimeout(() => {
        document.getElementById("wait").innerHTML += "."
      }, i * 1000)
    }
    setTimeout(() => {
      let el = document.createElement("p")
      el.setAttribute("id",`success`)
      el.setAttribute("class",`success`)
      let parent = document.getElementById("main")
      parent.appendChild(el)
      document.getElementById("success").innerHTML = "success"
      let show = true
      setInterval(() => {
        if(show) document.getElementById("success").style.display = "none"
        else document.getElementById("success").style.display = "block"
        show = !show
      }, 1000)
    }, 5000)
  }
})

/* カーソルの点滅を行う */
setInterval(() => {
  hackingContents.deleteCursor = !hackingContents.deleteCursor
  if (hackingContents.deleteCursor) document.getElementById(`text-${hackingContents.nowTextCount}`).style.borderRight = "solid #000 0px"
  else document.getElementById(`text-${hackingContents.nowTextCount}`).style.borderRight = "10px #aaa solid"
}, 1 * 1000)
