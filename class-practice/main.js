const who = "Michael"
const columnIndex = ["Subject", "Score"]
const scoreCard = 
{
    name : `${who}`,
    records: 
    [
        ["Math", 100],
        ["Chinese", 87],
    ],
};


class Row 
{
    constructor(data, tag){
        this.node = document.createElement("tr");
        for (let i=0; i<data.length; i++)
        {
            let tNode = document.createElement(tag);
            tNode.textContent = data[i];
            this.node.appendChild(tNode);
        }
    }

    get rNode() {return this.node;}
}

let tableNode = document.getElementById("table");

let capNode = document.createElement("caption");
capNode.textContent = `${who}'s Score`;
let rowNode = new Row(columnIndex, "th").rNode;

headNode.appendChild(rowNode);
tableNode.appendChild(headNode);

let bodyNode = document.createElement("tbody")
for (let i = 0; i<scoreCard.records.length; i++)
    bodyNode.appendChild(new Row(scoreCard.records[i], "td").rNode);
tableNode.appendChild(bodyNode);