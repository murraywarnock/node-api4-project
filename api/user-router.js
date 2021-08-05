const express = require('express');

// const Hubs = require('./hubs-model.js');
// const Messages = require('../messages/messages-model.js');

const router = express.Router();

function checkIdExists(req, res, next) {

}

function checkHubPayload(req, res, next) {

  
}

router.get('/', (req, res, next) => {
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      next(error) 
    });
});

router.get('/:id', checkIdExists, (req, res, next) => {
  res.json(req.hub)
});

router.post('/', checkHubPayload, (req, res, next) => { // { name: 'lady gaga' }
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      next(error)
    });
});

router.delete('/:id', checkIdExists, (req, res, next) => {
  Hubs.remove(req.hub.id)
    .then(() => {
      res.status(200).json({ message: 'The hub has been nuked' });
    })
    .catch(error => {
      next(error)
    });
});

router.put('/:id', checkIdExists, checkHubPayload, (req, res, next) => {
  Hubs.update(req.params.id, req.body)
    .then(hub => {
      res.status(200).json(hub);
    })
    .catch(next);
});

// alternative using try /catch (won't be reached cause it comes 2nd)
router.put('/:id', checkIdExists, async (req, res, next) => {
  try {
    const updatedHub = await Hubs.update(req.params.id, req.body)
    res.json(updatedHub)
  } catch (err) {
    next(err)
  }
});

router.get('/:id/messages', checkIdExists, (req, res, next) => {
  Hubs.findHubMessages(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      next(error) // UNNECESSARY FUNCTION WRAPPING!!!!
    });
});

router.post('/:id/messages', checkIdExists, (req, res, next) => {
  const messageInfo = { ...req.body, hub_id: req.params.id };

  Messages.add(messageInfo)
    .then(message => {
      res.status(210).json(message);
    })
    .catch(next); // the same as the ones above
  // but avoiding useless function wrapping!!!
});

module.exports = router;
