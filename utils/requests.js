
//Fetch All Property

async function fetchProperties() {
    try {
        const res = await fetch('http://localhost:3000/api/properties', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return await res.json();
    } catch (error) {
        console.log("Error fetching properties:", error);
        return [];
    }
}

//Fetch Single Property
async function fetchProperty(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/properties/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return await res.json();
    } catch (error) {
        console.log("Error fetching properties:", error);
        return null;
    }
}

export { fetchProperties, fetchProperty };