import $ from 'jquery';
import './css/bohe_client.less';

$(() => {
    $('.camera_show').on("click", function () {
        $(".edit_photo_BH").show();
    })
});
