import ScoreCard from "../../models/ScoreCard";

export default async function clear () 
{
    try {
        await ScoreCard.deleteMany({});
        console.log("Database cleared");
    }
    catch (e) { throw new Error ("Database deletion failed"); }
};