// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){
   
  (function($) {  // Wrapper to make sure that the $ is used by jQuery and wasn't taken over by another library

    // twitter
    $("#tweets").tweet({
      intro_text:"if you find it interesting that ",
      outro_text: " then please, ",
      join_text: "auto",
      username: "seaofclouds",
      count: 1,
      auto_join_text_default: "we said,", 
      auto_join_text_ed: "we",
      auto_join_text_ing: "we were",
      auto_join_text_reply: "we replied",
      auto_join_text_url: "we were checking out",
      loading_text: "want to learn more? "
    });
    // flickr
     $("#flickr").flickr({
       api_key: "2294ca754368cb1be0e0dff742e050e3",
       user_id: "33005083@N00",
       per_page: 6,
       type: "search",
       sort: "date-posted-desc",
     });
     $("#hearts").flickr({
       api_key: "2294ca754368cb1be0e0dff742e050e3",
       user_id: "33005083@N00",
       per_page: 3,
       type: "search",
       sort: "date-posted-desc",
       tags: "heart, amour",
     });
     $("#stencils").flickr({
       api_key: "2294ca754368cb1be0e0dff742e050e3",
       user_id: "33005083@N00",
       per_page: 3,
       type: "search",
       sort: "date-posted-desc",
       tags: "stencil",
     });
     $("#bicycles").flickr({
       api_key: "2294ca754368cb1be0e0dff742e050e3",
       user_id: "33005083@N00",
       per_page: 3,
       type: "search",
       sort: "date-posted-desc",
       tags: "bicycle",
        
     });
  })(jQuery);

});