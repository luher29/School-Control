//cadena de coneccion e inicializamos la conexion con mongo db, que es moongoiose


//importamos mongoose
import  mongoose from 'mongoose';
//creamos la cadena de coneccion
mongoose.connect("mongodb+srv://lupita29:luher29@lupita.vup0axr.mongodb.net/school_control?retryWrites=true&w=majority&appName=Lupita")
//then para responder que si hubo connecion
.then(()=>console.log("mongo db connected"))
//catch si hubo un herror 
.catch((err)=>console.log(err));

export default mongoose;


