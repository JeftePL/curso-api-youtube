$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'CVuyTQN7yjc',
            key: 'AIzaSyATz0oIlbrbn5bXTlXFXP2fb4t6TQVsqmM'},
            function(data) {
                console.log(data);
            }
    )
});