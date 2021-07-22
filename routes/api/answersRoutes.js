const router = require('express').Router();
const Answer = require('../../models/answer');
const authCheck = require('../../middleware/authCheck');

// Post answer to a question by using Question's Object Id

router.post('/:id', authCheck, async (req, res) => {
  const newAnswer = new Answer({
    ...req.body,
    parentQuestion: req.params.id,
    owner: req.user._id,
  });
  try {
    await newAnswer.save();
    res.status(201).send(newAnswer);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Edit body of existing answer

router.patch('/answer/:id', authCheck, async (req, res) => {
  const answer = await Answer.FindOneAndUpdate({_id:req.params.id}, {details: req.body.details}, {new: true}, async (e)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});

// Update likes. Expects objectid of user and a string (up/down) in req. Validation of the vote
// (if the user has already voted) is done client side. 

router.patch('/answer/:id/like', authCheck, async (req, res) => {
  const answer = await Answer.FindOneAndUpdate({_id:req.params.id}, {$push: {likes: req.body.userid}}, {new:true}, async (e)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});

// Update dislikes. Expects objectid of user and a string (up/down) in req. Validation of the vote
// (if the user has already voted) is done client side. 

router.patch('/answer/:id/dislike', authCheck, async (req, res) => {
  const answer = await Answer.FindOneAndUpdate({_id:req.params.id}, {$push: {dislikes: req.body.userid}}, {new: true}, async (e,doc)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});

//Adds new comments.

router.patch('/answer/:id/comment', authCheck, async(req, res) => {
  const newComment = {
    commentUser: req.body.userID,
    commentDetails: req.body.commentDetails,
  };
  const answer = await Answer.FindOneAndUpdate({_id:req.params.id}, {$push: {comments: newComment}}, {new: true}, async (e,doc)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});


module.exports = router;
