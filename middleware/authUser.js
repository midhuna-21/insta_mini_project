import jwt from 'jsonwebtoken';

 const authUser = async () => {
    try {
        let jwtsecretkey = process.env.JWT_SECRET;
        const token = req.headers["authorization"];
        if (!token) {
            res.status(403).json({ message: "No token provided" });
        }
        jwt.verify(token, jwtsecretkey, (err) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized user" });
            }
            next();
        });
    } catch (error) {
        console.error(error);
    }
};

export {authUser}