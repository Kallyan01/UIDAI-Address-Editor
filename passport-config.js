const LocalStrategy = require ("passport-local").Strategy;
const bcrypt = require('bcryptjs')

function initialize(passport , getUserByano){
    const authenticateUser = async(ano,pin)=>{
        const user = await getUserByano(ano);
        if(user == null){
            return done(null,false ,{
                message :" No user with that aadhar No"
            });
        }
        try{
            if(await bcrypt.compare(pin,user.pin)){
                return done(null,user)
            }else
            {
                return done(null,false,{message:" Pin Incorrect"})
            }
        } catch(err){
            return done(e)
        }
    }
    passport.use(new LocalStorage({
        anpField: "aadhar No"
    },authenticateUser));
    passport.serializeUser((user, done)=> done(null,user.id))
    passport.deserializeUser(async(id,done)=>{
        return done(null,await getUserById(id));
    })
}
module.exports 