import * as fs from 'fs';
import {parse} from 'csv-parse/sync';

export function readCSV(filepath){
    const content = fs.readFileSync(filepath, 'utf-8');
    return parse(content,{
        columns: true,
        skip_empty_lines: true
    })

}