import teacherDaos from "../DAOs/teachers.daos.js";
const teachersControllers = {};
teachersControllers.getAll = (req,res) =>{
//aqui le vamos a pedir los datos de los estudiantes al dao
teacherDaos.getAll()
    .then(teachers => {
        res.render( "indexTeachers.ejs", {teachers: teachers} );
    })
    .catch(err => {
    res.status(500).json({
        message:"An error has occurred",
        error: err
    });
});
//aqui vamos a responder al cliente
};
teachersControllers.getOne =(req,res)=>{
    teacherDaos.getOne(req.params.teacher_id)
    .then((teacher)=>{
        if(teacher){
        res.render("editTeachers.ejs",{teacher: teacher});
        }else{
            res.status(404).json({
                message:"Teacher not found"
            });
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:"An error has occurred",
            error: err
        });
    });
};
teachersControllers.insertOne =async (req,res)=>{
    teacherDaos.insertOne(req.body)
    .then((newTeacher)=>{
        res.redirect("/api/teachers/getAll");
    })
    .catch(err=>{
        res.status(500).json({ message:"An error has occurred"});
    });
};

teachersControllers.updateOne = async (req, res) => {
    teacherDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher) => {
        if (updatedTeacher) {
        res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
    });
};

teachersControllers.deleteOne = async (req, res) => {
    teacherDaos.deleteOne(req.params.teacher_id)
        .then((deletedTeacher) => {
            if (deletedTeacher) {
                 res.redirect("/api/teachers/getAll");
            } else {
                res.status(404).json({
                    message: "Student not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
        });
    
};

                                        

        
export default teachersControllers;
    