import { Router} from 'express';
import teachersControllers  from "../controllers/teachers.controllers.js";
const router = Router();

router.get("/getAll",teachersControllers.getAll);

router.get("/getOne/:student_id",teachersControllers.getOne);
router.post("/insertOne", teachersControllers.insertOne);
router.post("/updateOne/:student_id", teachersControllers.updateOne);
router.delete("/deleteOne/:student_id",teachersControllers.deleteOne);
router.get("/deleteOne/:student_id",teachersControllers.deleteOne);


export default router;

