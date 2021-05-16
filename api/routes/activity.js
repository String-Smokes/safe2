const router = require('express')()
const Activity = require('../models/Activity')

router.post('/create', async (req,res) => {
    console.log('activity',req.body)
    const ActivityPost = new Activity({
        title : req.body.title,
        desc : req.body.desc,
    })
    try {
        const savedPost = await ActivityPost.save();
        console.log(ActivityPost);
        res.status(200).json(ActivityPost);
    }catch(err){
        console.log(err)
        res.status(200).json(err);
    }
  
})

router.get('/', async (req,res) => {
    Activity.find({})
            .then(posts => {
                console.log(posts)
                if(!posts){
                    return res.status(200).json({post : false, text : 'NO Current  Activities' })
                }else{
                    return res.status(200).json({post : true, posts : posts})
                }
            })
})




module.exports = router;