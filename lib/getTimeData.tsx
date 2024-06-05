'use server'
// app/api/fetchTimeData.ts

import { sql, QueryResult } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export interface TimeData {
  date: string;
  total_duration: number;
}

export async function fetchTimeData(): Promise<TimeData[]> {
  noStore(); // Ensure no caching
  try {
    const data: QueryResult<TimeData[]> = await sql<TimeData[]>`
      SELECT date, SUM(time) as total_duration
      FROM time_entries
      WHERE date >= NOW() - INTERVAL '7 days'
      GROUP BY date
      ORDER BY date;
    `;
    return data.rows; // Extract rows from the QueryResult
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

