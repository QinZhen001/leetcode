require("expose-loader?$!./js/jquery-3.3.1.min.js");
require("./index.less")


//
// $.ajax({
//   type: "GET",
//   url: "<%= url %>" + "/" + index,
//   dataType: "json",
//   success: function (data) {
//     let fragment = document.createDocumentFragment();
//     data.forEach((item) => {
//       let liNode = document.createElement("li")
//       let aNode = document.createElement("a")
//       let imgNode = document.createElement("img")
//       let pNode = document.createElement("p")
//       imgNode.src = item.pic
//       pNode.innerHTML = item.title
//       aNode.href = item.videourl
//       //target="_blank" rel="noreferrer"
//       aNode.target = "_blank"
//       aNode.rel = "noreferrer"
//       aNode.appendChild(imgNode)
//       liNode.appendChild(aNode)
//       liNode.appendChild(pNode)
//       fragment.appendChild(liNode)
//     })
//     let $minUl = getMinUl(index);
//     $minUl.append(fragment);
//   },
//   error: function (err) {
//     console.log(err)
//   }
// })

$(function () {
  let page = 1
  loadView()

  function loadView() {
    loadPartView(page)
    loadPartView(page + 1)
    loadPartView(page + 2)
    page = page + 3
  }

  function loadPartView(index) {
    let res = require(`./json/final${index}.json`)
    let fragment = document.createDocumentFragment();
    res.forEach((item) => {
      let liNode = document.createElement("li")
      let aNode = document.createElement("a")
      let imgNode = document.createElement("img")
      let pNode = document.createElement("p")
      imgNode.src = item.headImgUrl
      pNode.innerHTML = `${item.nickname} 捐助    <span class="money">¥${item.amt}</span>`
      pNode.className = "center-text"
      aNode.href = item.headImgUrl
      //target="_blank" rel="noreferrer"
      aNode.target = "_blank"
      aNode.rel = "noreferrer"
      aNode.appendChild(imgNode)
      liNode.appendChild(aNode)
      liNode.appendChild(pNode)
      fragment.appendChild(liNode)
    })
    let $minUl = getMinUl(index);
    $minUl.append(fragment);
    console.log(res)
  }

  $(window).scroll(function () {
    let contentH = $(document).height();    //内容高度
    let scrollH = $(this).scrollTop();    //滚动高度
    let viewH = $(this).height();    //可视高度
    if (contentH - viewH - scrollH <= 100) {
      loadView()
    }
  });


  function getMinUl(index) {
    let $arrUl = $("#container .col");
    //index和eq对应关系 1=>0 2=>1 3=>2  4=>0 5=>1 6=>2 ...
    switch (index % 3) {
      case 1:
        return $arrUl.eq(0);
      case 2:
        return $arrUl.eq(1);
      case 0:
        return $arrUl.eq(2);
    }
  }
})