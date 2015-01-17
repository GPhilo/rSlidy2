(function($){

  script_tag = function(src){
    var $tag = $("<script>")
      .attr("charset", "utf-8")
      .attr("type", "text/javascript");
    
    if (src != undefined)
      $tag.attr("src", src);
    
    return $tag;
  }

  include_slidy = function(callback){
    // var files = ["scripts/rslidy2.js", "scripts/fulltilt.js"],
    var files = ["scripts/rslidy2.js", "scripts/fulltilt.js"],
      file_count = files.length;
    
    $.each(files, function(){
      var file = this;
      var xhr = $.ajax({
        type: "get",
        url: file,
        dataType: "script",
        cache: true,
        success: function(data) {
          eval(data);

          file_count--;
          if (file_count == 0 && callback != undefined) {
            callback();
          }
        }
      });
    });
  }

  load_slides = function(files_to_include, callback) {
    var file_count = files_to_include.length;

    $.each(files_to_include, function(){
      var $element = $(this);
      var file_url = $element.data("include")

      $.get(file_url, function(data, status, xhr){
        var $new_slides = $(data)
        
        file_count--;

        $new_slides.insertAfter($element);
        $element.remove();
        
        if (file_count == 0) {
          callback();
        }
      });
    });
  }

  $(function(){
    var files_to_include = $("*[data-include]");

    if (files_to_include.length > 0) {
      load_slides(files_to_include, function(){
        include_slidy(function(){
          window.w3c_slidy.init();
        });
      });
    } else {
      include_slidy(function(){
        window.w3c_slidy.init();
      });
    }
  });

})($);