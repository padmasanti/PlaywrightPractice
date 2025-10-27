import * as xlsx from 'xlsx';
import { resolve, join } from 'path';

export function readXLSX(filePath: string, sheetName: string): any[] {
    // Find the project root by looking for package.json
    let currentDir = process.cwd();
    const projectRoot = currentDir.includes('PW_Practice') 
        ? currentDir.split('PW_Practice')[0] + 'PW_Practice'
        : currentDir;
    
    const absolutePath = resolve(join(projectRoot, filePath)); 
    

    const workbook = xlsx.readFile(absolutePath);
    const sheet = workbook.Sheets[sheetName];
   /* if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in the workbook`);
    } */
    return xlsx.utils.sheet_to_json(sheet);
}
