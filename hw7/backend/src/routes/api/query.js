import ScoreCard from "../../models/ScoreCard";

export default async function(req, res)
{
    console.log(req.body)
    if(req.body.params.type === "Name" )
    {
        const result = ScoreCard.findMany({Name: req.body.params.queryString})
        if (result)
        {
            res.send({messages: result, message: ""})
        }
        else
        {
            res.send({messages: result, message: `${req.body.params.type} (${req.body.params.queryString}) not found !`})
        }
        
    }
    else // Subject
    {
        const result = ScoreCard.findMany({Name: req.body.params.queryString})
        if (result)
        {
            res.send({messages: result, message: ""})
        }
        else
        {
            res.send({messages: result, message: `${req.body.params.type} (${req.body.params.queryString}) not found !`})
        }
    }
};