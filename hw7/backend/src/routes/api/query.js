import ScoreCard from "../../models/ScoreCard";

export default async function(req, res)
{
    const params = req.body.params.values()
    console.log(params)
    if(params[0] === "Name" )
    {
        ScoreCard.findMany({Name: params[1]})
    }
    else // Subject
    {
        ScoreCard.findMany({Subject: params[1]})
    }
};