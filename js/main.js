var settings = {
  url: "https://api.akilliticaretim.com/api/Product/ListProducts/0",
  method: "GET",
  timeout: 0,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YjJmNjM4YS0xZGM4LTRmMjAtODdjMC03MDc3MDM5YWM3ZjYiLCJ1c2VyaWQiOiIxMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZ3VpZCI6IkEzQTctQ0QzQS1GRUI2LTE1QTMiLCJleHAiOjE2NDIzNzMyMTUsImlzcyI6Imh0dHBzOi8vd3d3LmFraWxsaXRpY2FyZXQuY29tLyIsImF1ZCI6Imh0dHBzOi8vd3d3LmFraWxsaXRpY2FyZXQuY29tLyJ9.cg0OerLhazYCtMzr2gLN6FNY3UWD0kUjL_kcffNGBxQ",
    GUID: "A3A7-CD3A-FEB6-15A3",
    accept: "application/json",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response.data);
  var data = response.data;

  for (var i = 0; i < data.length; i++) {
    var value = parseInt(data[i].price, 10) / 3;
    var fixedValue = value.toFixed(2);
    var newValue = parseInt(data[i].price, 10).toFixed(2);

    var row = $(
      "<div class='showcase'><div class='imageWrapper'><img src='https://via.placeholder.com/900x900' alt='Ürün Resmi'> </div><div class='productDetails' id='productDetails'><h4 class='title'>" +
        data[i].name +
        "</h4><h5 class='price'>" +
        newValue +
        "TL </h5><span class='taksit'><strong>Taksitli Fiyatı:</strong> 3x " +
        fixedValue +
        " TL</span> </div><div class='showcaseHover'><div class='inputCount'><div class='inputContainer'><input class='form-control qtyValue' type='text' value='1'></div><div class='minusPlusContainer'><div><i class='increaseQty fa-solid fa-plus'></i></div><div><i class='decreaseQty fa-solid fa-minus'></i></div></div></div><div class='actionBTNs'><a class='hover-butons' title='Sepete Ekle'><i class='fa-solid fa-bag-shopping'></i></a><a class='hover-butons' title='Favorilere Ekle'><i class='fa-regular fa-heart'></i></a><a title='Karşılaştır' class='hover-butons'><i class='fa-solid fa-code-compare'></i>	</a></div>    <a href='#' class='inspectProductBTN'>Ürünü İncele<i class='fa-solid fa-angle-right'></i>		</a>    </div></div>"
    );
    $("#productList").append(row);
  }
});

var on = false;
var headerScroll = function () {
  if (document.body.clientWidth >= 992) {
    if (document.documentElement.scrollTop > 190) {
      if (!on) {
        $("header .h-top").slideUp();
        $("header .h-midle").slideUp();
      }
      on = true;
    } else {
      if (on) {
        $("header .h-top").slideDown();
        $("header .h-midle").slideDown();
      }
      on = false;
    }
  }
};
headerScroll();
window.onscroll = function () {
  headerScroll();
};

$("#showRegister").click(function () {
  $(".ModalBodyLogin").hide();
  $(".ModalBodyRegister").show();
});
$("#showLogin").click(function () {
  $(".ModalBodyRegister").hide();
  $(".ModalBodyLogin").show();
});

$(".iconSearch").click(function () {
  $("#dT_top-sticky").fadeIn();
});

$(document).ready(function () {
  $(".iconSearch").click(function (event) {
    showModal();
    event.stopPropagation();
  });
  $(".dT_TopStickySearchCloseBtn").click(function () {
    hideModal();
    hideSearchContent();
  });

  $("#dT_top-sticky").click(function (event) {
    event.stopPropagation();
  });
});

function showModal() {
  $("#dT_top-sticky").fadeIn("slow");
  (function fun() {
    $(".modal-content").css({ transform: "translateY(-50px)" });
  })();
}

function hideModal() {
  $("#dT_top-sticky").fadeOut("fast");
  (function fun2() {
    $(".modal-content").css({ transform: "translateY(0px)" });
  })();
}

var show_sidebar_categories = false;
$(".btn-sidebar-categories").click(function () {
  $(".sidebar-menu .categories").slideToggle("fast");
  if (show_sidebar_categories) {
    $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
  } else {
    $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  show_sidebar_categories = !show_sidebar_categories;
});
$(".btn-categories-show").click(function () {
  var id = $(this).data("id");
  $(".sidebar-menu .categories .categories-list-" + id).slideToggle("fast");
});

$(document).ready(function () {
  "use strict";
  $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
  $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
  $(".menu > ul > li").hover(function (e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  $(".menu > ul > li").click(function () {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });
});
$(window).resize(function () {
  $(".menu > ul > li").children("ul").hide();
  $(".menu > ul").removeClass("show-on-mobile");
});

$(document).ready(function () {
  var minVal = 1,
    maxVal = 20;
  $(".increaseQty").on("click", function () {
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function () {
      $(".clicked").removeClass("clicked");
    }, 100);
    var value = $parentElm.find(".qtyValue").val();
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qtyValue").val(value);
  });

  $(".decreaseQty").on("click", function () {
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function () {
      $(".clicked").removeClass("clicked");
    }, 100);
    var value = $parentElm.find(".qtyValue").val();
    if (value > 1) {
      value--;
    }
    $parentElm.find(".qtyValue").val(value);
  });
});
