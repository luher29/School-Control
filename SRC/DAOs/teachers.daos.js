import Teachers from "../models/Teachers.js";

const teacherDaos = {};
//metodo que tiene que devolver todos los estudiantes
teacherDaos.getAll = async () =>{
   //aqui le voy a pedir paro al modelo de mongoose
   //para extraer los estudiantes de mi cluster
   const teachers = await Teachers.find();
   return teachers;

}
//metodo que tiene que devolver un estudiante por su id
teacherDaos.getOne = async (teacher_id) =>{
   const teachers = await Teachers.findOne({teacher_id: teacher_id});
   return teachers;
};

teacherDaos.insertOne = async (teacherData) =>{
   const teacher = await Teachers.create(teacherData);
   return teacher;
};

teacherDaos.updateOne = async (teacher_id, updateData) => {
   const updatedTeacher = await Teachers.findOneAndUpdate({
      teacher_id: teacher_id},
      updateData
   );
   return updatedTeacher;
};  

teacherDaos.deleteOne = async (teacher_id) => {
   const deletedTeacher = await Teachers.findOneAndDelete({teacher_id: teacher_id});
   return deletedTeacher;
}


export default teacherDaos;


