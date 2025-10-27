import { readFileSync } from 'fs';
import { resolve, join } from 'path';

export function readCSV(filepath: string): Record<string, string>[] {
    // Find the project root by looking for package.json
    let currentDir = process.cwd();
    const projectRoot = currentDir.includes('PW_Practice') 
        ? currentDir.split('PW_Practice')[0] + 'PW_Practice'
        : currentDir;
    
    const absolutePath = resolve(join(projectRoot, filepath));
    
    const content = readFileSync(absolutePath, 'utf-8');
    const lines = content.trim().split('\n');
    const headers: string[] = lines[0]?.split(',') ?? [];
    
    return lines.slice(1).map((line: string) => {
        const values = line.split(',');
        const obj: Record<string, string> = {};
        headers.forEach((header: string, index: number) => {
            obj[header.trim()] = values[index]?.trim() ?? '';
        });
        return obj;
    });
}