import { NextResponse } from 'next/server';
import DataLayer from '../../../lib/universes/data';

export async function GET() {
  try {
    const universesWithDetails = await DataLayer.getAllUniversesWithDetails();
    return NextResponse.json(universesWithDetails);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}