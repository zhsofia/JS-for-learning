var obj = {
    0: {
        personalData: {
            name: "Jane",
            id: 0,
            family: "Stonefall",
            age: 17,
        },
        stateData: {
            status: "Statemage",
            category: "zoomer",
            spells: ["Center", "Destruction", "Gravitate"]
        }
    },
    1: {
        personalData: {
            name: "Malcolm",
            id: 1,
            family: "Saphire",
            age: 19,
        },
        stateData: {
            status: "Clanmage",
            category: "sensor",
            spells: ["Selection", "Detection", "Fade"]
        }
    }
};

var objCopy = JSON.parse(JSON.stringify(obj));

function update(id, newName, newFamily, newAge, newStatus, newCategory, newSpell) {
    if (obj.hasOwnProperty(id)) {
        obj[id].personalData.name = newName;
        obj[id].personalData.family = newFamily;
        obj[id].personalData.age = newAge;
        obj[id].personalData.id = id;
        obj[id].stateData.status = newStatus;
        obj[id].stateData.category = newCategory;
        obj[id].stateData.spells.push(newSpell);
    }else {
        document.write("Id not found.")
    }

};

function readData(id) {
    document.write("<p>Id: " + id + "</p>");
    document.write("<p>Name: " + obj[id].personalData.name + "</p>");
    document.write("<p>Family: " + obj[id].personalData.family + "</p>");
}

readData(0);
update(0, "Cami", "Florence", 16, "CrownMage", "Attacker",
    ["Breake"]);
readData(0);

function add(id, newName, newFamily, newAge, newStatus, newCategory, newSpell) {
    obj[id] = {
        personalData: {
            name: newName,
            id: id,
            family: newFamily,
            age: newAge,
        },
        stateData: {
            status: newStatus,
            category: newCategory,
            spells: newSpell
        }
    }
}

add(2, "Sallyvan", "Mortimer", "22", "Crownmage", "Seeler");
readData(2);