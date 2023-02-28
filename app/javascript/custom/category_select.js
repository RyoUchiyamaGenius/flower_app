$(document).on('turbolinks:load', function() {

    // 復活させるダミーのサブカテゴリーのセレクトボックス
    let defaultSubCategorySelect = `<div id="sub_category"><div class="field"><div class="form-group"><label for="post_category">サブカテゴリー</label><select name="sub_category", class="form-control">
    <option value>---</option>
    </select></div></div></div>`;

    // サブカテゴリーの処理
    $(document).on('change', '#post_category', function() {
        let categoryVal = $('#post_category').val();

        // カテゴリーが変更されてvalueに値が入った場合の処理
        if (categoryVal !== "") {
            let selectedTemplate = $(`#sub_category_${categoryVal}`); //呼び出すtemplateのidセット

            $('#sub_category').remove(); // デフォルト表示用のサブカテゴリーを削除
            $('#selected_sub_category').remove(); // 前に選択したサブカテゴリーがある場合に削除
            $('#sub_category_insert_point').after(selectedTemplate.html()); // カテゴリーに紐づいたサブカテゴリーセレクトを追加

        } else {
            // カテゴリーが選択されていない場合
            $('#selected_sub_category').remove();
            $('#sub_category').remove();
            $('#sub_category_insert_point').after(defaultSubCategorySelect);

        };
    });
});