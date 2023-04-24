
var arr_hinh = [
    "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/09/11.jpg",
    "https://bloggame.net/uploads/worigin/2020/03/28/hinhnenlienminhhuyenthoai4k15e7ec3c27825c_5a75a1d905dd7a01d068e5fcba4fc69a.jpg",
    "https://gameviet.mobi/wp-content/uploads/2020/03/League-Of-Legends-LOL-Wallpaper-Full-HD-10-2.jpg",
    "https://cachtrongrausach.vn/tai-hinh-lien-minh-huyen-thoai/image-download-top-150-hinh-nen-lien-minh-huyen-thoai-full-hd-dep-mien-che-tong-hop-hinh-nen-lien-minh-huyen-thoai-full-hd_2_5475_700.jpg"
];
var arr_mota = [
    "Jax Thần Trượng",
    "Yasuao",
    "Zed",
    "Pyke Siêu Phẩm"

];

var index = 0

function prev(){
    index--;
    if(index < 0) index = arr_hinh.length-1;
    document.getElementById("hinh").src=arr_hinh[index];
    document.getElementById("mota").innerText = arr_mota[index];
}
function next(){
    index++;
    if(index == arr_hinh.length) index = 0;
    document.getElementById("hinh").src=arr_hinh[index];
    document.getElementById("mota").innerText = arr_mota[index];
}
setInterval("next()",5000)