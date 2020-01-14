var nomeCanal = 'RiotGamesInc';
var upload_id;

$(document).ready  (function (){
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part: 'contentDetails',
        forUsername: nomeCanal, 
        key: 'AIzaSyATz0oIlbrbn5bXTlXFXP2fb4t6TQVsqmM'}, 
    function (data) {
        upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
        pegarVideos(upload_id);
    }
  )

    function pegarVideos(id) {
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            part: 'snippet',
            maxResults: 12,
            playlistId: id,
            key: 'AIzaSyATz0oIlbrbn5bXTlXFXP2fb4t6TQVsqmM'
        },

        function (data) {
            var imagem;
            var arquivo;
            $.each(data.items, function(i, item){
                imagem = item.snippet.thumbnails.medium.url;
                arquivo = '<li class="principal"><img src="'+ imagem + '" /></li>';
                $('div#janela ul').append(arquivo);
            });
        }

        )
    }

});