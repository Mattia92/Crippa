$(document).ready(ready);

function ready(){
    var id=1;
    
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://frankgym.altervista.org/php/getCoursesCategory.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
           var category =JSON.parse(response);
           var i=0;
           var k=0;
           var elems = $('.cat');
           
           for(var i = 0; i<category.length ;i++) {
                var url = "url(" + "'" + category[i].url + "'" + ")";
           		elems.eq(i).css("backgroundImage", url);
                /*elems*/$('.Title').eq(i).text(function(){
    				$(this).wrapInner('<a href="http://frankgym.altervista.org/category.html?idCategory='+category[i].ID+'">'+category[i].Title+"<br>"+'</a>')});
				} 
        },
        error: function(request,error) 
        {
        }
    });

}

$(document).ready(courses);

function courses(){
    var id=1;
    
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://frankgym.altervista.org/php/getCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
           var category =JSON.parse(response);
           var i=0;
           var k=0;
           var elems = $('.cat');
           
           
           
            for(var k = 0; k<6 ;k++){
            	for(var i = 0; i<category.length ;i++) {
		    if($('.Title').eq(k).text() == category[i].category)
		    {
			$('.shortDescription').eq(k).append(function(){
				$(this).wrapInner('<a href="http://frankgym.altervista.org/course.html?idCourse='+category[i].id+'">'+category[i].title+"<br>"+'</a>')});
            		}
	 	    }
              }
        },
        error: function(request,error) 
        {
        }
    });

}
