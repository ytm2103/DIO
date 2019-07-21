console.log(123);
/**
 * classの追加 addClass()
 * classの削除 removeClass()
 * タグの追加 $('<div>')
 * 要素の取得
 *  - $('div')
 *  - $('.className')
 *  - $('#idName')
 * その他
 *  - before, after, prepend, append, animate
 * 参考URL
 *  http://semooh.jp/jquery/
 *  https://api.jquery.com/
 */
//モーダル
$(".js-modal").on("click", function() {
  $("body").addClass("modal-open");
  $(".modal-content").fadeIn("slow");
  $("#modal-bg").fadeIn("slow");
});

$(".js-modal-close").on("click", function() {
  $("body").removeClass("modal-open");
  $(".modal-content").fadeOut(1000);
  $("#modal-bg").fadeOut(1000);
});