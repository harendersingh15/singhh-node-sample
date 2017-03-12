import { Response, Request, Router } from 'express'
import { Employee } from './employee.model';
const employeeRouter: Router = Router();

interface employee {

    name: String,
    mobile: number,
    age: 5
}

employeeRouter.get('/', (req: Request, res: Response) => {
    Employee
        .find({})
        .lean()
        .exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

employeeRouter.post('/employee', (req: Request, res: Response) => {
    let employee = new Employee();

    employee.name = req.body.name;
    employee.age = req.body.age;
    employee.mobile = req.body.mobile;

    employee.save((error: any, data: any) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.send(data);
    });
    //res.send('done');
});

export { employeeRouter }