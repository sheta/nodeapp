 $(document).ready(function(){
  			   //geturlKywd();
               geturlrply(); 
 });
 			var tweets = "";
 			var urlworeply='https://api.twitter.com/1/statuses/user_timeline/Resilience_Proj.json?exclude_replies=1&include_rts=false&count=50&callback=?';
			var urlwreply='https://api.twitter.com/1/statuses/user_timeline/Resilience_Proj.json?exclude_replies=-1&include_rts=false&count=50&callback=?';
			var urlkywrd = 'http://search.twitter.com/search.json?q=stanford_resilience&rpp=25&include_entities=false&result_type=mixed&callback=?';
			var urlreply = 'http://search.twitter.com/search.json?q=to:resilience_proj&callback=?';  
					
					
     		var getidreply= new Array(), getId= new Array(), getText = new Array(), getText2= new Array(), allText= new Array(), replytweets= new Array();
					function geturlKywd(){
					$.getJSON(urlkywrd, function(data){  
       				var texts = data['results'];
                	$.each(texts, function(i, moretweets){
              		var texttweets = moretweets['text'];  
              		getText2[i] = texttweets;

                	$('#newsfeed').append('<div class = "feedPost"><p class = "postText">' + texttweets + '</p></div><input class="postText" type="button" id="tweet" value="VIEW"/>'); 	
               	});           		
                    }); 
               }   
               $.getJSON(urlreply, function(json){
						//console.log(json);
						allText= getText.concat(getText2);
             				var tweeting = json['results'];
                         		$.each(tweeting, function(j, replytweet){
                         		getidreply[j]= replytweet['id_str'];
                      	                         		
                        		replytweets[j] = replytweet['text']; 
                     		 	//console.log(replytweets+ getidreply);
                     		 
                     		 //if(getId[j] === getidreply[j]){
                   //console.log(getText[j]+getId[j]+replytweets+getidreply[j]);
                     		// 	 }
                     //		 else{
                     		 	//$('#innerfeild').append('<li><div id="displayQuote"><p class="quote"><span class="name">stanford_student:</span><div id="#'+getId[j]+'">'+allText[j]+'</p></div></div></li>'+'<li><h1 id="commentTitle">COMMENTS</h1><p class = "commentText">'+replytweets+'</p></li>');
                     	//	 }
                     	});
                   });
 
               function geturlrply(){
              
					 $.getJSON(urlworeply, function(data){ 
					
								$.each(data, function(i, tweet){
								if(!(tweet.text === "undefined")){
				   		            tweets = tweet.text;
					   		         	getId[i]= tweet.id_str;
										getText[i] = tweet.text;
										
		
               		
				$('#newsfeed').append('<div class = "feedPost"><p class ="postText">' + tweet.text + '</p></div><input type="button" class="postText" id="'+i+'tweet" value="VIEW"/>');     			      
		}else {"I am worried about my grades and if i will pass my classes" };
				  
				  $('#newsfeed > input').each(function(){
               $('#'+i+'tweet').on('click',function(){
               window.open('final.html?'+getText[i]+replytweets[i]+'', '_self');	
               //window.location = 'final.html?'+getText[i]; 
               		});
               		});
							  }); 

			});

     }
          
          
          	
          	
          	
            
 

