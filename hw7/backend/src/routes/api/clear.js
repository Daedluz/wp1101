import ScoreCard from "../../models/ScoreCard";

export default async function clear (req, res) 
{
    try {
        await ScoreCard.deleteMany({});
        console.log("Database cleared");
        res.send({message: "Database cleared"})
    }
    catch (e) { throw new Error ("Database deletion failed"); }
};