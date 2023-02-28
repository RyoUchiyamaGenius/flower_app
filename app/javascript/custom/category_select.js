$(document).on('turbolinks:load', function() {
    //HTMLが読み込まれた時の処理
    let categoryVal = $('#category').val();
    //一度目に検索した内容がセレクトボックスに残っている時用のif文
    if (categoryVal !== "") {
     let selectedTemplate = $(`#sub-category-of-category${categoryVal}`);
     $('#sub_category').remove();
     $('#category').after(selectedTemplate.html());
    };
   
    //先ほどビューファイルに追加したもともとある子要素用のセレクトボックスのHTML
    let defaultSubCategorySelect = `<select name="sub_category" id="sub_category">
   <option value>サブカテゴリーを選択してください</option>
   </select>`;
   
    $(document).on('change', '#category', function() {
     let categoryVal = $('#category').val();
     //親要素のセレクトボックスが変更されてvalueに値が入った場合の処理
     if (categoryVal !== "") {
      let selectedTemplate = $(`#sub-category-of-category${categoryVal}`);
      //デフォルトで入っていた子要素のセレクトボックスを削除
      $('#sub_category').remove();
      $('#category').after(selectedTemplate.html());
     }else {
      //親要素のセレクトボックスが変更されてvalueに値が入っていない場合（include_blankの部分を選択している場合）
      $('#sub_category').remove();
      $('#category').after(defaultSubCategorySelect);
     };
    });
   });