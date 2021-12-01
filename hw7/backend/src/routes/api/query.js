import ScoreCard from "../../models/ScoreCard";

export default async function(req, res)
{
    // console.log(req.body)
    if(req.body.type === "name" )
    {
        const result = await ScoreCard.find({Name: req.body.queryString})
        if (result.length > 0)
        {
            res.send({messages: result, message: ""})
        }
        else
        {
            res.send({messages: result, message: `${req.body.type} (${req.body.queryString}) not found !`})
        }
        
    }
    else // Subject
    {
        const result = await ScoreCard.find({Name: req.body.queryString})
        if (result)
        {
            res.send({messages: result, message: ""})
        }
        else
        {
            res.send({messages: result, message: `${req.body.type} (${req.body.queryString}) not found !`})
        }
    }
};