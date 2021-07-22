const router = require('express').Router();
const Question = require('../../models/question');
const authCheck = require('../../middleware/authCheck');
const Answer = require('../../models/answer');


// Get all questions available on forum sorted by most recently posted

router.get('/', authCheck, async (req, res) => {
  try {
    const questions = await Question.find().sort({ updatedAt: 'asc' });
    res.send(questions);
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error!' });
  }
});

// Get question and all answers by using objectId of the question

router.get('/:id', authCheck, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    await question.populate({ path: 'answers' }).execPopulate();
    res.send({ question, answers: question.answers });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Post New Question and set currently logged in user as the owner of the question

router.post('/', authCheck, async (req, res) => {
  const newQuestion = new Question({ ...req.body, owner: req.user._id });
  try {
    await newQuestion.save();
    res.status(201).send(newQuestion);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Edit body of existing Question. Title is uneditable.

router.patch('/:id', authCheck, async (req, res) => {
  const question = await Question.FindOneAndUpdate({_id:req.params.id}, {description: req.body.description}, {new: true}, async (e,doc)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});

// Update likes. Expects objectid of user and a string (up/down) in req. Validation of the vote
// (if the user has already voted) is done client side. 

router.patch('/:id/like', authCheck, async (req, res) => {
  const question = await Question.FindOneAndUpdate({_id:req.params.id}, {$push: {likes: req.body.userid}}, {new:true}, async (e,doc)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});

// Update dislikes. Expects objectid of user and a string (up/down) in req. Validation of the vote
// (if the user has already voted) is done client side. 

router.patch('/:id/dislike', authCheck, async (req, res) => {
  const question = await Question.FindOneAndUpdate({_id:req.params.id}, {$push: {dislikes: req.body.userid}}, {new: true}, async (e,doc)=>{
    if(e){
      res.status(400).send(e.message);
    }else{
      res.status(201).send(doc);
    }
  });
});


module.exports = router;
