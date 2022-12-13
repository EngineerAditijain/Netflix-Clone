const User =require("../models/UserModel");


module.exports.addToLikedMovies= async(req,res)=>{
    try{
        const {email,data} = req.body;
        const user = await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id}) => (id === data.id));
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies:[...user.likedMovies,data]
                    },
                    {new:true}
                )
            }
            else{
                return res.json({msg:"Movie already added to list"});
            }
        }
        else await User.create({email,likedMovies:[data]});
        return res.json({msg:"Movie added successfully"});
    }catch(error){
        //console.log(error);
        return res.json({msg:"Error occured In adding Movies"});
    }
}

module.exports.getLikedMovies = async(req,res)=>{
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        if(user){
            return res.json({msg:"success",movies:user.likedMovies});
        }
        else return res.json({msg:"User with given email is not found"});
    }catch(e){
        return res.json({msg:"Error occured In getting Movies"});
    }

}

module.exports.removeFromLikedMovies = async(req,res)=>{
    try{
        const {email,movieId} = req.body;
        const user = await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieIndex = likedMovies.findIndex(({id}) => (id === movieId));
            if(!movieIndex)res.status(400).send({msg:"movie not found"});
            likedMovies.splice(movieIndex,1);
            
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies,
                    },
                    {new:true}
                )
                return res.json({msg:"Movie deleted successfuly",movies:likedMovies})
                }
               
    }catch(e){
        return res.json({msg:"Error occured In removing Movies"});
    }
}
