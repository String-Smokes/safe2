const router = require('express')()
const Election = require('../models/Election')

router.post('/create', async (req,res) => {
    console.log('election',req.body)
    const ElectionPost = new Election({
        title : req.body.title,
        desc : req.body.desc,
        candidates : req.body.candidates
    })
    try {
        const savedPost = await ElectionPost.save();
        console.log(ElectionPost);
        res.status(200).json(ElectionPost);
    }catch(err){
        res.status(200).json(err);
    }
  
})

router.get('/', async (req,res) => {
    Election.find({})
            .then(posts => {
                if(!posts){
                    return res.status(200).json({post : false, text : 'NO Elections Are Conductiong' })
                }else{
                    return res.status(200).json({post : true, posts : posts})
                }
            })
})


module.exports = router;