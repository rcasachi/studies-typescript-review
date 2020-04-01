import { subtract, log as mathLog } from './math.util';
import { calculateSalary, log } from './employee.service';

export default class Dashboard {
    employeeId;

    createDashboard(){
        subtract(1, 2);
        calculateSalary();
        mathLog();
        log();
    }
}

export function logDashboardActivities() {
    console.log('Logged those Activities');
}