const express = require('express');

const { restrict } = require('./classes-middleware')

const Classes = require('./classes-model')

const router = express.Router();

router.get('/', (req, res) => {
    Classes.find()
    .then(classes => {
        res.json(classes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get classes', err})
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Classes.findById(id)
    .then(classes => {
      if (classes) {
        res.json(classes);
      } else {
        res.status(404).json({ message: 'Could not find class with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get class' });
    });
});

router.post('/', restrict('instructor'), (req, res) => {
    const classData = req.body;
  
    Classes.add(classData)
      .then(classes => {
        res.status(201).json(classes);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new class', err });
      });
});

router.put('/:id', restrict('instructor'),  (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Classes.findById(id)
      .then(classes => {
        if (classes) {
          return Classes.update(changes, id);
        } else {
          res.status(404).json({ message: 'Could not find class with given id' });
        }
      })
      .then(updatedClasses => {
        res.json(updatedClasses);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to update class', err });
      });
  });

  router.delete('/:id', restrict('instructor'),  (req, res) => {
    const { id } = req.params;
  
    Classes.remove(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find class with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete class' });
      });
  });

module.exports = router;
