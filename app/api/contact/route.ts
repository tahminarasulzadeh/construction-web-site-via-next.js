import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastName, email, subject, message } = body;

    // Validation
    if (!name || !lastName || !email || !subject) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 422 }
      );
    }

    const newInfo = {
      id: new Date().toISOString(),
      name,
      lastName,
      email,
      subject,
      message,
    };

    // Ensure the data folder exists
    const dataFolder = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataFolder)) {
      fs.mkdirSync(dataFolder);
    }

    const filePath = path.join(dataFolder, 'contact.json');

    // Read existing data
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(fileData);
    }

    // Append new data
    data.push(newInfo);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'Success', info: newInfo }, { status: 201 });
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

