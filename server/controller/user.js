// your controller do the logic and return the result

// accept two parameters: req and res
const user = async (req, res) => {
    //logic 
    res.status(200).send({
        username: "Biruk Endris",
    });
};

export default user;