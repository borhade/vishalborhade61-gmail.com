router.get('/friends',function(req,res){
  var data = req.app.get('appData');
  var page_friends = data.friends;
    res.render('friendlist',{
        pageid:'ALL_FRIENDS',
        pagetitle:'All_Friends_page',
        friend_name:page_friends
    });
});
