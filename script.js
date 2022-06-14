let mostPopularPhotos=["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg","https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg","https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

$("button").click(function() {
    let photos = $("input").val();
    $(".posts").empty();
    mostPopularPhotos.push(photos);
    console.log(mostPopularPhotos);
    for (let photo of mostPopularPhotos) {
        $(".posts").append("<img src="+photo+">");
}
    if (mostPopularPhotos.length >= 3) {
        $(".message").append("Congrats, you are a Silver Level user!");} 
    if (mostPopularPhotos.length >= 5) {
        $(".message").append("Congrats, you are a Gold Level user!");}
    if (mostPopularPhotos.lengt > 5) {
        $(".message").append("Congrats, you are a Platinum Level user!");
}
});

$("button").click(function() {
    let PopularPhotos = mostPopularPhotos[2];
    $(".liked-photo").append("<img src"+PopularPhotos+">");
});













