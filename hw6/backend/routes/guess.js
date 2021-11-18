import express from "express";
import { getNumber, genNumber, clearNumber } from '../core/getNumber'

const router = express.Router()

router.post('/start', (_, res) => {
    genNumber()
    res.json({ msg: 'The game has started.' })
})

router.get('/guess', (req, res) => {
    const number = getNumber()
    const guessed =  parseInt(req.query.number) // roughScale(req.query.number, 10)
    // console.log(guessed)
    // Check if the number is in range
    if (!guessed || guessed < 1 || guessed > 100) {
        res.status(406).send({msg: 'Not a legal number.'})
    }
    else if (number === guessed){
        res.status(200).send({msg: 'Equal'})
    }
    else if (number > guessed) {
        res.status(200).send({msg: 'Bigger'})
    }
    else if (number < guessed) {
        res.status(200).send({msg: 'Smaller'})
    }
})

router.post('/restart', (_, res) => {
    clearNumber()
    genNumber()
    res.json({ msg: 'The game has restarted.' })
})

export default router