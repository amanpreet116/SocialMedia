const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://amanpreet116:yUzIF1MaMADrnYth@cluster1.yf08x0s.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


