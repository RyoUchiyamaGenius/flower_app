var stringToHTML = function(str) {
    var dom = document.createElement('div');
    dom.id = 'sub_category';
    dom.innerHTML = str;
    return dom;
};

document.addEventListener('turbo:load', function() {
    let category = document.querySelector('#category');
    let defaultSubCategorySelect = `<select name="sub_category" id="sub_category">
    <option value>---</option>
    </select>`;

    // カテゴリーが変更された時の処理
    category.addEventListener('change', function() {
        
        // カテゴリーが選ばれた場合
        if (category.value !== '') {

            // 空のサブカテゴリーのセレクトボックスを削除
            let subCategory = document.querySelector('#sub_category');
            subCategory.remove();

            // 選択されたカテゴリーに応じたHTMLを挿入
            let selectedTemplate = document.querySelector(`#sub-category-of-category${category.value}`);
            category.after(stringToHTML(selectedTemplate.innerHTML));
        
        // include_blankの部分が選択された場合
        } else {

            // サブカテゴリー選択用のセレクトボックスを削除
            let subCategory = document.querySelector('#sub_category');
            subCategory.remove();

            // ダミーのセレクトボックスを挿入
            category.after(stringToHTML(defaultSubCategorySelect));
        };
    });
});