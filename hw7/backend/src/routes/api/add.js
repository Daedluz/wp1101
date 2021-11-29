import ScoreCard from '../../models/ScoreCard';

export default async function addData(req, res)
{
    console.log(req.body)
    const existing = await ScoreCard.findOne({ Name: req.body.name, Subject: req.body.subject })
    if (existing) {
        await ScoreCard.updateOne({ Name: req.body.name, Subject: req.body.subject }, 
            { Name: req.body.name, Subject: req.body.subject, Score: req.body.score});
        res.send({message: `Updating (${req.body.name}, ${req.body.subject}, ${req.body.score})`})
    }
    try {
        const newScoreCard = new ScoreCard ({ Name: req.body.name, Subject: req.body.subject, Score: req.body.score})
        res.send({message: `Adding (${req.body.name}, ${req.body.subject}, ${req.body.score})`})
        return newScoreCard.save()
    } catch(e) { throw new Error("ScoreCard creation error: " + e) }
    
};