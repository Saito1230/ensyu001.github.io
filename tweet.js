const Init = () => {
  let cyoufuku = [];
  for(let i = 0; i < tweets.length; i++) {
    if(cyoufuku.includes(tweets[i].name)) continue;
    $(".menu").append(`<button type=\"button\" class=\"btn btn-info\" style=\"float: left\" onclick="showTweet(\'${tweets[i].name}\')">${tweets[i].name}</button>`);
    cyoufuku.push(tweets[i].name);
  }
  showTweet();
}

const showTweet = (name="all") => {
  $(".main>").remove();
  for(let i = 0; i < tweets.length; i++){
    if(tweets[i].name !== name && name !== "all") continue;
    $(".main").append(`<div class='tweet'><img src=\"${tweets[i].avatar}\" class=\"tweet_icon\" /><p><b>${tweets[i].name}</b></p><p><b>${tweets[i].message}</b></p><p style="font-size: 5px;"><b>${tweets[i].tweetedAt}</b></p></div>`)
  }
}