// Simple script to push the Drizzle schema to the database
import { exec } from 'child_process';

console.log('Running database schema migration...');

// Run drizzle-kit push command
exec('npx drizzle-kit push:pg', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  
  console.log(`Schema migration completed successfully:\n${stdout}`);
});